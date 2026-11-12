Part of [Discoveries](Discoveries).

### Tab order

`appleScriptWindows` and then `appleScriptTabs` list tabs in on-screen order, with `tabId`, `URL` and `close:`.

### Moving tabs

The browser delegate can create tab groups, add and remove tabs, and run `moveTabGroupWithId:toNewIndex:`. The group index counts from the first unpinned tab. To move a single tab, put it alone in a temporary group, move the group, then ungroup it.

### Front window

The key window is often Settings or a popover. Walk `NSApp.orderedWindows` front to back for the first browser window.

### Tab switcher (⌃⇥)

`RecentTabsWindowController` keeps its list in `viewModel.stateSubject.currentValue`, and doesn't refresh while open. It commits as soon as a ⌘ flag change arrives, before local event monitors run. To catch ⌘W in it, hook `-[NSApplication nextEventMatchingMask:untilDate:inMode:dequeue:]`.

### Downloads

Dia opens the downloads list itself when a download starts, usually while the click on the page's link is still the current event. To tell that apart from the user asking, check the click is on the button, and count `-accessibilityPerformPress` too, as VoiceOver and Full Keyboard Access use it.

### Native messaging hosts

They're started with `posix_spawn`. Interposing it lets a tweak start a different helper.

### A tab's page

A sidebar tab is a `TabUI.TabView`. Its `contentViews` hold a `TabContentView` per page (more than one for a split), and each one's `viewModel.delegate` is a `TabContentController` with the tab's `contentID` and `webContentURL`. It doesn't lead to the page itself, an `ArcWebContents`, and none of the page's own IDs match the tab's `contentID`. Collect pages from `-[ArcWebContents setVisibility:]`, which every page gets, and match them by URL, only when one page has it.

### Unloading a page

`-[ArcWebContents discard]` asks Chromium to drop the page. The answer comes to the page's delegate, `ADK.WebContentChromium`, as `-webContents:finalizeDiscardRequest:` with a `BOOL`. Chromium says no for a page playing audio or one on screen. `-visibility` is 0 hidden, 1 occluded or 2 visible.

### Closing a page

A page made with `createWebContents:` is closed with `-close`. With some extensions installed (Quillbot is one), closing a page that still shows a site crashes Dia inside ArcCore, on a null pointer. Dia closes its own tabs with `-closeWithForegroundCommitTiming:1`, but that crashes too, and so do closing later or closing right after starting a load of `about:blank`. What works is loading `about:blank`, waiting until the page's `url` is `about:blank` (about 50 ms), and only then closing it.

### Selecting a tab doesn't lay it out

The tab's view doesn't get `-layout` when it's selected, so a tweak can't notice there. Its page's `setVisibility:` with 2 is the cue. Whether a tab is selected is in its `viewModel.stateSubject.currentValue`, as `selectionStyle`.

### Menu icons on macOS 27

An `NSMenuItem`'s image is hidden unless its `preferredImageVisibility` is `.visible`. Dia's own tab menu items set it, so an added item without it shows no icon and sits further left than the rest. The property is new in the macOS 27 SDK, so a build with an older SDK, like the one CI uses, doesn't know it: set it by name, `[item setValue:@1 forKey:@"preferredImageVisibility"]` inside `@available(macOS 27, *)`, where 1 is `.visible`.

### Where a link goes

Every link and `window.open` is asked about in `-[ADK.WebContentChromium webContents:decidePolicyForNavigationAction:]`, which returns a disposition: 0 ignore, 1 this tab, 2 a new tab in front, 3 a new tab behind (⌘-click), 5 a new window (Shift-click) and 6 a popup (`window.open` with a size). The action's `navigationDisposition` is what the page asked for. To make a new-tab link stay in its page, pass Dia an `NSProxy` around the action whose `navigationDisposition` is 1: no other page is made, and tweaks that look at links, like Peek, see an ordinary link. A popup with a size skips this and opens its own window, which sign-in pages need.

### A new tab from a popup window

A popup window has no tabs, so a new-tab link in it opens a tab in a normal window and brings that window forward. Little Arc opens such links in hidden tabs instead, so ⌘W shows the page before.

### `didCreateNewWebContent`

`-[ADK.WebContentChromium webContents:didCreateNewWebContent:targetURL:disposition:]` is shared by every page. Its first argument is the page that opened the new one, an `ArcWebContents`; `self` isn't.

### Coming forward for a link

A link clicked in another app makes macOS bring Dia forward before the link arrives. With Dia hidden, it comes in this order, about 100 ms apart overall: will unhide, did unhide, will become active, did become active, and only then the `GURL` Apple event. Every window shows for that moment. To show only some, make the others see-through in `NSApplicationWillUnhideNotification` (`alphaValue` 0), and put them back after the event, or after a quarter of a second if none comes.
