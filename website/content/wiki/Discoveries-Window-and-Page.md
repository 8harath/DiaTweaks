Part of [Discoveries](Discoveries).

## The window

### Corners

Dia's windows have no toolbar, so macOS gives them 16 point corners rather than the 26 points of macOS 26 apps. The private `-_setCornerRadius:` followed by `-_updateWindowCornerMask` changes them.

### The background is tiled

`WindowFrameBackgroundView` holds several `WindowBackgroundBaseView` tiles of `NSVisualEffectView` around the page, not one view behind it. Each tile blurs on its own, so the seams flash while the sidebar slides. Giving every tile the whole window's frame removes the seams, and the color doesn't change.

### The theme color is a separate layer

`WindowBackgroundOverlayTintView` sits above the tiles. To see through the window:

- hide it
- set `window.opaque = NO` and `backgroundColor = clearColor`
- set the tiles to `NSVisualEffectBlendingModeBehindWindow` and `NSVisualEffectStateActive`, or they go flat when Dia isn't in front

### Inside the tint

The tint holds a white or black wash, an `ARCUI.BackgroundColorView` at 70%, under a gradient of the profile's color at about 36%. A profile with no color still gets the gradient, as 3% grey. The wash is what covers the material, so hide only it to see through the window and keep the profile's color.

### Two copies of the tint

The selected tab draws its own small `WindowBackgroundOverlayTintView`. When looking for the window's tint, only take one whose grandparent is the theme frame.

### Glass

`NSGlassEffectView` has 24 private variants, set through `_variant`. Once drawn, a glass view keeps the variant it had, so make a new view to change variant.

### Dia's own toasts

Dia 1.56 shows its own toasts, such as "Copied Current URL" after ⇧⌘C, in a `_TtC11DiaToastsV210ToastPanel`. Older versions don't have the class, so checking for it tells whether a tweak's own toast would show twice.

### Prompts are popovers

Dia's downloads list (`DownloadsButton.DownloadsMenuViewController`) and the "not working correctly?" prompt after a few reloads (`NavigationBar.AdBlockReloadNudgeContentViewController`) are `NSPopover`s. To stop one, hook `-[NSPopover showRelativeToRect:ofView:preferredEdge:]` and skip it when `contentViewController` is that class.

## The page

### The rounded page

It's an `ARCUI.FlippedView` inside `ContentContainerView`. Its layer's `cornerRadius` does the clipping.

### Different corners need `cornerRadii`, not a mask

Dia crossfades a page that has a mask whenever it resizes. CALayer's private `cornerRadii` takes four sizes, in on-screen order from the top left, and animates like any property. Setting `cornerRadius` afterwards doesn't reset them.

If all four are 0, Core Animation stops using them and clips to `cornerRadius` again, so a page that should be square goes round. Use 0.01 for a square corner.

### Shadow and border are paths

An `ARCUI.ShadowView` draws a `shadowPath`, masked by a `CAShapeLayer` so the shadow only shows outside the page, plus a `CAShapeLayer` stroke for the border. All three have Dia's corner shape baked in, and need reshaping with the page.

### Dia animates those paths itself

It uses the keys `pathAnimation` and `shadowPathAnimation`. A separate animation of your own drifts out of step. Instead:

- reshape the animation's `fromValue` and `toValue` as Dia adds it (`-addAnimation:forKey:`)
- reshape paths as Dia sets them (`-setPath:`, `-setShadowPath:`)

Changing them later in layout shows Dia's shape for one frame.

### Mask layers have no superlayer

Walking up from a layer won't find the page it belongs to. Keep a weak map from each layer you change to its page.

### Animation starts from the screen

Dia often starts an animation from a path you set earlier. Remember the paths you set, and map them back to Dia's own before reshaping again.

### Sidebar show and hide

Dia sets the page's frame inside an `NSAnimationContext` lasting 0.25 seconds. Read `duration` and `timingFunction` in the frame setter to match it.

### The white strip

The strip at the page's edge while it resizes is Chromium redrawing the page a few frames late. It happens in stock Dia.

### The link address bubble

The address that shows when you point at a link is `StatusText.StatusTextView`, in a `StatusTextContainerView` along the bottom of the page's container.

### Taking turns with Dia on a frame

A tweak that sets a view's frame during layout, after Dia has set it, can start a fight: Dia sets its own back, the tweak sets it again, and once the passes outnumber the views in the window, AppKit throws its layout loop exception and Dia quits. It happened entering and leaving full screen with Edge-to-Edge, and while the menu bar slides in with Compact Sidebar Header, 8 to 100 seconds after launch. `DPMayAdjust` lets a tweak change a view's frame 8 times in one run loop turn, then leaves Dia's frame and lays the window out again once the run loop has waited.

### Colors with alpha keep one appearance

`[NSColor.labelColor colorWithAlphaComponent:]` is fixed to the appearance it was made in, so it stays white on a light background. For one that follows the view, use `+colorWithName:dynamicProvider:` and resolve `labelColor` inside `-performAsCurrentDrawingAppearance:` on the appearance it's given.

### Concentric corners

A button tucked into a window's corner looks right with that corner's radius set to the window's minus the gap, 16 − 6 = 10 points for a 6-point gap. Little Dia's buttons get one corner like that with a mask path. They never change size, so the crossfade under [Different corners need `cornerRadii`](#different-corners-need-cornerradii-not-a-mask) doesn't come up.
