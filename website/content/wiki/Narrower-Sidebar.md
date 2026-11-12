
Lets the sidebar shrink to 164 points, as narrow as Arc's, instead of stopping at Dia's 190. Drag the sidebar's edge to make it narrower.

<!-- Screenshot: the sidebar at 190, then at 164.
     Drag it into the wiki editor in place of the placeholder below. -->

_Screenshot coming soon._

## Why use it

Dia won't let the sidebar get narrower than 190 points. On a small screen that's a lot of width for tab titles you can read at a glance.

- Handy on a laptop screen, or with short tab titles.
- Pinned tabs reflow to fit the narrower width.

## Turn it on

Open **Dia → Settings → Patches** and, under **Sidebar & Tab Bar**, switch on **Narrower Sidebar**. Or run:

```sh
diatweaks enable narrowerSidebar
```

## FAQ

<details>
<summary><strong>What happens when I turn it off?</strong></summary>

The sidebar goes back to stopping at 190 points the next time you resize it.

</details>

<details>
<summary><strong>Why is it greyed out?</strong></summary>

Dia has no setting for the narrowest width, so this changes the one instruction that sets it. If a Dia update changes that code, the switch stays off until DiaTweaks is updated, rather than change something else.

</details>
