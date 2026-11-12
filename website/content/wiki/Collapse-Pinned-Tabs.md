
Adds a **Pinned** line above your pinned tabs and folders in the sidebar. Click it to fold them away, like in Arc, and click again to bring them back. For now it only works with tabs in the sidebar.

![Collapse Pinned Tabs open, then folded](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-collapsePinned.webp)

## Why use it

With a lot of pinned tabs and folders, the tabs you have open today end up far down the sidebar, and you scroll past the pinned ones to reach them. Folded, your favorites stay at the top and today's tabs sit right below. Skip it if you'd rather see your pinned tabs all the time.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Collapse Pinned Tabs**. Or run:

```sh
diatweaks enable collapsePinned
```

## Use it

- Click anywhere on the **Pinned** line to fold or unfold. The chevron points down while they're showing and right while they're folded.
- Each profile remembers which way you left it, across windows and after you quit Dia.
- Drag tabs as usual. To pin one while they're folded, hold it over the **Pinned** line for a moment and they unfold. A tab dropped right on the folded line goes back where it was, so nothing gets pinned out of sight.

## FAQ

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

No. With tabs at the top, pinned tabs are in the tab bar and nothing changes there. The line comes back when you switch to the sidebar.

</details>

<details>
<summary><strong>Where are my favorites?</strong></summary>

Still at the top. Only the pinned tabs and folders below them fold.

</details>

<details>
<summary><strong>I opened a pinned tab and I can't see it in the sidebar.</strong></summary>

While they're folded, pinned tabs stay hidden, even the one you're on. Unfold to see it.

</details>
