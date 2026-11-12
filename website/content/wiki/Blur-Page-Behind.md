Blurs the page behind the [command bar](Open-New-Tabs-in-Command-Bar) while it's open.

![Blur Page Behind off, then on](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-commandBarBlur.webp)

## Why use it

A blurred page keeps your eyes on the command bar and hides text behind it that would compete with what you type.
Turn it off if you want to read the page while you type, or if you find the blur slow on your Mac.

## Turn it off

It's on by default. Open **Dia → Settings → Patches → Open New Tabs in Command Bar** and, under **Blur**, switch off **Blur Page Behind**. Or run:

```sh
diatweaks disable commandBarBlur
```

## Options

Under **Blur** on the [command bar](Open-New-Tabs-in-Command-Bar) page, **Blur Radius** sets how strong the blur is (4 pt to begin with), and **Blur Sidebar Too** blurs the whole window behind the bar instead of only the page.

## Needs

[Command bar](Open-New-Tabs-in-Command-Bar). Settings greys out this switch until that's on, and `diatweaks enable commandBarBlur` offers to turn it on too.

## Works with

[Darken Page Behind](Darken-Page-Behind). With both on, the page is blurred and darkened.
