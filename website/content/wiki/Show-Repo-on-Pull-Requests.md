In a GitHub live folder, shows each pull request's repository, number and state under its title, instead of its author. The review status moves to a line of its own.

## Why use it

In **Created by Me** the author is always you, so the line under each title tells you nothing. The repository and number tell pull requests apart, and the review status no longer gets cut off.

- Before: `octocat • Changes Requested`
- After: `hello-world #42 · Open`, with `Changes Requested` on the line below

Skip it if you'd rather see who opened each pull request.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Show Repo on Pull Requests**. Or run:

```sh
diatweaks enable pullRequestRepo
```

## FAQ

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes, but the review status stays on the repository line instead of getting its own, so it can be cut off. Only the sidebar's list can make a row taller.

</details>

<details>
<summary><strong>What about merged pull requests?</strong></summary>

A status that only repeats the state, like **Merged ✓**, replaces the state on the repository line. It doesn't get a line of its own.

</details>

<details>
<summary><strong>Does it show the owner too?</strong></summary>

No, just the repository's name, like `hello-world`.

</details>

<details>
<summary><strong>Does it work on anything but pull requests?</strong></summary>

No. It only changes GitHub pull requests in live folders.

</details>
