
Puts tabs from the same site into a group named after it, like **YouTube** or **Wikipedia**. It groups once, each time you choose it.

![Group Tabs by Domain](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-groupTabsByDomain.webp)

## Why use it

Handy when a window has filled up with tabs from a few sites, like a research session or a long day of links. One command tidies them into groups you can fold away, without Dia's AI picking the names. Use [Tidy Tabs](Tidy-Tabs) instead if you'd rather group by topic than by site.

## Use it

Right-click a tab and choose **Group Tabs by Domain**, choose **Tabs → Group Tabs by Domain**, or press **⌃⇧G**. It groups the tabs in the front window. Press **⌘Z** right after to put them back where they were.

The same menus have:

- **Group Selected Tabs by Domain**: groups only the tabs you've selected, with ⌘-click or ⇧-click.
- **Expand All Tab Groups** and **Collapse All Tab Groups**: open or close every group in the front window.
- **Ungroup This Domain**: takes apart the current tab's site group. The tabs stay open.
- **Ungroup All Domains**: takes apart every site group in the front window. Groups you named yourself stay.

**⌘Z** right after either ungroup puts the groups back.

## Shortcut

Open **Dia → Settings → Patches**, click the chevron next to **Group Tabs by Domain**, and set **Shortcut**. If the keys already belong to a Dia menu item or another tweak, it says so.

## Merge Subdomains

Off, `docs.example.com` and `example.com` get their own groups. Turn on [Merge Subdomains](Merge-Subdomains) to put them in one. Sites where each subdomain belongs to someone else, like `github.io`, stay apart.

## Turn it off

It's on by default. To take it out of both menus, open **Dia → Settings → Patches** and switch off **Group Tabs by Domain**. Or run:

```sh
diatweaks disable groupTabsByDomain
```

## FAQ

<details>
<summary><strong>Does it read my pages?</strong></summary>

No. It only looks at each tab's address.

</details>

<details>
<summary><strong>Which tabs does it leave alone?</strong></summary>

Pinned tabs, tabs already in a group, new tab pages, files and Dia's own pages. A site needs at least two tabs to get a group.

</details>

<details>
<summary><strong>What if I already have a group for a site?</strong></summary>

If a group's name is the site, like **GitHub** or `github.com`, that site's tabs join it instead of making a new group.

</details>

<details>
<summary><strong>Are www.example.com and example.com the same site?</strong></summary>

Yes, it ignores `www.`. Other subdomains, like `docs.example.com`, get their own group unless **Merge Subdomains** is on.

</details>

<details>
<summary><strong>Why is a group named after the address?</strong></summary>

When two sites would get the same name, like `apple.com` and `apple.org`, each keeps its address so the groups stay apart. Addresses like `localhost` keep theirs too.

</details>
