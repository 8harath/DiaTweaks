Part of [Discoveries](Discoveries).

### Helpers check who started them

Apple's Passwords helper has a launch constraint, and 1Password's helper checks the parent browser's code signature. A patched Dia, signed on your Mac, passes neither, but the original Dia, kept unpatched, passes both.

### 1Password's helper is sandboxed

It can only read apps under `/Applications`. A clone there (`clonefile`, instant on APFS) works; one in `~/Library` doesn't.

### Launch Services registers any app in `/Applications`

Hidden folders included, and it may then send links and "open Dia" to it. Run `lsregister -u` on the copy after starting it.
