Apple's iCloud Passwords extension fills and saves your Apple Passwords in Dia again. Without it, a patched Dia gets "iCloud Passwords couldn't connect to a helper application".

## Why use it

If you keep passwords in Apple Passwords, Apple's iCloud Passwords extension fails in a patched Dia, so you can't fill or save them.

Turn it on if you use that extension. The tradeoff is the original Dia flashing in the Dock for about half a second as the extension connects.

## Turn it on

It's off by default. Open **Dia → Settings → Patches** and switch on **Allow iCloud Passwords**. Or run:

```sh
diatweaks enable icloudPasswords
```

Then add **iCloud Passwords** from the Chrome Web Store and click its icon. If it asks for a code, type the 6-digit code macOS shows you.

It works for [Better Passwords](https://betterpasswords.app) too, which talks to the same Apple helper. Set it up as its site says, then turn this on. While it's on, Better Passwords' own setup file for Chrome's folder is kept aside and put back when you turn it off.

It works for [Open Passwords](https://github.com/araeyn/apple-passwords-bridge) too. Install its extension; you don't need its helper app, since DiaTweaks starts Apple's helper for it. If you have the helper app, its setup file is kept aside the same way while this is on.

## FAQ

<details>
<summary><strong>It says "Couldn't write … NativeMessagingHosts: You don't have permission"</strong></summary>

Dia only reads extension helpers from `~/Library/Application Support/Google/Chrome`, and on your Mac that folder isn't yours to write to, usually because an installer or a command run with `sudo` made it. Take it back by running this in Terminal and typing your Mac password when asked:

```sh
sudo chown -R "$(whoami)" "$HOME/Library/Application Support/Google/Chrome" && chmod -R u+w "$HOME/Library/Application Support/Google/Chrome"
```

Then turn the switch on again. Chrome keeps working as before, since the folder still belongs to you.

</details>

<details>
<summary><strong>Why doesn't Better Passwords' setup reach Dia?</strong></summary>

Dia reads these setup files only from Chrome's folder, `~/Library/Application Support/Google/Chrome/NativeMessagingHosts`, not from Dia's own. With this on, DiaTweaks writes the file Better Passwords needs there, whether or not Chrome is installed.

</details>

<details>
<summary><strong>Why does a second Dia flash in the Dock?</strong></summary>

macOS only lets Apple's password helper start under the Dia Apple approved, and it only checks as the helper starts. So each time the extension connects, usually once per profile as Dia opens, DiaTweaks opens the original Dia it keeps, without windows, just long enough to start the helper, then quits it. Its icon shows in the Dock for about half a second. After that the extension talks to Apple's helper directly.

</details>

<details>
<summary><strong>Why does the pairing window say "(null)"?</strong></summary>

Apple's helper names the browser after the app that started it, and by then the original Dia has quit. Pairing still works.

</details>

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes. It doesn't change anything you see in Dia.

</details>

<details>
<summary><strong>Why did it switch itself off?</strong></summary>

It checks its setup when you turn it on and each time Dia opens: Apple's helper, the file that tells the extension where to connect, and the files DiaTweaks keeps. If something's missing, it sets it up again, up to three times. If that doesn't fix it, it switches itself off and an alert says what's wrong, like that file not being writable, another app having replaced it, or DiaTweaks needing to be installed again.

</details>
