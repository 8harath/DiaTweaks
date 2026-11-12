A new tab opens as Dia's command bar over the page you're on, like Arc, instead of as a new tab page. It's the same bar the new tab page has, so its suggestions, chats, `@` and `/` all work as usual.

![Command bar over a page](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-commandBar.png)

## Why use it

A new tab page takes over the page you were reading. This opens the command bar over the page instead, so you can search or go somewhere and go back with **Escape**, like Arc.
It suits people who open a new tab only to type an address or a question. If you like browsing from the new tab page, its shortcuts and tiles, leave it off.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Open New Tabs in Command Bar**. Or run:

```sh
diatweaks enable commandBar
```

## Use it

Press your New Tab shortcut or click **New Tab**, then type. Press **Return** or click a suggestion to open it in a new tab. Press **Escape** or **⌘W**, or click outside the bar, to go back to the page you were on. Pressing the shortcut again while the bar is open just puts you back in it.

With [Hide Toolbar](Hide-Toolbar) on, **⌘L** opens the same bar in the same place, filled in with the page's address, and what you pick opens in the tab you're on instead of a new one. When the toolbar is showing, ⌘L opens Dia's own bar under the address field as usual.

Close a window's last tab and the window goes blank, with no new tab page and no bar. Your New Tab shortcut or the **New Tab** button opens the bar over the blank window without making another tab, and what you pick opens right there. With no page behind it, the bar doesn't blur or darken anything.

## Options

On the same page, once it's on:

**Options**

- **Position**: **Like Spotlight** puts the bar centred across the screen, a little above the middle, kept inside the Dia window. **Center of Window** puts it in the middle of the window. **Center of Page** puts it in the middle of the page, so it moves over when the sidebar is open.
- **Space Above Bar** sets how far down the bar sits.

**Blur**

- [Blur Page Behind](Blur-Page-Behind), on to begin with. It covers the page and moves with it when the sidebar slides, but leaves the sidebar alone.
- **Blur Radius** sets how strong the blur is.
- **Blur Sidebar Too** blurs the whole window behind the bar.

**Darken**

- [Darken Page Behind](Darken-Page-Behind), on to begin with, like the blur.
- **Darkness** sets how dark it gets.

**Shadow**

- **Shadow Behind Bar**, on to begin with, puts a soft shadow around the bar so it stands out on a page of the same colour, even with Blur and Darken off.
- **Shadow Intensity** sets how dark the shadow is.

**Interaction**

- **Scroll Page Behind**, on to begin with, lets you scroll the page under the bar while it's open, like Arc. Pointing at the page doesn't highlight anything, and clicking it only closes the bar.

**Typing**

- [Remember What You Typed](Remember-What-You-Typed), off to begin with, so the bar comes back with what you typed before Escape.

For the sliders, type a number into the box beside one, or press **↑** and **↓** to step it by 1, or by 10 with **Shift**.

To go back to the defaults, set them to these:

| Option | Default |
| --- | --- |
| Space above the bar | 30% |
| Darkness | 24% |
| Blur radius | 4 pt |
| Blur the sidebar too | Off |
| Shadow intensity | 30% |

## FAQ

<details>
<summary><strong>Why does a New Tab show in the sidebar while the bar is open?</strong></summary>

The bar opens a real tab and waits there, so whatever you pick loads in it. Going back closes it.

</details>

<details>
<summary><strong>What about a new window?</strong></summary>

It opens with the bar over it, without blur or darkening. Going back closes the window.

</details>

<details>
<summary><strong>Why does a blank window still show a New Tab in the sidebar?</strong></summary>

Dia always keeps a tab in a window, so the blank window is that tab with its new tab page hidden. It closes as soon as you move to another tab.

</details>

<details>
<summary><strong>Why doesn't ⌘L show a New Tab in the sidebar?</strong></summary>

It edits the tab you're on, so there's no new tab to wait in. The bar is Dia's own ⌘L bar, moved out of the address field and laid out like the new tab page's.

</details>
