
Hides the bar above the page with the address, navigation buttons and extensions, and moves the page up into its place. It's experimental.

![Hide Toolbar](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-hideToolbar.webp)

## Why use it

The toolbar takes a strip of height from every page, and you may rarely use it if you open sites from the command bar or the sidebar.

- If you want the most page possible, or a focused, Arc-like window, hide it.
- Pair it with the options below so the toolbar comes back when you need the address.
- It's experimental, so skip it if you click the toolbar's buttons all day.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Hide Toolbar**. Or run:

```sh
diatweaks enable hideToolbar
```

## Options

On the same page, once it's on:

**Showing the Toolbar**

- [Show Toolbar on Hover](Show-Toolbar-on-Hover) shows the toolbar while the pointer is at the top of the page.
- [Show Toolbar on New Tabs](Show-Toolbar-on-New-Tabs) keeps it on new tab pages.
- [Show Toolbar with Sidebar](Show-Toolbar-with-Sidebar) shows it while the sidebar is open.
- [Toggle toolbar visibility](Toggle-toolbar-visibility) hides or shows it with a shortcut, ⌃D unless you set another.

**Copying the URL**

- [Show Toast When Copying URL](Show-Toast-When-Copying-URL) shows a small Copied message after ⇧⌘C.
- [Show Toolbar When Copying URL](Show-Toolbar-When-Copying-URL) shows the toolbar for a moment after ⇧⌘C.

**While It's Hidden**

- [Show Loading Progress](Show-Loading-Progress) shows Dia's loading glow along the top of the page. It's on by default.
- [Hide Site Color in Tab Bar](Hide-Site-Color-in-Tab-Bar) keeps the selected tab at the top in the page's color.

## Works with

- [Command bar](Open-New-Tabs-in-Command-Bar) opens ⌘L's bar over the page, where a new tab's opens, while the toolbar is hidden.
- [Hide Sidebar Button](Hide-Sidebar-Button) and [Hide Chat Button](Hide-Chat-Button) are greyed out in Settings while this is on, because their buttons are hidden with the toolbar.

## FAQ

<details>
<summary><strong>Where did the bookmarks bar go?</strong></summary>

Dia puts it right under the toolbar, so it hides too. With [Show Toolbar on Hover](Show-Toolbar-on-Hover), it comes back with the toolbar.

</details>

<details>
<summary><strong>Can I still click at the top of the page?</strong></summary>

Yes. The hidden toolbar doesn't take clicks, so the top of the page works as usual.

</details>
