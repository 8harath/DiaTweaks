Keeps a folder open when it empties by itself, so new items show up. A folder you fold away yourself stays folded.

## Why use it

Some folders fill themselves, like Dia's live folders of GitHub pull requests. When the last item goes, Dia folds the folder, and it stays folded when new items arrive. You can miss them. This opens the folder again.

- Handy if you use live folders and want to see new items.
- Skip it if you like Dia folding empty folders.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Keep Folders Open**. Or run:

```sh
diatweaks enable keepFoldersOpen
```

It works with tabs in the sidebar and at the top.

## FAQ

<details>
<summary><strong>Does it open a folder I folded myself?</strong></summary>

No. If you click a folder to fold it, it stays folded. Only folders that Dia folds on its own are opened again.

</details>

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes. A folder in the tab bar that Dia folds on its own is opened again, and one you fold yourself stays folded.

</details>

<details>
<summary><strong>Why does a normal folder still go away?</strong></summary>

A folder you made yourself disappears when its last tab closes. This is for live folders, which stay and fill up again.

</details>
