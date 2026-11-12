
With [Hide Toolbar](Hide-Toolbar) on, open the sidebar and the toolbar comes back, so you can see and type in the address bar. Close the sidebar and it hides again.

<!-- Screenshots: sidebar closed, then sidebar open.
     Crop like Hide toolbar: the top of the page, with the sidebar's edge.
     Drag them into the wiki editor in place of each placeholder below. -->

| Sidebar closed | Sidebar open |
|:---:|:---:|
| _Screenshot coming soon._ | _Screenshot coming soon._ |

## Why use it

When you open the sidebar you're usually navigating, so the address bar is useful there. This shows it for exactly that time and hides it the rest of the time.

- Handy if you keep the sidebar closed while reading and open it to switch or search.
- It does nothing with tabs at the top. Use Show Toolbar with Tabs at the Top or Show Toolbar on Hover there.

## Turn it on

Open **Dia → Settings → Patches → Hide Toolbar** and, under **Showing the Toolbar**, switch on **Show Toolbar with Sidebar**. Or run:

```sh
diatweaks enable showToolbarWithSidebar
```

## Needs

[Hide Toolbar](Hide-Toolbar). Settings greys out this switch until that's on, and `diatweaks enable showToolbarWithSidebar` offers to turn it on too.

## FAQ

<details>
<summary><strong>Does the page move?</strong></summary>

Yes. The toolbar comes back in its usual place, so the page moves down under it, the same as with Hide toolbar off.

</details>

<details>
<summary><strong>Why doesn't it show when the sidebar slides out at the edge of the window?</strong></summary>

That sidebar floats over the page and goes away on its own, so the toolbar stays hidden. It shows once the sidebar is open beside the page.

</details>

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

There's no sidebar with tabs at the top, so the toolbar stays hidden. Use [Show Toolbar with Tabs at the Top](Show-Toolbar-with-Tabs-at-the-Top) to keep it there, or [Show Toolbar on Hover](Show-Toolbar-on-Hover).

</details>
