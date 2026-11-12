
Press **W** or **⌘W** while the tab switcher is open to close the highlighted tab. The switcher stays open on the next tab, so you can keep closing or switching.

![Close Tabs from Tab Switcher](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-closeFromTabSwitcher.webp)

## Why use it

Dia's tab switcher lets you jump between tabs, but not clear out the ones you don't need. With this, you can close tabs as you cycle past them and never leave the keyboard.
Handy when you're tidying up a pile of tabs. It's on by default, so turn it off only if pressing **W** in the switcher by accident bothers you.

## Use it

Hold **⌃** and press **⇥** to open the tab switcher, move to a tab, then press **W** or **⌘W** while you still hold **⌃**. Let go of **⌃** to switch to the highlighted tab, as usual.

## Turn it off

It's on by default. Open **Dia → Settings → Patches** and switch off **Close Tabs from Tab Switcher**. Or run:

```sh
diatweaks disable closeFromTabSwitcher
```

## FAQ

<details>
<summary><strong>Why does the switcher flicker after I close a tab?</strong></summary>

Dia's switcher doesn't update while it's open, so it closes and opens again without the tab, back on the same spot.

</details>
