Part of [Discoveries](Discoveries).

### Dev notifications

With `devTools` on, `com.diapatches.dev.set` flips a tweak, and `com.diapatches.dev.dump` writes every window's view tree to `views.txt` beside the dylib.

### Tab layout without clicking

It's saved per window in the `persistedWindowData` default, as `"tabLayoutStyle":{"sidebar":{}}` or `{"tabStrip":{}}`. Up to Dia 1.55 you could edit it while Dia was quit; Dia 1.56 ignores the edit.

**View → Show Tabs in Sidebar** switches the front window while Dia runs, and its checkmark (`AXMenuItemMarkChar`) says which layout that window has. Clicked while a new window's command bar is still open, it does nothing. New windows, and windows restored after a relaunch, take the layout last chosen, so switch a throwaway window back to the sidebar when you're done.

Clicked through System Events while Dia is in the background, it does nothing, even after `AXRaise` on the window: activate Dia first. `make test` reports tabs in the sidebar if any visible window has them, so switch each one.

### Driving Dia from a script

- Test in a new window of your own, and check it's in front before every keystroke. A window that's open at the start is someone's real tabs.
- System Events' ⌘T doesn't open a new tab in a second window. Clicking **File → New Tab** does.
- With several windows open, read state from the key window only. The first window in `NSApp.windows` is often another one.
- Tooltips and hover hints only come up for real mouse-moved events. Warping the pointer moves it without one, so post `kCGEventMouseMoved` events along a path instead.
- A window closed just before Dia quits can come back at the next launch. Check the window list after a relaunch.
- A window's position doesn't tell yours from a test window. A new window opens at the same spot as a full-size one. Count windows before and after, and remember the new window's ID.
- The Settings window has no title. Pick a pane with System Events' `set selected of row N of table 1 of scroll area 1 of splitter group 1`. Its scroll bar isn't exposed, so scroll with pixel scroll-wheel events.
- A page waiting on an image the server answers after a few seconds keeps loading that long, which is enough to see loading progress.

### Crashes that need an extension

Some crashes only happen with a certain extension installed. Install it in a separate test profile, so nobody's own profile runs it, and remove it from `chrome://extensions` when done. macOS's crash dialog belongs to the `UserNotificationCenter` process; its Ignore button dismisses it.

### Putting settings back

`defaults import` merges into the domain rather than replacing it, so keys a test added stay behind. Note each key's old value before a test and write it back after.

### Catching a one-frame glitch

Screenshots in a loop are too slow. Record the window alone with ScreenCaptureKit at 120 fps, compare frames to the resting one, and always record stock Dia (tweak off) as well. Several glitches turned out to be Dia's own.

### Installing a build

Copy the dylib to a new file, then `mv` it over the installed one. Copying over it in place makes Dia die with "Code Signature Invalid".

### The number of scenarios moves

`make test`'s pairwise scenarios are picked greedily in Settings order, so moving a tweak to another section changes how many there are. Every pair is still covered.

### Crashes after launch and safe mode

Safe mode turns tweaks off when Dia crashes soon after launch. Layout loop crashes came up to 100 seconds in, so it now counts a crash for 3 minutes after launch, not 15 seconds. Four such crashes in a row turn DiaTweaks off completely. After one launch that stays open or quits normally, the next launch brings Settings back with tweaks paused; that happens once per build.

### Packaging on a Mac

`ditto -c -k` keeps extended attributes, and macOS gives every file a build makes a `com.apple.provenance` attribute, so a zip packed on a Mac gets a `._` file beside each one. CI's runner doesn't add them. To pack a release by hand, copy the files somewhere, run `xattr -cr` on them and zip with `ditto -c -k --norsrc`.

### CI builds with an older SDK

CI's Xcode is older than the Mac we test on, so an API that's new in macOS 27 builds here and fails there. Check the `make` job on a PR before merging, and reach new properties by name until CI's SDK catches up.

### Modifier keys get stuck

A synthetic click posted with Shift or ⌘ can leave the key down for every later click, which turns them into Shift- or ⌘-clicks: Peek opens and links go to background tabs. Post key-up events for every modifier after any test that holds one.

### Timing and drawing inside Dia

A dev notification can time Dia's own code where it runs, such as selecting a Settings pane, and render a view offscreen with `-cacheDisplayInRect:toBitmapImageRep:` to compare before and after pixel by pixel. An `NSWindow` made in code is released when closed unless `releasedWhenClosed` is NO, and with ARC that crashes Dia.

### Window order

`CGWindowListCopyWindowInfo` with on-screen windows lists them front to back with their app and number, no screen recording permission needed. It's how to check which windows came forward.
