# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Custom Creations** is an auto body shop website for a Staten Island, NY business offering:
- Auto body repair (collision, dent removal, paint matching)
- Ceramic coating packages
- Paint Protection Film (PPF)

**Business Details:**
- Name: Custom Creations
- Address: 75 Thompson St, Staten Island, NY 10304
- Contact Email: info@creationcustomsllc.com (for customer service/contact forms)
- Phone: +1-718-555-0123 (placeholder - update in `lib/seo.ts`)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend (optional, uses mock data by default)
- **Icons**: Lucide React

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm lint
```

## Architecture

### Data Strategy (Mock Data for Client Preview)

All data is currently stored in JSON files under `/content/`:
- `services.json` - Service offerings and pricing packages
- `testimonials.json` - Customer reviews
- `faqs.json` - Frequently asked questions

**Important**: This is intentionally using mock/static data for client preview. Once approved, you can plug in real APIs and backend services.

### Directory Structure

```
/app
  /(site)           # Main site routes with shared layout
    /services       # Services listing
    /[slug]         # Dynamic service detail pages
    /estimate       # Estimate request form
    /contact        # Contact form with map
    /portfolio      # Before/after gallery (placeholder)
    /reviews        # Customer testimonials
    /faq            # FAQ accordion
    /booking        # Booking widget placeholder
  /api
    /contact        # Contact form submission endpoint
    /estimate       # Estimate form submission endpoint
/components
  header.tsx        # Sticky navigation header
  footer.tsx        # Site footer with business info
  hero.tsx          # Homepage hero section
  lead-form.tsx     # Reusable contact form
/lib
  seo.ts            # Site metadata and business info
  schema.ts         # Schema.org structured data
  validators.ts     # Zod form schemas
  mailer.ts         # Email utility (Resend integration)
/content            # JSON data files
/styles             # Global CSS with Tailwind utilities
```

### Key Features

1. **SEO Optimized**: Schema.org structured data, sitemap, robots.txt
2. **Form Validation**: Client-side validation with Zod, server-side parsing
3. **Responsive Design**: Mobile-first Tailwind CSS
4. **Dynamic Routes**: Service detail pages generated from JSON
5. **Map Integration**: Embedded Google Maps on contact/location pages

### Configuration

- Update business info in `lib/seo.ts` (phone, email, address, coordinates)
- Environment variables in `.env.local` (copy from `.env.example`)
- Add portfolio images to `public/images/portfolio/`
- Replace placeholder OG image at `public/og/hero.jpg`

### Deployment Notes

- Designed for Vercel deployment
- Set environment variables in Vercel dashboard
- Optional: Configure Resend API key for email notifications
- Domain: customcreationssi.com (configured in `lib/seo.ts`)
