Part of [Discoveries](Discoveries).

### Swift fields

Most of Dia is Swift. `-safeSwiftValueForKey:` (from AXCoreUtilities, loaded in every AppKit app) reads a Swift property by name, such as `spaceID`, `itemViews` or `isSelected`.

### Swift collections come back as `__SwiftValue`

Dictionaries usually bridge, but arrays often don't. Calling `count` or other `NSArray` methods on one crashes Dia. Parse its `description` instead, for example with a UUID regex.

### Dictionaries keyed by a Swift struct

Keys such as `SpaceID` describe themselves as the ID, so `[key description]` gives you a string to compare.

### Lazy properties

They're stored as `$__lazy_storage_$_name`, for example the profile dot `$__lazy_storage_$_dotView`.

### Setting Swift properties

`class_getInstanceVariable` finds a Swift class's stored properties by name. An object one, like the command bar's `font`, can be assigned through a `__strong` pointer at its address, which ARC retains and releases as usual.
