Rounds browser windows to 26 points, like apps with a toolbar on macOS 26, or to any radius you pick down to square, instead of the smaller corners Dia's windows get. The page's corners that meet the window's grow with them so the gap around the page stays even, while the ones by the sidebar keep Dia's size. The sidebar that floats over the page when it's hidden, the pinned tabs and buttons in the window's corners, and the toolbar buttons in the page's top corners, like Chat, round to match. Toolbar buttons only round the corner they share.

| Tabs in the sidebar | Tabs at the top |
|:---:|:---:|
| ![Window Corners off, then on, with tabs in the sidebar](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-windowCorners.webp) | ![Window Corners off, then on, with tabs at the top](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/horizontal-windowCorners.webp) |

## Why use it

Dia's windows have smaller corners than most macOS 26 apps, so Dia looks out of place next to them. This rounds them to match, and keeps the page's corners in step.

Handy if you want Dia to look native on macOS 26. If you prefer a sharper look, set the radius lower, down to square.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Window Corners**. Or run:

```sh
diatweaks enable windowCorners
```

## Options

On the same page, once it's on:

- **Radius**: a slider from 0 to 26 points, 26 to begin with. 26 matches macOS 26 and 10 matches macOS 11 to 15. The page's corners follow, and with [Edge-to-Edge Web Pages](Edge-to-Edge-Web-Pages) a square window has a square page. 0 is a 1 point radius, the smallest macOS draws.

![Window Corners at 0, 8, 12, 20 and 26 points](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-windowCorners-radius.webp)

## FAQ

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes. With [Hide Window Controls](Hide-Window-Controls) on, the pinned tabs sit in the corner and round to match it.

</details>

<details>
<summary><strong>Does it work with Edge-to-Edge Web Pages?</strong></summary>

Yes. The page reaches the window's edge with the same corners as the window.

</details>
