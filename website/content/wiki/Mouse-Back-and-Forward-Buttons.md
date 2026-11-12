Makes your mouse's side buttons go back and forward in Dia, even when a site or your mouse driver stops Dia seeing them. With split tabs, it goes back or forward in the page under the pointer.

## Why use it

Some mice, or their drivers, send back and forward as swipes instead of ordinary side-button clicks, and Dia ignores those. This catches them and moves through the page's history.

- Handy if your mouse's side buttons do nothing in Dia.
- Skip it if they already work for you.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Mouse Back and Forward Buttons**. Or run:

```sh
diatweaks enable mouseBackForward
```

## What it handles

- The side buttons themselves (buttons 4 and 5, which macOS numbers 3 and 4). It goes back or forward when you let go.
- A back or forward swipe that a driver such as SteerMouse sends with no window attached. It works out the window from where the pointer is, and does one step per swipe.

Two-finger trackpad swipes and vertical swipes are left alone.

## Which page it moves

- Over a page, that page.
- Over the sidebar or toolbar, the page you're on.
- With split tabs, the page under the pointer.

If the page has nowhere to go, nothing happens.

## FAQ

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes, in both layouts.

</details>

<details>
<summary><strong>Does it change the trackpad?</strong></summary>

No. Two-finger swipes on a trackpad work as Dia always had them.

</details>
