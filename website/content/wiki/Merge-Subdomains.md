
With [Group Tabs by Domain](Group-Tabs-by-Domain), puts tabs from the same site in one group even when they're on different subdomains. `gist.github.com` joins `github.com`, and `developer.apple.com` joins `apple.com`.

## Why use it

Some sites spread one product over several subdomains, like `mail.google.com` and `docs.google.com`, or `old.reddit.com` and `www.reddit.com`. Off, each subdomain gets its own group, which can leave you with a handful of small groups for one site. Turn this on if you think of those as one site. Leave it off if you want `docs.example.com` kept apart from `example.com`.

## Turn it on

Open **Dia → Settings → Patches → Group Tabs by Domain** and, under **Options**, switch on **Merge Subdomains**. Or run:

```sh
diatweaks enable groupTabsMergeSubdomains
```

## Needs

[Group Tabs by Domain](Group-Tabs-by-Domain). Settings greys out this switch until that's on.

## FAQ

<details>
<summary><strong>How does it know what the site is?</strong></summary>

It keeps the last two parts of the address, so `news.example.com` becomes `example.com`. Under a two-letter country ending with a common second part, like `.co.uk` or `.com.au`, it keeps three, so `news.bbc.co.uk` becomes `bbc.co.uk`. It's a short rule rather than the full list browsers use, so the odd site may group differently from what you expect.

</details>

<details>
<summary><strong>Why aren't my github.io sites merged?</strong></summary>

On sites like `github.io`, `vercel.app`, `netlify.app`, `pages.dev` and `blogspot.com`, each subdomain belongs to someone else, so each one stays its own site.

</details>

<details>
<summary><strong>What about addresses like localhost or 192.168.1.10?</strong></summary>

They're left as they are.

</details>
