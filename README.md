# Portfolio

Personal portfolio site — [Enovac.github.io/Portfolio](https://Enovac.github.io/Portfolio)

Built with React, TypeScript, Vite and TailwindCSS. Deployed to GitHub Pages.

## Development

```bash
pnpm install
pnpm dev          # http://localhost:8080
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm build:github-pages` | Build with the `/Portfolio/` base path |
| `pnpm preview` | Preview a production build locally |
| `pnpm typecheck` | TypeScript validation |
| `pnpm test` | Run tests |

## Structure

```
client/
├── App.tsx            Routing and entry point
├── global.css         Theme tokens and shared utilities
├── data/resume.ts     Page content — experience, projects, skills
├── pages/             Route components
└── lib/               Helpers
public/                Static assets, logos and icons
```

Content lives in `client/data/resume.ts`, separate from the layout.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds
with the Pages config and publishes to GitHub Pages.

To deploy manually:

```bash
pnpm run deploy
```
