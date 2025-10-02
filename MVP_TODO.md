## Content to supply (images, copy)
- `public/images/portfolio/*`: Upload 6+ before/after photos (rename to `service-vehicle-01.jpg` style) to unlock the gallery grid.
- `content/services.json`: Replace TODO copy with final turnaround, warranty, and package pricing per service.
- `content/faqs.json`: Swap placeholder FAQs with final answers covering coatings, drop-off, rentals, prep, and payments.
- `app/(site)/insurance-claims/page.tsx`: Update checklist language and replace the Claim Checklist TODO link once the PDF is ready.
- `app/(site)/blog/page.tsx`: Draft the first three posts or remove the placeholder section before launch.

## Config to set (env vars)
- `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CAL_URL`, `NEXT_PUBLIC_GBP_URL` for canonical URLs, scheduler, and review link.
- `GOOGLE_MAPS_API_KEY`, `GOOGLE_PLACES_API_KEY` if map widgets need authenticated embeds.
- `RESEND_API_KEY`, `CONTACT_TO` to power contact and estimate email delivery.
- `GA_MEASUREMENT_ID`, `META_PIXEL_ID` for analytics and remarketing once approved.

## Optional features (Google Reviews sync, uploads)
- `app/(site)/reviews/page.tsx`: Swap static testimonials for live Google Reviews once API sync is implemented.
- `app/(site)/estimate/page.tsx`: Add photo upload support tied to S3/Vercel Blob to capture damage imagery.
- `components/lead-form.tsx`: Integrate CRM webhook or SMS notification if lead routing is required.
