# Shivendra Pratap Singh — portfolio

A static, dark editorial portfolio for Shivendra Pratap Singh — Research AI Engineer working across applied AI, AI systems, edge AI, privacy-preserving ML, fraud/AML, computer vision and data.

Built with Next.js 16 (App Router, static export), React 19, Tailwind CSS 4 and a lazy Three.js hero field. The landing hero follows a focused AI-engineer layout: greeting, large role statement, a local “Ask my work” search and five quick paths into the site. No server runtime is required.

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

Useful checks:

```bash
npm run lint
npm run build       # writes the static site to out/
npm run preview     # serves out/ at http://localhost:3008/
```

`npm run build` also runs `scripts/fix-export.mjs`, which normalizes the RSC prefetch payload filenames Next 16 emits for static routes.

## Editing content

Most copy, projects, metrics, role lenses, experience and Codolio stats live in `src/content/site.ts`. The print résumé layout is in `src/app/resume/page.tsx`. Regenerate `public/og.png` if the headline or positioning changes.

Every project card opens a slide-over brief with a tagline, summary, build notes, stats, tech stack and repository links. The hero search is a deterministic local index over those 24 briefs plus section anchors — it makes no API calls and is labelled as local search in the UI. Section results scroll in place; project results open the same brief used by the work grid.

## Static export

`next.config.ts` uses:

- `output: "export"`
- `trailingSlash: true`
- `basePath` from `NEXT_PUBLIC_BASE_PATH` or `PAGES_BASE_PATH`
- `images.unoptimized`

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, Open Graph metadata, `sitemap.xml` and `robots.txt`. The default is the placeholder `https://shivendra.dev`; the GitHub Actions workflow overrides it for the deployed Pages URL.

To test a project-page base path locally:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/portfolio"
$env:NEXT_PUBLIC_SITE_URL="https://<user>.github.io/<repo>"
npm run build
npm run preview
# http://localhost:3008/portfolio/
```

The export is written to `out/` at the artifact root, not `out/portfolio/`. That is intentional: GitHub Pages maps the artifact root to `/<repo>/`.

## GitHub Pages deployment

1. Push this directory to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main`, or run the **Deploy portfolio to GitHub Pages** workflow manually.

The workflow auto-detects:

- `<user>.github.io` → base path empty, URL `https://<user>.github.io`
- any other repo → base path `/<repo>`, URL `https://<user>.github.io/<repo>`

### Custom domain

Set two repository variables under **Settings → Secrets and variables → Actions → Variables**:

| Variable | Value |
| --- | --- |
| `SITE_URL` | `https://your-domain.com` |
| `PAGES_BASE_PATH` | `/` |

`/` is normalized to an empty base path by `next.config.ts`. Then set the same custom domain in **Settings → Pages**.

## Notes

- `public/.nojekyll` prevents Jekyll processing on Pages.
- `public/og.png` is the 1200×630 static social preview. Regenerate it if the role, headline or focus changes.
- `/resume` is a print-first A4 sheet; use the browser’s print/PDF flow to export it.
- The Three.js field is desktop-only, capped at ~30 fps and 1.35 DPR, pauses offscreen or in a hidden tab, and is disabled for reduced-motion visitors.
