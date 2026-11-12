Part of [Discoveries](Discoveries).

### The sidebar that floats over the page

While tabs are hidden, it's `FloatingSidebarContainerView`, a separate popover with its own tint and effect views. Restyle it on its own, not through the window.

### Dia sets its corner radius outside layout

A layout hook alone loses the change half the time. Watch the layer's `cornerRadius` with KVO, and reapply when it changes.

### The header stack keeps room for hidden views

Hiding the traffic lights (`ARCUI.WindowStandardButtons`) leaves a gap. `-setVisibilityPriority:NSStackViewVisibilityPriorityNotVisible forView:` closes the gap and can be undone. Changing `detachesHiddenViews` drops the view from the stack for good.

The stack also keeps its 18 pt leading inset once the traffic lights are gone, so the profile button ends up 12 pt in from the pinned tabs. Move the stack in the header's own layout, after Dia has placed it, so no other stack view is touched.

### Dia hides some header views as the window appears

In Dia 1.56 it hides the recent tabs button that way, but only if the button says it's showing. One a tweak already hid gets skipped, and comes back as a second button when the tweak is turned off. Until the window is visible, answer `NO` from `-isHidden` to callers in Dia's own code (`dladdr` on the return address) for views the tweak hid. Answering AppKit too shows the view, and answering after the window shows leaves an empty space where the view was.

### Profile dots

`SpaceSwitcherItemView` redraws selection in `-updateLayer`, not `-layout`. Dia also moves the items outside layout, so spacing changes belong in `-setFrame:`. Profiles are keyed by `spaceID`, which survives renames.

The footer centers `SpaceSwitcherView` between its Chats and Recent Tabs buttons, so hiding one of them pulls the dots off center. After the footer lays out, give the switcher the wider of its two gaps on both sides.

### Pinned tab border

The colored border round the selected pinned tab is its own view, `SelectionOutlineView`, inside each `TabDockItemView`.

### The tab list

It's a collection view, `TabList.TabListView.CollectionView`, laid out by `TabList.TabListCollectionViewLayout`. Section 0 is the pinned tabs and folders, and its last item is a short row that draws the line under them (Dia's Close All line). Section 1 is today's tabs and section 2 is New Tab. The profile is `viewModel.delegate.spaceID` on the `TabList.TabListView`.

### Moving rows in the tab list

Wrapping the layout's `-prepareLayout`, `-layoutAttributesForItemAtIndexPath:`, `-layoutAttributesForElementsInRect:` and `-collectionViewContentSize` moves rows without Dia knowing. A hidden row should be left out of the elements in a rect, or the list keeps a see-through view for it that still catches the pointer. Animate with `performBatchUpdates:` on the list's animator, invalidating the layout inside it.

### Drops follow Dia's own layout

Dia works out where a dragged tab lands from its own row positions, so with rows moved, wrap the `TabList.TabListView` dragging methods and hand Dia an `NSProxy` of the drag with the pointer moved back. Dia pins a tab dropped above the middle of the first tab after the line.
