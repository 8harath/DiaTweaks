
Lets sites sign you in with passkeys saved in Apple Passwords (iCloud Keychain). It's experimental, and off by default since it opens the original Dia for a moment each time.

![The Touch ID prompt for a passkey, over the small window the original Dia opens](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/images/allow-icloud-passkeys.png)

## Why use it

If your passkeys are in Apple Passwords, a patched Dia can't offer them, so sites that need a passkey leave you stuck.

Turn it on if you sign in to sites with iCloud passkeys. The tradeoff is a brief second Dia window behind the Touch ID prompt each time, and it is experimental.

## Why this is needed

Apple only lets a browser use your iCloud passkeys if that browser has Apple's permission. Dia has it. But that permission is tied to Dia exactly as The Browser Company shipped it, and the moment DiaTweaks changes Dia, macOS no longer counts it as the browser Apple approved. Without this tweak, sites that ask for a passkey in a patched Dia can't see the ones in Apple Passwords.

Only Apple can give that permission, and it can't be added back afterwards. So there's no way to make the patched Dia reach your passkeys by itself.

## How it works

DiaTweaks already keeps a copy of the original, unchanged Dia on your Mac, because it builds the patched Dia from it. That original still has Apple's permission.

So when a site asks for a passkey:

1. The original Dia opens in a small window, just the size of the Touch ID prompt, and goes to the same site.
2. The Touch ID prompt appears on top of it, so the prompt is mostly all you see.
3. You approve with Touch ID, like in any browser.
4. The site in your Dia gets the passkey, and the small window closes by itself.

We've tried to make it feel as normal as we can. The window is tiny and sits behind the prompt, it's muted, it skips Dia's intro, and it signs in with your Dia account on its own. It's still a second Dia opening for a few seconds, and you might notice it in the Dock. There isn't a smoother way to do this without Apple's permission.

## Turn it on

Open **Dia → Settings → Patches**, switch on **Allow iCloud Passkeys**, and relaunch Dia when it asks. Or run:

```sh
diatweaks enable passkeys
```

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
<summary><strong>Is it safe?</strong></summary>

Yes. Your passkeys never leave Apple Passwords, and each one still needs your Touch ID or password, the same as in Safari or Chrome. The original Dia is the one The Browser Company signed, untouched. It only opens the site that asked, and it quits as soon as you're done.

</details>

<details>
<summary><strong>Why is it slow the first time?</strong></summary>

The original Dia has to start up, which takes a few seconds. After that the prompt shows up quickly.

</details>

<details>
<summary><strong>Why doesn't a site suggest my passkey in its sign-in field?</strong></summary>

Some sites offer your passkey as soon as you click their sign-in field. That's off here, or the original Dia would open every time you visited one of those pages. Use the site's "Sign in with a passkey" button instead.

</details>

<details>
<summary><strong>It asked me to sign in to Dia.</strong></summary>

The original Dia normally signs in with your Dia account by itself. If it ever can't, sign in with your Dia email in the window that opens, and your passkey carries on after. It won't ask again.

</details>

<details>
<summary><strong>Why is there an extension called DiaTweaks Passkeys?</strong></summary>

That's how the patched Dia hands passkey requests to the original one. It's there while this tweak is on and goes away when you turn it off and relaunch.

</details>

<details>
<summary><strong>Do passkeys from 1Password or Bitwarden work?</strong></summary>

They come from their own browser extensions, not Apple Passwords, so this tweak doesn't change how they work.

</details>

<details>
<summary><strong>Why did it switch itself off?</strong></summary>

It checks its setup when you turn it on and each time Dia opens: its extension's files, the file that tells the extension where to connect, and the files DiaTweaks keeps. If something's missing, it sets it up again, up to three times. If that doesn't fix it, it switches itself off and an alert says what's wrong, like a file not being writable, another app having replaced it, or DiaTweaks needing to be installed again.

</details>
