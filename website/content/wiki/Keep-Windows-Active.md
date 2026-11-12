
Keeps a Dia window's deep shadow, sidebar color and window buttons after you click into another app, so screenshots and recordings look the same whatever has focus. It's experimental.

| Tabs in the sidebar | Tabs at the top |
|:---:|:---:|
| ![Keep windows active off, then on, with tabs in the sidebar](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-keepWindowsActive.webp) | ![Keep windows active off, then on, with tabs at the top](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/horizontal-keepWindowsActive.webp) |

## Why use it

macOS dims a window's shadow, sidebar and buttons when another app has focus. That dulls screenshots and screen recordings when you click into a recorder or notes app.

Use it when you capture Dia and want it to look the same whatever has focus. Skip it if you rely on the dimming to see which window gets your typing.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Keep Windows Active**. Or run:

```sh
diatweaks enable keepWindowsActive
```

## Good to know

This tweak is experimental. Every Dia window looks focused while it's on, so the look no longer tells you which one gets your typing, and focus rings can show in windows you aren't typing in. Settings and other small panels aren't affected.
