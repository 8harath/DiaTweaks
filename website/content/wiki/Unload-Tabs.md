Adds **Unload Tab** to a tab's right-click menu. It frees the memory the page uses but keeps the tab where it is, and the page loads again when you open it.

![Unload Tab in a tab's right-click menu](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-unloadTab.png)

## Why use it

Tabs you've left open for later keep their pages in memory. Unload Tab frees that memory without closing the tab or losing its place in the sidebar.
Handy when your Mac is slow or low on memory and you have heavy pages, like web apps or video sites, that you want to keep but aren't using. Skip it for pages with unsaved work, since they reload from scratch.

## Use it

Right-click a tab and choose **Unload Tab**. If it's the tab you're on, you go back to the tab you were on before, then it unloads. An open pinned tab goes back to its pinned page, like the minus button. The page reloads from scratch when you open the tab again, so anything you'd typed into it that the site didn't save is gone.

## Turn it on

It's off by default. Open **Dia → Settings → Patches** and switch on **Unload Tabs**. Or run:

```sh
diatweaks enable unloadTab
```

## FAQ

<details>
<summary><strong>Why is Unload Tab greyed out?</strong></summary>

The page is on screen somewhere Dia can't leave, such as another window, or it's the only tab in the window, so there's nowhere to go back to.

</details>

<details>
<summary><strong>Why isn't Unload Tab in the menu?</strong></summary>

It only shows for a tab whose page has loaded, isn't unloaded already, and isn't split. It also stays out when another loaded tab has the same address, so it never unloads the wrong one.

</details>

<details>
<summary><strong>Why does an unloaded tab look the same?</strong></summary>

Dia doesn't mark the tabs it unloads itself, or hasn't loaded yet, so an unloaded tab looks like any other. Unload Tab leaves its menu until you open the tab again. Dia keeps some pages loaded, such as one playing audio.

</details>
