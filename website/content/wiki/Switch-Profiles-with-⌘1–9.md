Press **⌘** and a number to switch to that profile, in the order of the dots at the bottom of the sidebar, like Arc's spaces. Dia's shortcuts for the sidebar's items move to **⌃** and a number, so nothing is lost.

## Why use it

Dia has no ready shortcut for jumping to a profile. This gives you one, like Arc's spaces.

- Handy if you keep work and personal profiles and switch often.
- The cost is that the sidebar items move to ⌃ and a number. Skip it if you rely on ⌘1–9 for those.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Switch Profiles with ⌘1–9**. Or run:

```sh
diatweaks enable profileShortcuts
```

## FAQ

<details>
<summary><strong>Why doesn't Dia's own Shortcuts setting do this?</strong></summary>

Dia lets you set ⌘1 for a profile there, but a page takes ⌘ and a number before Dia's menu sees it, and the sidebar's items already have it. This swaps the two and catches the keys before the page does.

</details>

<details>
<summary><strong>What does ⌘9 do?</strong></summary>

It goes to your last profile, as ⌃9 went to the last sidebar item.

</details>

<details>
<summary><strong>My keyboard needs Shift for numbers. Which keys do I press?</strong></summary>

On AZERTY and other layouts where the number row types symbols, press ⌘⇧ and the number key. That is how macOS itself matches ⌘1 on those layouts.

</details>
