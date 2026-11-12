
Turns off every AI feature in Dia and cuts it off from its AI servers, so Dia works as a plain browser.

## Why use it

If you never use Dia's AI, it's still in a dozen places: a Chat button in the toolbar, Chats in the sidebar, a Chat suggestion every time you type in the command bar, Ask Dia when you right-click, shortcuts you can hit by accident, whole panes in Settings, and more. This one switch takes all of them away at once, and stops Dia talking to its AI servers behind them. Skip it if you use chat even now and then; the separate Hide tweaks let you pick and choose.

## Turn it on

Open **Dia → Settings → Patches** and switch on **Turn Off AI**. Or run:

```sh
diatweaks enable turnOffAI
```

Dia asks to relaunch: it can only be cut off from its AI servers as it starts. Turning it off asks again, so chat can reach them.

To send questions you type to your search engine as well, open **Dia → Settings → Advanced** and set **Address Bar** to **Prefer Search Engine**.

## What it hides

- The **Chat** button in the toolbar, and **Personalize**.
- The **Chats** button in the sidebar or tab bar.
- **Skills** under the search field on new tab pages.
- In the command bar: the **Chat** suggestion, **⌃⌘↩**, **Add tabs or files**, and the "Looking for chat?" banner. "Ask anything…" becomes "Search or enter address".
- **File → Chat…**, **New Chat**, **Focus Chat**, **Send Chat Prompt Now**, **Open Daily Brief** and **Dia → Personalize Dia**, with their shortcuts, including ones you set in Dia's Shortcuts settings.
- **Chat With This Tab**, when you right-click a tab and on the card when you point at one.
- **Ask Dia about…** when you right-click selected text.
- In Settings: the **Apps** and **Skills** panes, **Morning Brief**, the **Chat events** and **Daily report** sounds, and the chat shortcuts.

Chat beside the page closes if it's open, and closes again if anything opens it.

## What it blocks

After a relaunch, Dia can't reach the servers behind chat, its web results, AI apps and skills, and artifacts. Anything that asks them fails at once, as if you were offline. Your account and subscription still work, and websites you visit aren't affected.

Turn it off and relaunch, and they all come back.

## FAQ

<details>
<summary><strong>Does it make Dia use less memory?</strong></summary>

Not by much. Dia's AI code is still loaded; it just can't show anything or reach its servers.

</details>

<details>
<summary><strong>What about Hide Chat Button and the other Hide tweaks?</strong></summary>

They're in the same **AI** section, and still work on their own. With this on, they're greyed out: what they hide stays hidden whether they're on or off.

</details>

<details>
<summary><strong>Is Chat with Support still there?</strong></summary>

Yes. It's how you reach Dia's support team, so **Help → Chat with Support** stays.

</details>
