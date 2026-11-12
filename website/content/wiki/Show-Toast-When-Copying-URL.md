
With [Hide Toolbar](Hide-Toolbar) on, ⇧⌘C or ⌥⇧⌘C shows a small Copied message at the top of the page, and the toolbar stays hidden.

![A Copied current URL message at the top of the page](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/images/copy-url-toast.png)

## Why use it

With the toolbar hidden you don't see Dia confirm a copied URL. A small toast tells you it worked without bringing the toolbar back.

- Use it if you copy links often and want confirmation but a toolbar that stays hidden.
- Dia 1.56 and later show their own message, so this only matters on older versions.

## Turn it on

Open **Dia → Settings → Patches → Hide Toolbar** and, under **Copying the URL**, switch on **Show Toast When Copying URL**. Or run:

```sh
diatweaks enable copyURLToast
```

## Needs

[Hide Toolbar](Hide-Toolbar). Settings greys out this switch until that's on, and `diatweaks enable copyURLToast` offers to turn it on too.

## Works with

[Show Toolbar When Copying URL](Show-Toolbar-When-Copying-URL). With both on, the toolbar shows instead.

## FAQ

<details>
<summary><strong>Why can't I turn it on?</strong></summary>

From Dia 1.56, Dia shows its own Copied message at the top of the page while the toolbar is hidden, so this switch stays off.

</details>
