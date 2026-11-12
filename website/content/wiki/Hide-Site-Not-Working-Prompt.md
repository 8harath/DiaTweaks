Stops the “not working correctly?” prompt that Dia shows under the ad blocker button after you reload a page a few times. Reloading still works, and the ad blocker stays as it was.

![Hide Site Not Working Prompt off, then on](https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/previews/vertical-hideReloadNudge.webp)

## Why use it

After a few reloads Dia suggests turning off the ad blocker. If you reload often, or you know your sites work, the prompt keeps getting in the way.

- Handy if you reload pages while developing or waiting on slow sites.
- Skip it if the ad blocker sometimes breaks pages for you and you want the hint.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Hide Site Not Working Prompt**. Or run:

```sh
diatweaks enable hideReloadNudge
```

## FAQ

<details>
<summary><strong>How do I turn off the ad blocker for a site now?</strong></summary>

The same way as before the prompt: click the ad blocker button in the toolbar.

</details>

<details>
<summary><strong>Does it work with tabs at the top?</strong></summary>

Yes. The prompt stays hidden in both layouts.

</details>
