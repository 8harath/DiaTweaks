Part of [Discoveries](Discoveries).

### SF Symbols differ between macOS versions

A symbol name that's new in macOS 27, such as `circle.on.app.liquid.glass.fill`, gives `nil` on macOS 26, and `+[NSImageView imageViewWithImage:nil]` throws, which took down the whole Settings pane. Give each icon older fallbacks and use the first that exists.

`/System/Library/CoreServices/CoreGlyphs.bundle/Contents/Resources/name_availability.plist` lists the year each symbol arrived, and its `year_to_release` maps each year to a macOS version (2025 is macOS 26, 2026 is macOS 27), so you can check a name without an older Mac.

### Glass hints instead of tooltips

macOS 26's hints, the glass bubbles with an arrow that System Settings shows, are an `NSPopover` with a label in it. A few things it needs:

- Give the content view its `fittingSize` as its frame, and the view controller its `preferredContentSize`, before showing it. Otherwise a wrapping label lays out at zero width and the popover opens as a tall sliver.
- `NSPopoverBehaviorTransient` closes it on any click, and the click still reaches what it was aimed at, such as a Settings row.
- An `NSTrackingArea` doesn't retain its owner. Keep the owner alive with the view, and remove the area before letting the owner go.

`DPSetHint` in StdPatch does all of this.

### Resizable turns on the green button

The Patches pane makes the Settings window resizable so it can grow taller, and that turns on the green button, which then zooms or goes full screen. Disable `NSWindowZoomButton` and set `NSWindowCollectionBehaviorFullScreenNone` while the pane shows, and put both back when it goes.

### Rows that appear slide over the row above

Unhiding a row in an `NSStackView` while an animation is running makes it ride down from the top of its group over the row above, and hiding one inside an animation fades it out while it moves, which leaves a ghost behind. Hide or unhide inside an `NSAnimationContext` group with a duration of 0 and `allowsImplicitAnimation` off, so only the rows around it slide. A row that appears starts at alpha 0 and fades in once the gap has opened, about 0.2 seconds later. Take its separator with it, the view before it in `arrangedSubviews`.

### Recording a shortcut

Settings' shortcut field, like the one on Dia's Shortcuts page, records with a local `NSEvent` monitor for key-down events while it's recording, and returns `nil` from it so the keys don't reach Dia. It saves the key code, the modifier flags masked to ⌘⌃⌥⇧, and the characters for showing it. Ask for ⌘, ⌃ or ⌥ unless it's a function key, or plain letters get taken from text fields. Delete clears it and Escape cancels. `DPShortcutField` and `DPShortcutMatches` in StdPatch do this.

### Sections and headings

Settings sorts its sections by the `order` of each section's first tweak, and lists Hide tweaks last in each, shortest title first. An option, a tweak with `requires`, shows on its parent's page instead, under a heading named by its own `section`, or **Options** if it has none. A parent's own rows go under the heading their view's `identifier` names. Options this Dia can't use go in **Not Available in This Version**, last.

### Making Patches open quickly

With about 60 rows, building the pane and laying it out took about 370 ms. What cost most:

- `-[NSSwitch intrinsicContentSize]`, about a quarter of layout. Every switch here is the same small one, so cache it.
- `NSBox` separators. A one-point view with `separatorColor`, its `alignmentRectInsets` set to (0.5, 0, -0.5, 0), draws the same line in the same place.
- Building a new symbol image per row. Look each one up and size it once, with `-imageWithSymbolConfiguration:`, and share it.

Laying a view out before it's in the window doesn't carry over: adding it costs about as much again. Adding it hidden as Settings opens and showing it on click takes about 5 ms.

### Hiding Dia's own rows

The sidebar (`Preferences.SidebarListView`) doesn't implement `-tableView:heightOfRow:`, and Shortcuts and Advanced are `NSTableView`s too. `-hideRowsAtIndexes:withAnimation:` hides rows in all of them. Unhide with the table's own `hiddenRowIndexes`: indexes saved earlier can point past the end after the list changes, and unhiding those crashes Dia.
