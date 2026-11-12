With [Peek on Shift-Click](Peek-on-Shift-Click) on, start dragging a link and a small card appears just above it. Drop the link on the card to open it in Peek, no Shift needed, so you can peek with one hand. The card looks and moves like the ones Dia shows when you drag a tab into the page to split it: it grows and turns blue as the link comes near, and leans toward the pointer.

![Drag Links to Peek](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-peekDragLinks.webp)

## Why use it

Shift-click needs a key held down while you click. Dragging is a one-handed way to peek, handy on a trackpad when your other hand is busy.

Use it if you already drag links around, for example to the sidebar. It only reacts to links, so it stays out of the way otherwise.

## Turn it on

Open **Dia → Settings → Patches → Peek on Shift-Click** and, under **Options**, switch on **Drag Links to Peek**. Or run:

```sh
diatweaks enable peekDragLinks
```

## Needs

[Peek on Shift-Click](Peek-on-Shift-Click). Settings greys out this switch until that's on, and `diatweaks enable peekDragLinks` offers to turn it on too.

## FAQ

<details>
<summary><strong>Can I still drag links to other places?</strong></summary>

Yes. Drop it anywhere but the card, like the sidebar to open it as a tab, and Dia handles it as usual. The card only takes links dropped on it.

</details>

<details>
<summary><strong>What about dragging text or images?</strong></summary>

The card shows only for links to web pages. Dragging selected text brings up nothing.

</details>
