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
npm run lint
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
3. **Responsive Design**: Mobile-first Tailwind CSS with custom carbon fiber background pattern
4. **Dynamic Routes**: Service detail pages generated from JSON using `generateStaticParams()`
5. **Map Integration**: Embedded Google Maps on contact/location pages

### Form Handling Pattern

Forms use React Hook Form with Zod validation:
- Schemas defined in `lib/validators.ts` (`ContactSchema`, `EstimateSchema`)
- API routes (`app/api/contact/route.ts`, `app/api/estimate/route.ts`) parse with Zod before processing
- Email sent via `lib/mailer.ts` (Resend integration, falls back to mock if API key not set)
- All forms require consent checkbox (`z.literal(true)`)

### Custom Tailwind Utilities

Global styles in `app/globals.css` define reusable classes:
- `.container` - max-width container with responsive padding
- `.btn` - styled button with glass effect and hover states
- `.input` - form input with glass background
- `.card` - content card with backdrop blur and border
- `.badge` - small labeled element with rounded border
- `.grid-auto` - responsive auto-fill grid (min 260px columns)

### Configuration

- Update business info in `lib/seo.ts` (phone, email, address, coordinates)
- Environment variables in `.env.local` (copy from `.env.example`)
- Add portfolio images to `public/images/portfolio/`
- Replace placeholder OG image at `public/og/hero.jpg`

### Environment Variables

Required for full functionality (see `.env.example`):
- `RESEND_API_KEY` - Email notifications via Resend
- `CONTACT_TO` - Email recipient for form submissions (defaults to info@creationcustomsllc.com)
- `GOOGLE_MAPS_API_KEY` - Google Maps embed
- `NEXT_PUBLIC_SITE_URL` - Public site URL
- `NEXT_PUBLIC_CAL_URL` - Booking calendar URL
- `NEXT_PUBLIC_GBP_URL` - Google Business Profile URL
- `GA_MEASUREMENT_ID` - Google Analytics
- `META_PIXEL_ID` - Meta/Facebook pixel

### Deployment Notes

- Designed for Vercel deployment
- Set environment variables in Vercel dashboard
- Optional: Configure Resend API key for email notifications
- Domain: customcreationssi.com (configured in `lib/seo.ts`)

### Content Management

JSON files in `/content/` drive dynamic content:
- **services.json**: Service slugs, titles, packages, pricing, addons, todos
- **testimonials.json**: Customer reviews with names and ratings
- **faqs.json**: Question/answer pairs for FAQ accordion

Service detail pages at `/services/[slug]` are generated from `services.json` using `generateStaticParams()`. Update JSON to add/modify services without touching page code.

## Testing

This project uses Jest and React Testing Library for testing.

### Running Tests

```bash
# Run tests in watch mode (development)
npm test

# Run tests once (CI/CD)
npm run test:ci
```

### Test Setup

- **Jest Config**: `jest.config.js` - configured for Next.js with custom aliases
- **Setup File**: `jest.setup.js` - imports `@testing-library/jest-dom` for DOM matchers
- **Test Location**: `__tests__/` directory - all test files follow `*.test.tsx` naming pattern

### Writing Tests

Tests should use React Testing Library for component testing:

```typescript
import { render, screen } from '@testing-library/react'
import Component from '@/path/to/component'

describe('Component Name', () => {
  it('renders without crashing', () => {
    render(<Component />)
    expect(screen.getByText(/expected text/i)).toBeInTheDocument()
  })
})
```

### Current Test Coverage

- **Smoke Tests**: Basic rendering tests for homepage (`__tests__/smoke.test.tsx`)
- **TODO**: Add tests for form validation, API routes, and component interactions

## Content Update Instructions

All static content is managed via JSON files in the `/content/` directory. This allows non-technical users to update content without touching code.

### Updating Services (`content/services.json`)

Each service requires:
- `slug`: URL-friendly identifier (used in `/services/[slug]`)
- `title`: Display name
- `description`: Full service description (used on detail pages)
- `summary`: Short description (used on homepage)
- `turnaround`: Expected completion time
- `warranty`: Warranty information
- `addons`: Array of available add-on services
- `packages`: Array of pricing tiers, each with:
  - `name`: Package name
  - `priceFrom`: Starting price (number)
  - `warranty`: Package-specific warranty
  - `turnaround`: Package-specific turnaround
  - `includes`: Array of features/inclusions

**Example:**
```json
{
  "slug": "ceramic-coating",
  "title": "Ceramic Coating",
  "description": "Full service description...",
  "summary": "Short summary for homepage",
  "turnaround": "1-2 days",
  "warranty": "2-5 year manufacturer warranty",
  "addons": ["Wheel coating (+$199)", "Glass coating (+$149)"],
  "packages": [
    {
      "name": "2-Year Protection",
      "priceFrom": 699,
      "warranty": "2-year manufacturer warranty",
      "turnaround": "1-2 days",
      "includes": ["Decon wash", "Single-stage polish", "2-year coating"]
    }
  ]
}
```

### Updating Testimonials (`content/testimonials.json`)

Each testimonial requires:
- `name`: Customer name (first name + last initial)
- `vehicle`: Vehicle make/model/year
- `text`: Review text (keep under 200 characters)
- `rating`: Star rating (1-5)

**Example:**
```json
{
  "name": "Michael R.",
  "vehicle": "2019 BMW M4",
  "text": "Flawless repair and perfect paint match. Highly recommend!",
  "rating": 5
}
```

### Updating FAQs (`content/faqs.json`)

Each FAQ requires:
- `q`: Question text
- `a`: Answer text (can include HTML for links, emphasis)

**Example:**
```json
{
  "q": "Do you work with insurance?",
  "a": "Yes. We work with all major insurance carriers and handle the entire claims process."
}
```

The homepage automatically displays the first 6 FAQs. The `/faq` page shows all FAQs.

## Deployment Checklist

Before deploying to production, ensure:

### 1. Environment Variables

Set all required environment variables in your deployment platform (Vercel, Netlify, etc.):

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://customcreationssi.com
CONTACT_TO=info@creationcustomsllc.com

# Optional but recommended
RESEND_API_KEY=re_xxxxxxxxxxxxx
GOOGLE_MAPS_API_KEY=AIzaSyxxxxxxxxxxxxxx
GA_MEASUREMENT_ID=G-XXXXXXXXXX
META_PIXEL_ID=123456789012345

# Public URLs (update with real URLs)
NEXT_PUBLIC_CAL_URL=https://cal.com/custom-creations
NEXT_PUBLIC_GBP_URL=https://g.page/custom-creations-si
```

### 2. Business Information

Update business details in `lib/seo.ts`:
- Phone number (replace placeholder `+1-718-555-0123`)
- Verify email address
- Confirm business hours
- Verify physical address and GPS coordinates

### 3. Content Assets

- Add real portfolio images to `public/images/portfolio/` (minimum 6 images recommended)
- Replace OG image at `public/og/hero.jpg` with actual business photo
- Update logo at `public/logo.png` if needed
- Add favicon files if not already present

### 4. Social Media & External Links

Update footer social links in `components/footer.tsx`:
- Replace `#` placeholders with real Instagram/Facebook/YouTube URLs
- Verify booking calendar URL (`NEXT_PUBLIC_CAL_URL`)
- Verify Google Business Profile URL (`NEXT_PUBLIC_GBP_URL`)

### 5. Testing Before Deploy

Run these commands locally to ensure everything builds correctly:

```bash
# Install dependencies (if not already installed)
npm install

# Run linter
npm run lint

# Run tests
npm run test:ci

# Build for production (check for errors)
npm run build

# Test production build locally
npm start
```

### 6. Deployment Platform Setup (Vercel)

1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure domain (customcreationssi.com)
4. Enable automatic deployments on main branch
5. Set up preview deployments for pull requests

### 7. Post-Deployment Verification

After deploying, verify:
- [ ] All pages load correctly
- [ ] Forms submit successfully (test contact & estimate forms)
- [ ] Email notifications work (if Resend is configured)
- [ ] Google Maps embed displays correctly
- [ ] All images load properly
- [ ] Mobile responsiveness works across devices
- [ ] Meta tags and OG images display correctly when shared
- [ ] Analytics tracking is active (if configured)

### 8. DNS Configuration

If using a custom domain:
1. Point domain to Vercel (A record or CNAME)
2. Configure SSL certificate (automatic with Vercel)
3. Verify HTTPS redirect is active
4. Test www and non-www versions
