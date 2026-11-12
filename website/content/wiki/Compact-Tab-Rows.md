
Makes the sidebar's tabs and folders as short as they were before Dia 1.57, 37 points a row instead of 41, so more tabs fit. It only changes the sidebar, so it does nothing with tabs at the top.

<!-- Screenshot: the same sidebar off, then on.
     Drag it into the wiki editor in place of the placeholder below. -->

_Screenshot coming soon._

## Why use it

Dia 1.57 made every row in the sidebar 4 points taller. With a long list that adds up: 20 tabs take 80 points more than before.

- Handy if you keep lots of tabs or folders open.
- On a Dia whose rows are already 37 points, it does nothing.

## Turn it on

Open **Dia → Settings → Patches** and, under **Sidebar & Tab Bar**, switch on **Compact Tab Rows**. Or run:

```sh
diatweaks enable compactTabRows
```

## FAQ

<details>
<summary><strong>What changes?</strong></summary>

Each tab, folder and the New Tab row is 4 points shorter, and the tab's highlight is 34 points tall instead of 38. Open folders shrink by their header and every row inside them. Icons, titles and spacing between rows stay as they are.

</details>
