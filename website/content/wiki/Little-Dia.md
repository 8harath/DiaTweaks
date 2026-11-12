
Opens links from other apps, like Slack, Discord or Mail, in a small window instead of a new tab, like Little Arc. You can also right-click any link in a page and choose **Open Link in Little Dia**, or open a blank one from **File → New Little Dia Window**. The window has close, back, forward, reload and an address you can edit, and **Open in Dia** keeps the page as a tab.

![Little Dia](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-littleDia.webp)

## Why use it

Most links you click in a chat or an email are a quick look. Without this, each one lands as a tab in your main window and brings Dia to the front. With it, the page opens over the app you clicked it in, and closing it takes you straight back there. Skip it if you'd rather every link end up as a tab.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Little Dia**, then relaunch Dia when it asks. Or run:

```sh
diatweaks enable littleDia
```

## Use it

Click a link in another app, or right-click a link in a page in Dia and choose **Open Link in Little Dia**. It sits with the other Open Link items.

![The Open Link in Little Dia item in a link's right-click menu](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/littleDia-link-menu.webp)

To start from an empty window, choose **File → New Little Dia Window** or press **⌥⌘N**. It opens a blank page in your current profile with the address ready to type. Both show only while Little Dia is on.

In the small window:

- **✕**, **⌘W** or **Escape** closes it and goes back to the app you came from.
- **Open in Dia** or **⌘O** moves the page to a tab in your main window.
- **⌄**, next to Open in Dia, lists your profiles with their dots, as Dia's Move to Profile does. Pick one to move the page to a tab in that profile instead. It shows when you have more than one profile.
- Click the address, or press **⌘L**, to type another address or search with your search engine.
- **⌘R** reloads.

Hold **Option** as you click a link to open it in a tab as usual.

A link on the page that would open a new tab opens in the small window instead, so nothing piles up out of sight. **⌘-click** still opens a tab behind, in your main window, and a sign-in window a page opens still opens on its own.

## Options

- **[Close with Escape](Close-with-Escape)**: on by default.
- **Window Width** and **Window Height**: the size it opens at, centred on the screen with the pointer. A size larger than the screen opens as large as fits.

## FAQ

<details>
<summary><strong>Am I signed in to sites in the small window?</strong></summary>

Yes. It's Dia's own popup window, the one sites get from `window.open`, so it uses the profile of your front window and its logins.

</details>

<details>
<summary><strong>What's the "DiaTweaks Little Dia" extension in my extensions?</strong></summary>

Only Dia's browser engine can make the small window, so a small extension makes it when a link comes in. It reads nothing on your pages. If you turn it off, links open in tabs again.

</details>

<details>
<summary><strong>Which links does it leave alone?</strong></summary>

Links you click in Dia itself, links you Option-click, and anything that isn't a web address, like `mailto:` links. To send a link in Dia to the small window, right-click it and choose Open Link in Little Dia.

</details>

<details>
<summary><strong>Does Open in Dia keep my place on the page?</strong></summary>

It opens the same address in a new tab, so the page loads again. A form you were filling in won't carry over.

</details>

<details>
<summary><strong>What if Dia was hidden?</strong></summary>

Only the small window shows. Close it and Dia hides again. Open in Dia, or picking a profile, brings your windows back with the page.

</details>

<details>
<summary><strong>Is the small window still there after I quit Dia?</strong></summary>

No. Like Little Arc, it closes with Dia and doesn't come back.

</details>
