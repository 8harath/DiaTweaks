
With [Hide Toolbar](Hide-Toolbar) on, move the pointer to the very top of the page and the toolbar fades in over it. It hides again when the pointer moves away.

<!-- Screenshots: before (pointer away) and after (pointer at the top).
     Crop like Hide toolbar: the top of the page, right of the sidebar.
     Drag them into the wiki editor in place of each placeholder below. -->

| Pointer away | Pointer at the top |
|:---:|:---:|
| _Screenshot coming soon._ | _Screenshot coming soon._ |

## Why use it

Hiding the toolbar leaves no way to see the address or reach its buttons with the mouse. This brings it back on demand without taking space.

- Use it if you hide the toolbar but still want the address bar one flick away.
- It's the choice for tabs at the top, where there's no sidebar to open.
- Leave it off if you keep brushing the top edge and the toolbar keeps popping up.

## Turn it on

Open **Dia → Settings → Patches → Hide Toolbar** and, under **Showing the Toolbar**, switch on **Show Toolbar on Hover**. Or run:

```sh
diatweaks enable revealToolbarOnHover
```

## Needs

[Hide Toolbar](Hide-Toolbar). Settings greys out this switch until that's on, and `diatweaks enable revealToolbarOnHover` offers to turn it on too.

## FAQ

<details>
<summary><strong>Does the page jump when the toolbar shows?</strong></summary>

No. The toolbar shows on top of the page, so the page stays where it is.

</details>

<details>
<summary><strong>When does it hide again?</strong></summary>

A moment after the pointer leaves it. It stays while you type in the address bar or hold the mouse button down, and hides at once when you switch to another window or app.

</details>

<details>
<summary><strong>Why doesn't it show in some windows?</strong></summary>

It only works in the window you're using, while Dia is the active app.

</details>
