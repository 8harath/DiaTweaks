Brings back what you typed in the [command bar](Open-New-Tabs-in-Command-Bar) when you open it again after Escape, ⌘W or a click outside, like Arc. The text comes back selected, so you can carry on or type over it.

![The command bar opened again with what was typed before, selected](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/images/remember-what-you-typed.png)

Each window keeps its own text. Choosing a result starts the next bar empty, and so does emptying the bar before Escape.

## Why use it

If you press Escape by accident, or leave the bar to check something on the page, you lose what you were typing. This brings it back, selected, when you open the bar again.
Handy for long searches and questions. Leave it off if you'd rather start with an empty bar every time.

## Turn it on

It's off by default. Open **Dia → Settings → Patches → Open New Tabs in Command Bar** and, under **Typing**, switch on **Remember What You Typed**. Or run:

```sh
diatweaks enable commandBarKeepText
```

## Needs

[Command bar](Open-New-Tabs-in-Command-Bar). Settings greys out this switch until that's on, and `diatweaks enable commandBarKeepText` offers to turn it on too.
