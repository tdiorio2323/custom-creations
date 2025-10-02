# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts App Router routes; `app/(site)/` contains marketing pages and `app/api/` handles form submissions.
- `components/` holds shared UI; keep layout primitives there and compose per route.
- `content/` provides JSON data, while `lib/` centralizes SEO, mail, and validation logic.
- `public/` stores static assets (`public/images/portfolio`, `public/og/`); global Tailwind layers live in `styles/globals.css`.

## Build, Test, and Development Commands
- `npm install` sets up dependencies.
- `npm run dev` launches the dev server at `http://localhost:3000`.
- `npm run build` compiles the production bundle; run before Vercel deploys.
- `npm run start` serves the built bundle locally for smoke tests.
- `npm run lint` runs the Next.js ESLint preset; fix all warnings.

## Coding Style & Naming Conventions
- Write TypeScript functional components; use `PascalCase` for components, `camelCase` for helpers and hooks.
- Keep the existing two-space indentation and Tailwind-first styling; order utilities from layout → spacing → color.
- Re-export shared helpers from `lib/`; prefer named exports for predictable tree shaking.
- Sync zod schemas in `lib/validators.ts` with form props and derive types via `z.infer`.

## Testing Guidelines
- No automated suite yet: run `npm run lint` and manually verify contact, estimate, and booking flows before PRs.
- When adding tests, place `.test.ts(x)` files beside the subject and use Jest + React Testing Library; add the run command here once configured.
- Note exploratory test coverage (devices, viewports, API checks) in the PR template.

## Commit & Pull Request Guidelines
- Mirror the current history: imperative, concise subject lines without trailing punctuation (e.g., `Add carbon fiber background`).
- PRs should include a summary, screenshots for UI, verification steps, and linked tickets or issues.
- Call out required environment updates and reference `.env.example` whenever secrets change.

## Environment & Deployment Tips
- Create `.env.local` from `.env.example`; never commit secrets.
- Refresh business metadata in `lib/seo.ts` and structured data in `lib/schema.ts` alongside copy changes.
- Run `./init.sh` only on fresh clones; afterwards adjust files manually to avoid overwriting edits.
