Part of [Discoveries](Discoveries).

### "Model not ready" doesn't always mean downloading

`SystemLanguageModel.default.availability` in FoundationModels has only three reasons it can't run: `deviceNotEligible`, `appleIntelligenceNotEnabled` and `modelNotReady`. It reports `modelNotReady` both while the model downloads and when macOS will never download it, because a setting rules Apple Intelligence out. In the second case nothing is under `/System/Library/AssetsV2/` for the language model, and waiting doesn't help.

### macOS's eligibility check says which setting

Apple Intelligence's internal name is GREYMATTER. macOS decides whether a Mac may have it in `libsystem_eligibility`, which every process can call:

```c
long domain = os_eligibility_domain_for_name("OS_ELIGIBILITY_DOMAIN_GREYMATTER");  // 122 on macOS 27
uint64_t answer, source;
xpc_object_t status, context;  // both come back retained
os_eligibility_get_domain_answer(domain, &answer, &source, &status, &context);
```

`answer` is 4 when the Mac is eligible and 2 when it isn't. `status` maps each input it checked to 3 if it passed and 2 if it failed:

| Input | Fails when |
| --- | --- |
| `DEVICE_CLASS`, `GENERATIVE_MODEL_SYSTEM` | The Mac can't run it |
| `EXTERNAL_BOOT_DRIVE` | The Mac started up from an external drive |
| `COUNTRY_LOCATION`, `COUNTRY_BILLING` | It isn't offered in the country or region |
| `DEVICE_REGION_CODE` | The Mac's region in Language & Region |
| `DEVICE_LANGUAGE` | The Mac's language isn't supported |
| `SIRI_LANGUAGE` | Siri's language isn't supported |
| `DEVICE_AND_SIRI_LANGUAGE_MATCH` | Siri and the Mac use different languages |

`context` holds the languages it compared: `OS_ELIGIBILITY_CONTEXT_ELIGIBLE_SIRI_LANGUAGE` and `OS_ELIGIBILITY_CONTEXT_ELIGIBLE_DEVICE_LANGUAGES`. The Mac's side isn't simply its first language. English (US) with the region set to Malta comes out as `en-GB`, so with Siri on English (US) the match fails and Apple Intelligence never downloads, while FoundationModels keeps saying it isn't ready.

A call takes well under a millisecond, so it's fine to make on hover. `/private/var/db/os_eligibility/eligibility.plist` holds the same answers for many domains, but it left GREYMATTER out on one Mac, so ask the function instead. Both functions are private and could change with any macOS update; Tidy Tabs falls back to a general message if they're missing.

### Other ways in

`GMAvailabilityWrapper` in the private GenerativeModels framework has `+isDeviceEligible`, `+currentWithUseCaseIdentifiers:` and more, but only says whether, not why. Finding the domain number came from setting a breakpoint on `os_eligibility_get_domain_answer` while calling `+isDeviceEligible`.
