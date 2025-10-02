## Summary
Refined the scaffold into an MVP-ready marketing site: centralized business metadata, improved forms with inline feedback, added portfolio/review components, and hardened pages with TODO markers where final assets are pending.

## Files changed
- `components/header.tsx`, `components/footer.tsx`: Use `lib/seo` contact info, focus states, and optimized logo/map embeds.
- `components/lead-form.tsx`, `app/(site)/estimate/page.tsx`: Replaced `alert()` flows with reusable alert banners and better error handling.
- `app/(site)/booking/page.tsx`, `app/(site)/portfolio/page.tsx`, `app/(site)/reviews/page.tsx`: Embedded scheduler/portfolio/review MVPs with TODO fallbacks.
- `components/alert-banner.tsx`, `components/gallery-grid.tsx`, `components/review-card.tsx`: New shared UI.
- `content/services.json`, `content/faqs.json`: Added structure for warranties, addons, and extended FAQs with TODO notes.
- `app/(site)/services/[slug]/page.tsx`, `app/(site)/insurance-claims/page.tsx`, `app/(site)/location/page.tsx`, `app/(site)/blog/page.tsx`: Enriched service, insurance, location, and blog routes.
- `.env.example`, `.env.local`, `package.json`, `styles/globals.css`: Updated env template, typings placement, and global focus states.

## Open risks
- Portfolio gallery and blog still rely on future content uploads.
- Services/FAQ entries contain TODO copy that must be replaced before launch.
- Email notifications require `RESEND_API_KEY` + `CONTACT_TO`; booking iframe waits on `NEXT_PUBLIC_CAL_URL`.
- Google Maps embeds use unauthenticated endpoints; set API keys if quota becomes an issue.

## Next commands
```
cp .env.example .env.local
npm install
npx tsc --noEmit
npm run lint
npm run build
npm run dev
```
