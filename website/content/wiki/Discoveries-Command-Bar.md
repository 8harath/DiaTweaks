Part of [Discoveries](Discoveries).

## The new tab page's bar

### It works on its own

The bar on the new tab page is `AssistantPanelUIBase.AssistantPanelRootView`. Moved into another view, even with its tab in the background, its suggestions, chats, `@` and `/` keep working, and what it opens loads in its own tab. Its "Add tabs or files" button only opens its menu while the new tab page shows, but typing `@` opens the same menu.

### Only a backdrop layer blurs the page

Snapshots and `CIFilter` backgrounds can't see web content, which Chromium's GPU process draws. A private `CABackdropLayer` with a `gaussianBlur` `CAFilter` can.

### Going back before the first draw

Focusing the previous tab from the new tab page's `-viewDidMoveToWindow` keeps the new tab page from ever showing. But Dia, still switching tabs, then takes the page's `WebContentsHostView` out of the window. The page keeps showing through Chromium's compositor layer but takes no clicks.

The fix is to add the view back before the window draws (a run loop observer on `kCFRunLoopBeforeWaiting`), pinned to its parent with constraints.

### Overlays should live in the page's card

Dia animates the card's layer when the sidebar slides, so a view placed from outside jumps to the end straight away. A subview of the card moves and clips with it.

### Closing a window's last tab

Dia opens the new tab that replaces it before the old one is gone, so for a moment both are in `appleScriptTabs`. The Close Tab shortcut in `NSApp.currentEvent` is the only sign of a close at that moment.

Closing a window's only tab closes the window, and Dia quits with it. A command bar opened on that tab should blank the page when it's dismissed, not close the tab.

### A restored bar is laid out narrow first

On a new tab restored at launch, Dia first lays the bar out 28 pt wide, which wraps the input to 87 pt instead of 23. A height measured then is wrong, so measure it again whenever the bar's width changes.

### Shortcuts before Dia

A local `NSEvent` monitor sees a menu's shortcut before the menu does, and returning `nil` stops it. The sidebar's New Tab button is `TabList.NewTabCellView`, which acts on `-mouseDown:`.

### Setting what's typed

The bar's text is an `NSTextView`. `-insertText:replacementRange:` over its whole `string` changes it as typing would, so the suggestions follow, and `-selectAll:` then leaves it selected to type over.

## ⌘L's bar

### It's the same panel

Open Command Bar puts an `AssistantPanelRootView` in a `DynamicPopover` root view on the window's frame view, set up to edit the current tab. It can be moved out like the new tab page's, and closes with the popover. `cancelOperation:` sent to its text view closes it as Escape does. A new one is made each time.

### It has its own style

- Its text is 13 points where the new tab page's is 16, kept in `BoostCommandBar.TextContainerView`'s `font` ivar.
- The first `Double` of `BoostCommandBar.RootView`'s `layoutConfiguration` (the space above the text) is 19 where the new tab page's is 21. Dia writes the 19 back a few times while it opens, after sizing the bar by it.
- It builds the bar over about 90 ms, from a 30 point strip to full height, then fades the toolbar in over 0.16 s. The toolbar's `alphaValue` turning 1 marks it built.

### The popover's root view tells when it opens and closes

Its `-viewDidMoveToWindow` runs with a window as the bar opens and without one as it closes, so the bar can be lifted out and put back there. The popover hides the bar's own `ShadowView`, drawing its shadow itself, so a lifted bar needs it shown again.

### Skipping Dia's own animations

Removing every animation from the bar's layer tree (`-removeAllAnimations`, recursively) drops the fades Dia already started, and the bar shows as it ends up.

### The placeholder

The field is an `ARCUI.TextViewWithPlaceholder`. Dia sets "Ask anything…" from Swift, so hooking `-setPlaceholderAttributedString:` sees nothing. Hook the getter, `-placeholderAttributedString`, which AppKit reads to draw it.

### Hiding a suggestion

The list is an `NSTableView` in `BoostCommandBar.SuggestionsView`, fed by a diffable data source. Asking it for a row's view while it updates throws and crashes Dia, so look at rows after `-endUpdates` and `-reloadData`. The chat row is the one with an `NSImageView` labelled "chat". `-hideRowsAtIndexes:withAnimation:` hides it with nothing left behind, but the list keeps its height for every row, so a gap stays at the bottom. Dia keeps its own idea of the selected suggestion, so landing on a hidden row has to move on with `moveUp:` or `moveDown:` on the field.

### Chat's menu items

Dia hides and shows some chat menu items itself, so a tweak hiding them should hook `-[NSMenuItem setHidden:]`, keep what Dia asked for, and add its own. Dia runs those items' shortcuts, custom ones included, before the menus, so a hidden item's shortcut still works until a local key monitor takes it.
