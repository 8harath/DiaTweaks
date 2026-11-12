The 1Password extension connects to the 1Password app in Dia again. Without it, a patched Dia gets stuck on "waiting for potential partner browser authorization".

## Why use it

If you use 1Password, its browser extension stops working in a patched Dia, so you can't fill or save logins from it.

Turn it on if 1Password is your password manager. The tradeoff is the original Dia flashing in the Dock for about half a second each time the extension connects.

## Turn it on

It's off by default. Open **Dia → Settings → Patches** and switch on **Allow 1Password**. Or run:

```sh
diatweaks enable onePassword
```

Then unlock the 1Password app. The extension picks it up within a minute.

## FAQ

<details>
<summary><strong>Why does a second Dia flash in the Dock?</strong></summary>

1Password's helper only talks to browsers whose signature it knows, and a patched Dia is signed on your Mac. It checks once, as it starts. So each time the extension connects, usually once as Dia opens, DiaTweaks opens the original Dia it keeps, without windows, just long enough to start the helper, then quits it. Its icon shows in the Dock for about half a second. After that the extension talks to 1Password's helper directly, and nothing stays running. It's the same hand-off [Allow iCloud Passwords](Allow-iCloud-Passwords) uses, with two differences. 1Password's helper only reads apps under `/Applications`, so DiaTweaks keeps an instant copy of the original Dia in a hidden `/Applications/.DiaTweaks` folder, and refreshes it when Dia updates. And the helper checks its browser a moment after it starts, so the original Dia stays open for a third of a second longer. Uninstalling DiaTweaks deletes the folder.

</details>

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes. It doesn't change anything you see in Dia.

</details>

<details>
<summary><strong>Why did it switch itself off?</strong></summary>

It checks its setup when you turn it on and each time Dia opens: 1Password's browser support and the files DiaTweaks keeps. If something's missing, it sets it up again, up to three times. If that doesn't fix it, it switches itself off and an alert says what's wrong, like 1Password not having set up its browser support yet, or DiaTweaks needing to be installed again.

</details>
