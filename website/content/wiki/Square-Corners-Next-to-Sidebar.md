
Dia rounds all four corners of the page, even the two next to the sidebar. This tweak makes those two square, so the page meets the sidebar in a straight line.

![Square corners by the sidebar off, then on](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-squareSidebarCorners.webp)

## Why use it

With the page running to the window edge, rounded corners at the sidebar leave small wedges of background. Square corners there make the page and sidebar meet cleanly.

- Handy if you use tabs in the sidebar and want a tidy seam.
- Switch it off if you prefer all four corners rounded.

## Turn it on

It's on by default. Open **Dia → Settings → Patches → Edge-to-Edge Web Pages** and switch on **Square Corners Next to Sidebar**. Or run:

```sh
diatweaks enable squareSidebarCorners
```

## Needs

[Edge-to-Edge Web Pages](Edge-to-Edge-Web-Pages). Settings greys out this switch until that's on, and `diatweaks enable squareSidebarCorners` offers to turn it on too.

## FAQ

<details>
<summary><strong>Why don't I see a difference?</strong></summary>

It only changes the corners next to the sidebar. With tabs at the top, the sidebar hidden or Chat open, it leaves the corners alone.

</details>
