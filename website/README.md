# DiaTweaks documentation website

A static, searchable website for the DiaTweaks wiki, with installation and Arc transition guides. No backend, analytics, external fonts, or runtime dependencies. JavaScript adds search and copy buttons; all documentation and navigation work without it.

Typography pairs Newsreader headings with DM Sans for documentation and navigation. The build bundles their Latin variable WOFF2 files from Fontsource and includes each font's license in `dist/fonts/`. Fonts load from the same origin with `font-display: swap`; no font service is contacted by visitors.

## Local development

Requires Node.js 22 and npm.

```sh
cd website
npm ci
npm run build
npm run check
npm run dev
```

Open `http://127.0.0.1:4321`. Rebuild and reload after editing. `PORT` changes the local port.

## Refresh the wiki

The wiki is the source of truth. `content/wiki/` and `public/wiki-assets/` contain a committed snapshot so pull requests build without fetching mutable external content. `content/wiki-source.json` records its exact commit. Preview media belongs to the upstream documentation; retain its attribution and source links.

```sh
npm run sync:wiki
npm run build
npm run check
```

Or use a local wiki checkout:

```sh
WIKI_SOURCE=/absolute/path/to/DiaTweaks.wiki npm run sync:wiki
```

Commit the changed content, media, and source metadata together. Do not edit mirrored Markdown here. Edit Arc transition copy in `content/coming-from-arc.md`; installation, commands, and recovery come from the repository README. The renderer sanitizes wiki HTML and rewrites wiki links and media to local paths.

## GitHub Pages

In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source. The `Documentation website` workflow builds and checks changes in pull requests and deploys pushes to `main`. The `github-pages` environment must permit the deployment branch; set this in Settings → Environments if deployment is restricted to main.

The contributor's fork can host a preview before merging: build with the repository base, publish the contents of `dist/` to a separate `gh-pages` branch, and select **Deploy from a branch → gh-pages → / (root)** in Pages settings. This preserves the fork's main branch. Switch to the Actions publishing source after merging the website workflow into main for automatic deployments.

The workflow builds with `SITE_BASE=/<repository-name>`, so assets, full-text search, and deep links work at `https://<owner>.github.io/<repository-name>/`. For a custom domain at the root, set `SITE_BASE` to an empty string instead.

```sh
SITE_BASE=/DiaTweaks npm run build
npm run check
```

The check walks every generated page and validates local links, images, anchors, project-path containment, and search coverage. PRs only build; they do not publish. GitHub Pages serves the generated `404.html` for missing pages.

## Structure

- `scripts/build.mjs`: static HTML, navigation, sanitized Markdown, search index.
- `scripts/sync-wiki.mjs`: reproducible wiki and media import.
- `public/styles.css`: shared responsive design and print styles.
- `public/app.js`: accessible native-dialog search and command copying.
- `content/`: wiki snapshot, provenance, and website-specific guide.

The website never runs installer commands, changes Dia, or copies a command without a click. Installing and testing the native tweaks is outside the website build.
