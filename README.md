# Whiteout Tech Store

Vite + React + TypeScript storefront with Supabase.

## Local development

Requires [Node.js](https://nodejs.org/) (npm).

```sh
npm install
npm run dev
```

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm test` — unit tests (Vitest)

## GitHub Pages

Pushes to `main` run [Deploy GitHub Pages](.github/workflows/deploy-pages.yml). In the repository: **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

After the first successful run, the site is available at  
`https://<username>.github.io/<repository-name>/` (for this repo: `https://rockinmyhead.github.io/whiteout-tech-store/`).
