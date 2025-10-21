# Repository Guidelines

## Project Structure & Module Organization
This Next.js App Router project serves marketing pages from `app/(site)` and handles form submissions through `app/api`. Shared UI sits under `components`, with layout primitives and icons ready to compose per route. Domain content lives in `content`, while cross-cutting helpers (SEO, mailers, validation) stay in `lib`; re-export shared hooks there for consistent imports. Static assets reside in `public` (`public/images/portfolio` for galleries, `public/og` for social cards), and global Tailwind layers load from `styles/globals.css`. `src/config` and `src/data` centralize legacy config and sample data; keep generated fixtures in `__tests__` or `coverage` to avoid polluting app code.

## Build, Test, and Development Commands
Install dependencies with `npm install`. Start local dev via `npm run dev` (`http://localhost:3000`); watch console for lint warnings. Before deploying, run `npm run build` to ensure production readiness, and smoke-test the output using `npm run start`. Use `npm run lint` for the Next.js ESLint preset; address every warning before opening a PR.

## Coding Style & Naming Conventions
Write TypeScript functional components and prefer `PascalCase` for components plus `camelCase` for hooks/helpers. Stick to two-space indentation and Tailwind-first class ordering: layout → spacing → color → typography. Export shared utilities via named exports from `lib/` entrypoints, and derive form types with `z.infer<typeof formSchema>` to stay in sync with `lib/validators.ts`. When adding new routes, place route-level layouts in `components` and keep server-only code inside `app/api` handlers.

## Testing Guidelines
Automated coverage is minimal today, so run `npm run lint` and manually exercise contact, estimate, and booking flows on desktop and mobile viewports. If you add Jest tests, colocate `.test.tsx` files beside the source, import `@testing-library/react`, and update `jest.config.js` as needed. Document exploratory testing (devices, browsers, APIs) in the PR checklist.

## Commit & Pull Request Guidelines
Use concise imperative commit messages with no trailing punctuation (e.g., `Add carbon fiber background`). Each PR should include a summary, relevant screenshots or videos for UI changes, verification steps, and linked tickets. Flag any environment changes, reference `.env.example`, and highlight schema or SEO updates touching `lib/seo.ts` or `lib/schema.ts`. Request review only after lint passes and outstanding comments are resolved.

## Environment & Deployment Tips
Configure local secrets via `.env.local` copied from `.env.example`; never commit secrets. Refresh `lib/seo.ts` metadata and structured data in `lib/schema.ts` when adjusting copy or navigation. Run `./init.sh` only on a fresh clone; subsequent scaffolding changes should be made by hand. For asset updates, prefer optimized images placed under `public/images/portfolio` and run the provided `download_hero_images.sh` script when updating hero visuals.
