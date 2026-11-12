
With tabs at the top and [Hide Toolbar](Hide-Toolbar) on, the selected tab keeps the page color and its normal title instead of the site's color. As the toolbar fades in on hover, the tab takes the site's color again, so the two still run into each other.

![Hide site color in the tab bar off, then on](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/horizontal-plainSelectedTab.webp)

## Why use it

Dia tints the selected tab with the site's color so it joins the toolbar below. With the toolbar hidden, that tint joins nothing and looks like a stray colored block.

- Use it if you hide the toolbar and have tabs at the top.
- Skip it if you like the site color in the tab bar.

## Turn it on

Open **Dia → Settings → Patches → Hide Toolbar** and, under **While It's Hidden**, switch on **Hide Site Color in Tab Bar**. Or run:

```sh
diatweaks enable plainSelectedTab
```

## Needs

[Hide Toolbar](Hide-Toolbar). Settings greys out this switch until that's on, and `diatweaks enable plainSelectedTab` offers to turn it on too.

## FAQ

<details>
<summary><strong>Why does nothing change with tabs in the sidebar?</strong></summary>

Dia only fills the selected tab with the site's color when tabs are at the top.

</details>
