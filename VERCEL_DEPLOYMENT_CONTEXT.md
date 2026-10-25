# Vercel deployment context for this repository

## Executive summary

This repository is not a single app at the project root. It is a monorepo/workspace with a frontend app, a backend service, and a mockup sandbox.

For Vercel deployment, the correct app to deploy is:

- `artifacts/site-starter`

This folder contains a Vite-based frontend app that is suitable for deployment on Vercel.

The repository root is a workspace manager, not an app entry point.

## Repository structure

```text
/
├── .gitignore
├── .npmrc
├── .replit
├── .replitignore
├── package.json                  # workspace root; not the app itself
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
├── tsconfig.base.json
├── replit.md
├── scripts/
│   └── ...
├── lib/
│   ├── api-client-react/
│   ├── api-spec/
│   ├── api-zod/
│   └── db/
├── artifacts/
│   ├── api-server/              # Express API backend
│   ├── mockup-sandbox/          # local prototype/sandbox
│   └── site-starter/            # Vercel-ready frontend app
│       ├── package.json
│       ├── vite.config.js
│       ├── index.html
│       ├── README.md
│       ├── .gitignore
│       ├── public/
│       └── src/
└── ...
```

## Which app is deployable on Vercel?

### Deployable frontend
`artifacts/site-starter`

This folder contains:

- `package.json`
- `vite.config.js`
- `index.html`
- `src/`
- `public/`

This is a standard Vite React-style frontend and is compatible with Vercel.

### Not deployable as-is on Vercel
`artifacts/api-server`

This is an Express server, not a Vercel serverless app. It relies on a local Node process and likely needs a separate hosting target such as:

- Render
- Railway
- Fly.io
- DigitalOcean App Platform
- a dedicated Node VPS

If you want the backend to run on Vercel, it would need to be converted into Vercel Serverless Functions or equivalent Vercel-compatible API routes.

## What files are missing for a Vercel deployment?

The repo does not currently contain a Vercel-native root deployment configuration for the app root. In other words:

- No root-level `vercel.json` for the site
- No `next.config.js` or `app/` directory because this is not Next.js
- No app-specific deployment config at the `artifacts/site-starter` level beyond the Vite app itself

For a basic frontend deployment, these are optional / helpful but not strictly required:

- `vercel.json` in `artifacts/site-starter`
- `.env.example` for environment variables
- `README.md` with deployment instructions (already exists in the app folder)

## Recommended Vercel project settings

If deploying only the frontend:

- Project root: `artifacts/site-starter`
- Framework: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

No special framework preset is required beyond Vite.

## Recommended deployment behavior

### Option A: Frontend only
Deploy `artifacts/site-starter` to Vercel.

This is the simplest and most correct option for this repo.

### Option B: Frontend + separate backend
Deploy the frontend on Vercel and host the API in `artifacts/api-server` elsewhere.

In this case, the frontend will need an API base URL such as:

```bash
VITE_API_URL=https://your-api-domain.example.com
```

### Option C: Full monorepo deployment on Vercel
This is possible only if the API is rewritten as Vercel Serverless Functions or if a framework such as Next.js is introduced. As-is, the repo is not a single app suitable for direct Vercel deployment from root.

## Important notes for another LLM

1. Do not deploy the repository root directly.
2. The root `package.json` is a workspace root, not an app.
3. The actual frontend app is `artifacts/site-starter`.
4. The backend is `artifacts/api-server` and is separate.
5. The mockup sandbox under `artifacts/mockup-sandbox` is for local/prototyping, not production deployment.
6. The correct Vercel deployment target is the Vite app at `artifacts/site-starter`.

## Example Vercel config

Optional file: `artifacts/site-starter/vercel.json`

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

## Example environment variables

Optional file: `artifacts/site-starter/.env.example`

```bash
VITE_API_URL=https://your-api-domain.example.com
```

## Short answer

If the goal is to deploy something working to Vercel, the likely intended deployment target is:

- `artifacts/site-starter`

and not the repository root.

## Evidence from project config

The frontend app has a Vite setup:

- `artifacts/site-starter/package.json`
- `artifacts/site-starter/vite.config.js`
- `artifacts/site-starter/index.html`

The root package is a monorepo/setup package:

- `/package.json`

The backend is an Express server package:

- `/artifacts/api-server/package.json`

This confirms the repo is structured as a workspace with multiple apps.

## Suggested next action

Deploy the frontend by setting the Vercel project root to:

```text
artifacts/site-starter
```

and choosing Vite as the framework.

If needed, host the API separately and point the frontend to it using `VITE_API_URL`.

---

This file was created to help another LLM understand the actual deployment target and avoid trying to deploy the repo root incorrectly.
