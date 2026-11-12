
With [Hide Toolbar](Hide-Toolbar) on, put your tabs at the top and the toolbar stays, so the address bar is always there. Move your tabs back to the sidebar and it hides again.

<!-- Screenshots: tabs at the top with the toolbar showing, then tabs in the sidebar with it hidden.
     Crop like Hide toolbar: the top of the page.
     Drag them into the wiki editor in place of each placeholder below. -->

| Tabs at the top | Tabs in the sidebar |
|:---:|:---:|
| _Screenshot coming soon._ | _Screenshot coming soon._ |

## Why use it

Hiding the toolbar suits the sidebar, where your tabs and the sidebar's own controls are a click away. With tabs at the top there's nothing else to type a URL into, so a hidden toolbar gets in the way.

- Handy if you switch to tabs at the top now and then and want Dia to work as usual there.
- The other Showing the Toolbar options still work in the sidebar.

## Turn it on

Open **Dia → Settings → Patches → Hide Toolbar** and, under **Showing the Toolbar**, switch on **Show Toolbar with Tabs at the Top**. Or run:

```sh
diatweaks enable showToolbarWithTopTabs
```

## Needs

[Hide Toolbar](Hide-Toolbar). Settings greys out this switch until that's on, and `diatweaks enable showToolbarWithTopTabs` offers to turn it on too.

## FAQ

<details>
<summary><strong>Does the page move?</strong></summary>

With tabs at the top the toolbar sits in its usual place, the same as with Hide Toolbar off. Switching layouts moves the page the way Dia always does.

</details>

<details>
<summary><strong>Does it count a hidden sidebar as tabs at the top?</strong></summary>

No. A hidden or auto-hiding sidebar is still the sidebar layout, so the toolbar stays hidden there.

</details>
