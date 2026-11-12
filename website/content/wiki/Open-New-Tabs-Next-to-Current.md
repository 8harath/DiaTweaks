A new tab opens right after the tab you're on, not at the end of the list, like in Arc and Chrome. Close it and you go back to the tab you came from.

## Why use it

Dia puts a new tab at the bottom of your tabs, so a tab you open to look something up ends up far from the one you were reading. With this on, it sits next to it, and closing it brings you straight back.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Open New Tabs Next to Current**. Or run:

```sh
diatweaks enable newTabNextToCurrent
```

## Where the new tab goes

- **On a tab in the list:** right after it.
- **On a favorite or a pinned tab:** at the top of the tabs below the line, as in Arc.
- **On a tab in a folder:** right after the folder.
- **With tabs at the top:** right after the tab you're on, the same way.

This covers **File → New Tab**, its shortcut whatever you've set it to, and the **New Tab** button in the sidebar. A tab you open from a link isn't moved.

Closing the new tab takes you back to the tab you opened it from, unless you've gone to another tab since. Going back to that tab and then to the new one keeps it.

## Works with

[Open New Tabs in Command Bar](Open-New-Tabs-in-Command-Bar). The bar shows over the tab you were on, and the new tab waits next to it. Press Escape and it's gone.

## FAQ

<details>
<summary><strong>Pressing the shortcut on a New Tab page doesn't open another.</strong></summary>

That's how Dia works: on a new tab page, New Tab just brings you back to it.

</details>

<details>
<summary><strong>The new tab flickers in the sidebar for a moment.</strong></summary>

Dia can only put a new tab at the end, so the tweak makes it, then moves it. Moving takes a fraction of a second.

</details>
