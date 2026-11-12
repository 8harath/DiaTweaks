Click Dia's Dock icon from another Desktop and macOS takes you to the Dia window you already have, like other apps, instead of opening a new one.

## Why use it

Dia opens a new window when the Desktop you're on has none of its windows, so a Dock click from Desktop 2 piles a second window on top of the one waiting on Desktop 1. With this on, the click goes to that window.

Use it if you keep Dia on one Desktop and click its icon from the others. Skip it if you want a fresh window on every Desktop.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Dock Click Shows Existing Window**. Or run:

```sh
diatweaks enable dockClickWindow
```

## The macOS setting it needs

In **System Settings → Desktop & Dock**, turn on **When switching to an application, switch to a Space with open windows for the application**. It's on unless you've turned it off. With it off, macOS wouldn't show the window, so this tweak steps aside and Dia opens a new window as usual.

## Good to know

- It only acts when Dia has a window on another Desktop and none on this one. A Dock click while a window is here, or on a minimized or hidden Dia, works as before.
- If Dia has no windows at all, the click opens a new one as usual.
- Little Dia's small windows don't count. Only Dia's regular windows do.
- With several Dia windows on other Desktops, you go to the one you used last.

## FAQ

<details>
<summary><strong>Does it change anything with the tweak off?</strong></summary>

No. Dia opens a new window, as it always has.

</details>
