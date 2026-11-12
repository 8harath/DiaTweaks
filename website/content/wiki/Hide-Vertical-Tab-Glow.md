Removes the selected sidebar tab's glow and glass highlights, and gives its border one even color. The title, favicon and what the tab does stay the same. Tabs at the top keep Dia's own look.

## Why use it

The glow and fading edge can make the selected tab stand out more than you want. This makes it flatter and keeps a clear outline.

- Handy if you want a quieter sidebar.
- Skip it if you like the glow to spot the selected tab.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Hide Vertical Tab Glow**. Or run:

```sh
diatweaks enable hideVerticalTabGlow
```

It only works with tabs in the sidebar.

## FAQ

<details>
<summary><strong>What happens to the selected tab's border?</strong></summary>

It keeps its shape. The border that fades from one color to another becomes a single, even color from Dia's own palette, so it still follows light and dark mode.

</details>

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

No. Tabs at the top keep Dia's original styling.

</details>

<details>
<summary><strong>What happens when I turn it off?</strong></summary>

Dia's shadow, border colors and glass highlights come back.

</details>
