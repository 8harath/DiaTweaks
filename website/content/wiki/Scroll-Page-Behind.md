Lets you scroll the page behind the [command bar](Open-New-Tabs-in-Command-Bar) while the bar is open, like in Arc.

## Why use it

You can look further down the page while you type, without closing the bar. The pointer doesn't highlight links on the page while the bar is open. Clicking the page closes the bar and the click goes to the page.
Turn it off if you want the page to stay put while the bar is open.

## Turn it off

It's on by default. Open **Dia → Settings → Patches → Open New Tabs in Command Bar** and, under **Interaction**, switch off **Scroll Page Behind**. Or run:

```sh
diatweaks disable commandBarInteractive
```

## Needs

[Command bar](Open-New-Tabs-in-Command-Bar). Settings greys out this switch until that's on, and `diatweaks enable commandBarInteractive` offers to turn it on too.
