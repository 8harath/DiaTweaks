
With [Hide Toolbar](Hide-Toolbar) on, ⇧⌘C or ⌥⇧⌘C shows the toolbar for a moment, so you see Dia's Copied message in the address field. Then it hides again.

![The toolbar showing Dia's Copied message after ⇧⌘C](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/images/copy-url-peek.png)

## Why use it

With the toolbar hidden you don't see Dia confirm a copied URL. This shows the toolbar briefly so you get Dia's own message in the address field.

- Use it if you want to see the real message, or the address you just copied.
- Dia 1.56 and later show their own message, so this only matters on older versions.

## Turn it on

Open **Dia → Settings → Patches → Hide Toolbar** and, under **Copying the URL**, switch on **Show Toolbar When Copying URL**. Or run:

```sh
diatweaks enable peekToolbarOnCopy
```

## Needs

[Hide Toolbar](Hide-Toolbar). Settings greys out this switch until that's on, and `diatweaks enable peekToolbarOnCopy` offers to turn it on too.

## Works with

[Show Toast When Copying URL](Show-Toast-When-Copying-URL). With both on, this one wins and the toast stays off.

## FAQ

<details>
<summary><strong>Why can't I turn it on?</strong></summary>

From Dia 1.56, Dia shows its own Copied message at the top of the page while the toolbar is hidden, so this switch stays off.

</details>
