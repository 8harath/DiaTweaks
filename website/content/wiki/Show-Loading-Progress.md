With [Hide Toolbar](Hide-Toolbar) on, shows Dia's loading glow along the top of the page while it loads, where the hidden toolbar would have shown it.

![The loading glow along the top of the page](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/images/show-loading-progress.png)

## Why use it

With the toolbar hidden you lose Dia's sign that a page is still loading. The glow gives it back along the top edge.

- If you hide the toolbar, leave this on so slow pages don't look stuck.
- Pick a color that suits your theme, or turn it off if you find the glow distracting.

## Turn it on or off

It's on by default: turn on [Hide Toolbar](Hide-Toolbar) and it shows. To turn it off or back on, open **Dia → Settings → Patches → Hide Toolbar** and, under **While It's Hidden**, use **Show Loading Progress**. Or run:

```sh
diatweaks enable showLoadingProgress
```

## Color

Pick a color under the switch. **Match Dia** uses the colors Dia gives its own loading glow in each window. **Accent Color** follows the accent color in System Settings, and there are fixed choices: Blue, Purple, Pink, Orange, Green, Graphite and Jace, a brown.

## Needs

[Hide Toolbar](Hide-Toolbar). Settings greys out this switch until that's on, and `diatweaks enable showLoadingProgress` offers to turn it on too.
