Opens the hidden sidebar the moment you move the pointer to the left edge of the window, with none of Dia's short wait.

## Why use it

With the sidebar hidden, Dia waits about a tenth of a second after the pointer reaches the edge before it opens the sidebar. It's short, but it adds up if you reach for the sidebar a lot. With this on, the sidebar starts opening straight away, like the desktop switcher in Mission Control. Skip it if you like the small pause, which keeps the sidebar from opening when the pointer only grazes the edge.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Open Sidebar Instantly**. Or run:

```sh
diatweaks enable openSidebarInstantly
```

Hide the sidebar with **⌘S**, or from the sidebar button, then move the pointer to the left edge.

## FAQ

<details>
<summary><strong>Does it change the animation or how the sidebar closes?</strong></summary>

No. Dia still slides the sidebar in and still closes it when the pointer leaves, after the same wait as before. Only the wait before it opens is gone.

</details>

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

There's no sidebar to open, so nothing changes there, but one thing does. Dia uses the same wait for a hidden tab bar at the top, so that shows sooner too when you move the pointer to the top edge.

</details>

<details>
<summary><strong>Will it keep working after Dia updates?</strong></summary>

It may need an update after some Dia releases. The wait is a number inside Dia's code, with no setting for it, so this tweak changes that one instruction while Dia runs and puts it back when you turn the tweak off. Nothing on disk changes. It finds the spot by the code around it. After a Dia release that changes that code, it can't find the spot, shows as unavailable in Settings and does nothing, and it needs an update. It never changes anything it doesn't recognize.

</details>
