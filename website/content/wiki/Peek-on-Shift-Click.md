Shift-click a link to preview it in a card over the page, like Arc. The card grows out of the link you clicked, and shrinks back into it when you close it.

![Shift-clicking links on an X profile to peek at them](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-peek.webp)

## Use it

Hold **Shift** and click a link. Holding Shift over a link starts loading it, so the page is usually ready by the time you click.

- **Close it:** click outside the card, press **Escape** or **⌘W**, or click **×** beside it. It shrinks back into the link.
- **Open it as a tab:** press **⌘O** or click the expand button. The card grows to fill the window and becomes a tab.
- **Open it beside the page:** click the split button to put it in a split view.

The tab you peeked from shows a small badge while the card is open.

## Why use it

Opening a link in a new tab pulls you away from the page you were reading, and you have to find your way back.

Use it to check an article, a profile or a search result and then dismiss it, or to keep it as a tab with ⌘O if it's worth it.

## Turn it on

It's off by default. Open **Dia → Settings → Patches** and switch on **Peek on Shift-Click**. Or run:

```sh
diatweaks enable peek
```

## Options

On the same page, under **Options**:

| Option | What it does | To begin with |
|---|---|---|
| **Darken the page behind** | How dark the page behind the card gets | 45% |
| **Speed** | How fast the card opens and closes, from 25% to 300% | 90% |
| **Genie effect** | The card bends as it travels, like a window going into the Dock. Switch it off for a plain zoom | On |

Also under **Options**:

- [Peek from Pinned Tabs](Peek-from-Pinned-Tabs) opens links that leave a pinned tab's site in Peek instead of a new tab.
- [Drag Links to Peek](Drag-Links-to-Peek) shows a small card above a link you drag; drop the link on it to open it in Peek.

## FAQ

<details>
<summary><strong>Why doesn't Shift-click do anything right after Dia starts?</strong></summary>

Peek starts once you open or switch to a tab. Do that once and it works from then on.

</details>

<details>
<summary><strong>Can I have more than one card open?</strong></summary>

No, one per window. Close the card or open it as a tab before you peek at another link.

</details>
