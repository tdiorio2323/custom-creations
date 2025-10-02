# Analytics & Tracking Stack

## Core Tools
- **GA4 Property:** TODO: set measurement ID in `.env` (`GA_MEASUREMENT_ID`).
- **Google Search Console:** Verify domain via DNS.
- **Meta Pixel:** ID stored in `.env` (`META_PIXEL_ID`).
- **Call Tracking:** CallRail or CallTrackingMetrics for dynamic number insertion.

## Implementation Checklist
- [ ] Install GA4 via Next.js script or Tag Manager.
- [ ] Configure conversion events: `generate_lead`, `book_consult`, `submit_contact`.
- [ ] Add Meta Pixel base + lead event on forms.
- [ ] Set up CallRail number pool for Staten Island campaigns.
- TODO: Document dataLayer structure if using GTM.

## Dashboards
- [ ] Build Looker Studio report (traffic, conversions, call volume).
- [ ] Weekly metrics exported to `07_reporting_qa/weekly-metrics.md`.
- [ ] Compare organic vs. paid leads.

## Data Retention & Privacy
- Provide cookie consent if retargeting used.
- Mention analytics tracking in privacy policy.
- Exclude internal IPs (shop, remote team) from GA data.

## QA Steps
- Test each form submission to ensure events fire.
- Validate cross-domain tracking if using external booking links.
- TODO: Set up uptime monitor for script failures.
