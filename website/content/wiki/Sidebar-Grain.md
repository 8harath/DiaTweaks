Adds a fine texture behind your tabs, like paper or fabric. It sits behind the sidebar, and behind the tab bar when your tabs are at the top.

| Tabs in the sidebar | Tabs at the top |
|:---:|:---:|
| ![Sidebar Grain's six textures, with tabs in the sidebar](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-sidebarGrain.webp) | ![Sidebar Grain's six textures, with tabs at the top](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/horizontal-sidebarGrain.webp) |

## Why use it

Dia's sidebar and tab bar are smooth. A little texture gives them some feel, and it stays behind your tabs, so they look and work the same.

- Handy if you want the window to feel less flat.
- Skip it if you like Dia's clean, smooth look.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Sidebar Grain**. Or run:

```sh
diatweaks enable sidebarGrain
```

## Options

The options sit under the switch in Settings, with a small preview.

- **Texture:** Grain, Sand, Tweed, Denim, Matte or Fine. The default is Sand.
- **Grain:** how strong the texture is, from 0% to 100%. The default is 50%.
- **Softness:** how much the texture is blurred, from 0% to 100%. The default is 0%.
- **Scale:** how large the texture is, from 50% to 300%. The default is 100%.
- **Reset** puts grain, softness and scale back to their defaults.

You can also change them without opening Settings: right-click an empty part of the sidebar and choose **Edit Sidebar Grain…**. With tabs at the top, right-click an empty part of the tab bar.

### Each profile its own grain

In **Edit Sidebar Grain…**, set **Apply to** to **This Profile** to give the profile you're in its own texture, grain, softness and scale, or untick **Show grain in this profile** to turn it off there. Anything you don't change follows the settings for all profiles. **Reset** clears that profile's own settings. Settings always edits the settings for all profiles.

## FAQ

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes. The texture goes behind the tab bar instead of the sidebar.

</details>

<details>
<summary><strong>Can each profile have a different grain?</strong></summary>

Yes. Right-click the sidebar, choose **Edit Sidebar Grain…** and set **Apply to** to **This Profile**. Each window shows the grain of the profile it's on, and switches with it.

</details>

<details>
<summary><strong>Does it get in the way of clicking?</strong></summary>

No. Clicks pass straight through it to your tabs.

</details>

<details>
<summary><strong>Why does the texture fade when I switch to another app?</strong></summary>

It follows the window. When the window isn't the active one, the texture hides, like the rest of Dia's window styling.

</details>

<details>
<summary><strong>Why doesn't "Edit Sidebar Grain…" show up on my tabs?</strong></summary>

It only appears when you right-click empty space. Right-clicking a tab gives you the tab's own menu.

</details>
