
With [Hide Toolbar](Hide-Toolbar) on, new tab pages keep the toolbar and the bookmarks bar, so you can click a bookmark or type an address straight away. Once a site opens, they hide again.

| Tabs in the sidebar | Tabs at the top |
|:---:|:---:|
| ![Show Toolbar on New Tabs off, then on, with tabs in the sidebar](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-showToolbarOnNewTab.webp) | ![Show Toolbar on New Tabs off, then on, with tabs at the top](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/horizontal-showToolbarOnNewTab.webp) |

## Why use it

A new tab page is where you type an address or pick a bookmark, and both are in the toolbar. Without it you'd have to reveal the toolbar first.

- Handy if you start most browsing from a blank tab.
- Skip it if you open new tabs with the command bar instead.

## Turn it on

Open **Dia → Settings → Patches → Hide Toolbar** and, under **Showing the Toolbar**, switch on **Show Toolbar on New Tabs**. Or run:

```sh
diatweaks enable showToolbarOnNewTab
```

## Needs

[Hide Toolbar](Hide-Toolbar). Settings greys out this switch until that's on, and `diatweaks enable showToolbarOnNewTab` offers to turn it on too.

## FAQ

<details>
<summary><strong>Does the bookmarks bar show too?</strong></summary>

Yes, if Dia shows it (**View → Show Bookmarks Bar**). It stays with the toolbar.

</details>

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes. It only depends on whether the tab you're on is a new tab page.

</details>
