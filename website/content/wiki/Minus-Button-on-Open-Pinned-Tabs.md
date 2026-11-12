Shows a – button instead of ✕ on pinned tabs with a page open, in or out of a folder, like Arc. It closes the page and keeps the tab pinned.

## Why use it

The ✕ on a pinned tab removes it. Often you only want to close the page and keep the tab where it is. Dia has a – for that, but only under a folded folder. This gives it to every open pinned tab.

- Handy if you pin tabs you come back to.
- Skip it if you'd rather have ✕ everywhere.

## Turn it on

Open **Dia → Settings → Patches → Close Button on Pinned Tabs** and switch on **Minus Button on Open Pinned Tabs**. Or run:

```sh
diatweaks enable pinnedTabMinusButton
```

It's off by default. It works with tabs in the sidebar and at the top.

## Needs

[Close Button on Pinned Tabs](Close-Button-on-Pinned-Tabs). Settings greys out this switch until that's on, and `diatweaks enable pinnedTabMinusButton` offers to turn it on too.

## FAQ

<details>
<summary><strong>What if the pinned tab has no page open?</strong></summary>

It still shows ✕, and ✕ removes the tab, because there's no page to close.

</details>

<details>
<summary><strong>Does it change tabs that already have a –?</strong></summary>

No. Tabs under a folded folder and split tabs keep what Dia gives them.

</details>
