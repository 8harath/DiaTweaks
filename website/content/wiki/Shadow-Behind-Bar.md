Adds a shadow behind the [command bar](Open-New-Tabs-in-Command-Bar), like Arc's, so it stands out when [Blur Page Behind](Blur-Page-Behind) and [Darken Page Behind](Darken-Page-Behind) are off.

## Why use it

Without blur or darkening, the command bar can blend into a busy page. The shadow lifts it off the page and keeps the page itself untouched.
Turn it off if you want a flat bar.

## Turn it off

It's on by default. Open **Dia → Settings → Patches → Open New Tabs in Command Bar** and, under **Shadow**, switch off **Shadow Behind Bar**. Or run:

```sh
diatweaks disable commandBarShadow
```

## Needs

[Command bar](Open-New-Tabs-in-Command-Bar). Settings greys out this switch until that's on, and `diatweaks enable commandBarShadow` offers to turn it on too.

## Works with

[Blur Page Behind](Blur-Page-Behind) and [Darken Page Behind](Darken-Page-Behind). The shadow shows with them too, but it matters most when both are off.
