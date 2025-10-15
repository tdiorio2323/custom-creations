#!/usr/bin/env bash
set -euo pipefail

# ---- Inputs ----
APP_NAME="Custom Creations"
APP_SLUG="custom-creations"
SITE_URL="https://customcreationssi.com"
PHONE="+1-718-759-8345"
EMAIL="info@creationcustomsllc.com"
ADDRESS_STREET="75 Thompson St"
ADDRESS_CITY="Staten Island"
ADDRESS_REGION="NY"
ADDRESS_POSTAL="10304"
LAT="40.6209"
LNG="-74.0819"

# ---- Scaffold Next.js (TS + App Router + Tailwind) ----
if [ ! -f package.json ]; then
  npx --yes create-next-app@latest . \
    --ts --app --tailwind --eslint --src-dir=false --import-alias "@/*" --use-npm --skip-install
fi

# ---- Deps ----
npm i zod react-hook-form @hookform/resolvers resend lucide-react clsx
npm i -D @types/node

# ---- Tailwind base (harden) ----
cat > styles/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --container: 1200px; }
.container { max-width: var(--container); margin-inline: auto; padding-inline: 1rem; }
.btn { @apply inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-black/10 shadow-sm hover:bg-black/5 active:scale-[.99] transition; }
.input { @apply w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white; }
.label { @apply block text-xs font-medium text-black/70 mb-1; }
.card { @apply rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm; }
.badge { @apply inline-flex items-center gap-1 rounded-full border border-black/10 px-2 py-1 text-xs bg-white; }
.grid-auto { @apply grid gap-6; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
EOF

# ---- Public placeholders ----
mkdir -p public/images/portfolio public/og
cat > public/og/hero.jpg <<'EOF'
placeholder
EOF

# ---- lib ----
mkdir -p lib
cat > lib/seo.ts <<EOF
import type { Metadata } from "next";

export const site = {
  name: "${APP_NAME}",
  url: "${SITE_URL}",
  phone: "${PHONE}",
  email: "${EMAIL}",
  address: {
    street: "${ADDRESS_STREET}",
    city: "${ADDRESS_CITY}",
    region: "${ADDRESS_REGION}",
    postal: "${ADDRESS_POSTAL}",
    lat: ${LAT},
    lng: ${LNG},
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s • ${APP_NAME}" },
  description: "Auto body repair, ceramic coating, and PPF in Staten Island, NY.",
  openGraph: { type: "website", title: site.name, url: site.url, images: ["/og/hero.jpg"] },
  alternates: { canonical: site.url },
};
EOF

cat > lib/schema.ts <<EOF
import { site } from "./seo";

export const businessSchema = {
  "@context":"https://schema.org",
  "@type":"AutoBodyShop",
  name: "${APP_NAME}",
  url: site.url,
  telephone: site.phone,
  image: site.url + "/og/hero.jpg",
  address: {
    "@type":"PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "US"
  },
  geo: {"@type":"GeoCoordinates", latitude: site.address.lat, longitude: site.address.lng},
  openingHoursSpecification: [
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"18:00"}
  ],
  areaServed: ["Staten Island","Brooklyn","NJ"],
};
EOF

cat > lib/validators.ts <<'EOF'
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional(),
  message: z.string().min(10),
  consent: z.literal(true),
});

export const EstimateSchema = ContactSchema.extend({
  year: z.string().optional(),
  make: z.string().optional(),
  model: z.string().optional(),
  vin: z.string().optional(),
  service: z.enum(["repair","ceramic","ppf"]),
  panels: z.string().optional(),
  budget: z.string().optional(),
  urgency: z.enum(["asap","this-week","flex"]).optional(),
  photos: z.array(z.string().url()).optional(),
});
EOF

cat > lib/mailer.ts <<'EOF'
import { Resend } from "resend";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendMail(params: { to: string; subject: string; text?: string; html?: string; reply_to?: string }) {
  if (!resend) return { skipped: true };
  await resend.emails.send({
    from: "Custom Creations <no-reply@customcreationssi.com>",
    to: [params.to],
    subject: params.subject,
    text: params.text,
    html: params.html,
    reply_to: params.reply_to,
  });
  return { ok: true };
}
EOF

# ---- content ----
mkdir -p content
cat > content/services.json <<'EOF'
[
  {
    "slug": "auto-body-repair",
    "title": "Auto Body Repair",
    "summary": "Collision repair, dent removal, paint match, frame straightening.",
    "packages": []
  },
  {
    "slug": "ceramic-coating",
    "title": "Ceramic Coating",
    "summary": "Durable gloss and hydrophobic protection.",
    "packages": [
      { "name": "2-Year", "priceFrom": 699, "includes": ["Decon wash", "Single-stage polish", "2-year coating"] },
      { "name": "5-Year", "priceFrom": 1199, "includes": ["Correction", "5-year coating", "Wheels+glass add-on"] }
    ]
  },
  {
    "slug": "paint-protection-film-ppf",
    "title": "Paint Protection Film (PPF)",
    "summary": "Self-healing film for rock chips and road rash.",
    "packages": [
      { "name": "Front Bumper", "priceFrom": 399, "includes": ["Front bumper coverage"] },
      { "name": "Track Pack", "priceFrom": 1299, "includes": ["Full front", "Mirrors", "Rockers"] }
    ]
  }
]
EOF

cat > content/testimonials.json <<'EOF'
[
  { "name": "Michael R.", "text": "Flawless repair and perfect paint match.", "rating": 5 },
  { "name": "Alyssa S.", "text": "Ceramic coating made the car look brand new.", "rating": 5 }
]
EOF

cat > content/faqs.json <<'EOF'
[
  { "q": "Do you work with insurance?", "a": "Yes. We assist with claims, estimates, and adjuster coordination." },
  { "q": "How long does a repair take?", "a": "Minor repairs: 1–3 days. Collision: 3–10+ days depending on parts and scope." }
]
EOF

# ---- components ----
mkdir -p components
cat > components/header.tsx <<'EOF'
"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Custom Creations</Link>
        <nav className="hidden md:flex gap-5 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/estimate">Estimate</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a href="tel:+17185550123" className="btn"><Phone className="size-4 mr-2" /> Call</a>
      </div>
    </header>
  );
}
EOF

cat > components/footer.tsx <<EOF
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-black/10">
      <div className="container py-8 text-sm grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">${APP_NAME}</div>
          <div>${ADDRESS_STREET}, ${ADDRESS_CITY}, ${ADDRESS_REGION} ${ADDRESS_POSTAL}</div>
          <div><a href="tel:${PHONE}">${PHONE}</a></div>
        </div>
        <div className="grid gap-2">
          <Link href="/services">Services</Link>
          <Link href="/estimate">Estimate</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="text-black/60">
          © <span>{new Date().getFullYear()}</span> ${APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
EOF

cat > components/hero.tsx <<'EOF'
export default function Hero() {
  return (
    <section className="relative">
      <div className="container py-12 md:py-16">
        <div className="card p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Auto Body Repair, Ceramic Coating, and PPF in Staten Island
            </h1>
            <p className="mt-3 text-black/70">
              Collision repair, paint correction, and self-healing protection. Insurance-friendly. Fast turnaround.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="btn" href="/estimate">Get a Free Estimate</a>
              <a className="btn" href="/portfolio">View Work</a>
            </div>
          </div>
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-black/5 to-black/0 border border-black/10"></div>
        </div>
      </div>
    </section>
  );
}
EOF

cat > components/lead-form.tsx <<'EOF'
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/lib/validators";
import { z } from "zod";

type Form = z.infer<typeof ContactSchema>;

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Form>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { consent: true }
  });

  async function onSubmit(data: Form) {
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    if (res.ok) reset();
    alert(res.ok ? "Thanks — we'll reach out shortly." : "Error. Try again.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <label className="label">Name</label>
        <input className="input" {...register("name")} />
        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="label">Phone</label>
          <input className="input" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="label">Email (optional)</label>
          <input className="input" {...register("email")} />
        </div>
      </div>
      <div>
        <label className="label">Message</label>
        <textarea className="input min-h-28" {...register("message")} />
        {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("consent")} />
        <span className="text-xs text-black/70">You agree to be contacted.</span>
      </div>
      <button className="btn" disabled={isSubmitting} type="submit">{isSubmitting ? "Sending..." : "Send"}</button>
    </form>
  );
}
EOF

# ---- app structure ----
mkdir -p app/(site)/services app/(site)/portfolio app/(site)/reviews app/(site)/insurance-claims app/(site)/estimate app/(site)/booking app/(site)/about app/(site)/contact app/(site)/location app/(site)/faq app/(site)/blog
mkdir -p app/api/contact app/api/estimate app/api/reviews

# layout and root page
cat > app/(site)/layout.tsx <<'EOF'
import type { Metadata } from "next";
import { metadata as base } from "@/lib/seo";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../globals.css";

export const metadata: Metadata = base;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-black">
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
EOF

cat > app/(site)/page.tsx <<'EOF'
import Hero from "@/components/hero";
import { businessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container grid md:grid-cols-3 gap-6 mt-4">
        <div className="card p-6">
          <h3 className="font-semibold">Auto Body Repair</h3>
          <p className="text-sm text-black/70 mt-2">Collision repair, dent removal, paint match.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Ceramic Coating</h3>
          <p className="text-sm text-black/70 mt-2">Gloss and long-term protection.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">PPF</h3>
          <p className="text-sm text-black/70 mt-2">Self-healing film to stop chips.</p>
        </div>
      </section>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(businessSchema)}</script>
    </>
  );
}
EOF

# services index + detail pages via simple SSR
cat > app/(site)/services/page.tsx <<'EOF'
import services from "@/content/services.json";
import Link from "next/link";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="grid-auto">
      {services.map(s => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="card p-6 hover:bg-white">
          <h3 className="font-semibold">{s.title}</h3>
          <p className="text-sm text-black/70 mt-2">{s.summary}</p>
        </Link>
      ))}
    </div>
  );
}
EOF

mkdir -p app/(site)/services/[slug]
cat > app/(site)/services/[slug]/page.tsx <<'EOF'
import services from "@/content/services.json";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return (services as any[]).map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props) {
  const svc = (services as any[]).find(s => s.slug === params.slug);
  return { title: svc ? svc.title : "Service" };
}

export default function ServicePage({ params }: Props) {
  const svc = (services as any[]).find(s => s.slug === params.slug);
  if (!svc) return notFound();

  return (
    <article className="grid gap-6">
      <header className="card p-6">
        <h1 className="text-2xl font-semibold">{svc.title}</h1>
        <p className="text-black/70 mt-2">{svc.summary}</p>
      </header>
      {svc.packages?.length ? (
        <section className="grid md:grid-cols-2 gap-4">
          {svc.packages.map((p:any) => (
            <div key={p.name} className="card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <div className="badge">From ${p.priceFrom}</div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-black/70">
                {p.includes.map((i:string) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </section>
      ) : null}
      <a href="/estimate" className="btn w-fit">Request an Estimate</a>
    </article>
  );
}
EOF

# simple pages
cat > app/(site)/portfolio/page.tsx <<'EOF'
export const metadata = { title: "Portfolio" };
export default function Portfolio() {
  return <div className="text-black/70">Add before/after images in <code>public/images/portfolio</code>.</div>;
}
EOF

cat > app/(site)/reviews/page.tsx <<'EOF'
import testimonials from "@/content/testimonials.json";
export const metadata = { title: "Reviews" };
export default function Reviews() {
  return (
    <div className="grid-auto">
      {testimonials.map((t:any, i:number) => (
        <div key={i} className="card p-6">
          <div className="font-semibold">{t.name}</div>
          <div className="mt-2 text-sm text-black/70">{t.text}</div>
        </div>
      ))}
    </div>
  );
}
EOF

cat > app/(site)/insurance-claims/page.tsx <<'EOF'
export const metadata = { title: "Insurance Claims" };
export default function Insurance() {
  return (
    <article className="prose max-w-none">
      <h1>Insurance Claims Help</h1>
      <ol>
        <li>Bring the vehicle for photos and estimate.</li>
        <li>We coordinate with your adjuster.</li>
        <li>We repair and update you on parts status.</li>
        <li>Pickup with walk-through and warranty.</li>
      </ol>
    </article>
  );
}
EOF

cat > app/(site)/estimate/page.tsx <<'EOF'
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EstimateSchema } from "@/lib/validators";
import { z } from "zod";

type Form = z.infer<typeof EstimateSchema>;

export default function EstimatePage() {
  const { register, handleSubmit, formState:{errors, isSubmitting}, reset } = useForm<Form>({
    resolver: zodResolver(EstimateSchema), defaultValues: { consent: true, service: "repair" as any }
  });

  async function onSubmit(data: Form) {
    const res = await fetch("/api/estimate",{ method:"POST", body: JSON.stringify(data) });
    if (res.ok) reset();
    alert(res.ok ? "Estimate submitted. We will contact you." : "Error. Try again.");
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div><label className="label">Year</label><input className="input" {...register("year")} /></div>
          <div><label className="label">Make</label><input className="input" {...register("make")} /></div>
          <div><label className="label">Model</label><input className="input" {...register("model")} /></div>
        </div>
        <div>
          <label className="label">Service</label>
          <select className="input" {...register("service")}>
            <option value="repair">Auto Body Repair</option>
            <option value="ceramic">Ceramic Coating</option>
            <option value="ppf">PPF</option>
          </select>
        </div>
        <div><label className="label">Panels / Notes</label><input className="input" {...register("panels")} /></div>
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="label">Name</label><input className="input" {...register("name")} /></div>
          <div><label className="label">Phone</label><input className="input" {...register("phone")} /></div>
        </div>
        <div><label className="label">Email</label><input className="input" {...register("email")} /></div>
        <div><label className="label">Message</label><textarea className="input min-h-28" {...register("message")} /></div>
        <div className="flex items-center gap-2"><input type="checkbox" {...register("consent")} /><span className="text-xs">You agree to be contacted.</span></div>
        <button className="btn" disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting..." : "Submit Estimate"}</button>
      </form>
      <aside className="card p-6">
        <h3 className="font-semibold">Fast Turnaround</h3>
        <p className="text-sm text-black/70 mt-2">Attach photos via text or email after submission. We'll confirm parts and timelines.</p>
      </aside>
    </div>
  );
}
EOF

cat > app/(site)/booking/page.tsx <<'EOF'
export const metadata = { title: "Booking" };
export default function Booking() {
  return (
    <div className="card p-6">
      <div className="text-sm text-black/70">Embed your Cal.com or Calendly widget here.</div>
    </div>
  );
}
EOF

cat > app/(site)/about/page.tsx <<'EOF'
export const metadata = { title: "About" };
export default function About() {
  return <div className="prose max-w-none"><h1>About Custom Creations</h1><p>Family-owned autobody shop serving Staten Island.</p></div>;
}
EOF

cat > app/(site)/contact/page.tsx <<'EOF'
import LeadForm from "@/components/lead-form";
export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <div className="mt-4 text-sm text-black/70">75 Thompson St, Staten Island, NY 10304</div>
        <div className="mt-1"><a className="badge" href="https://www.google.com/maps/dir/?api=1&destination=75+Thompson+St+Staten+Island+NY+10304">Get Directions</a></div>
        <div className="mt-6"><LeadForm /></div>
      </div>
      <iframe className="w-full aspect-video rounded-2xl border border-black/10"
        src="https://www.google.com/maps?q=75%20Thompson%20St%20Staten%20Island%20NY%2010304&output=embed" />
    </div>
  );
}
EOF

cat > app/(site)/location/page.tsx <<'EOF'
export const metadata = { title: "Location" };
export default function Location() {
  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Our Location</h1>
        <p className="text-sm text-black/70 mt-2">75 Thompson St, Staten Island, NY 10304</p>
      </div>
      <iframe className="w-full aspect-video rounded-2xl border border-black/10"
        src="https://www.google.com/maps?q=75%20Thompson%20St%20Staten%20Island%20NY%2010304&output=embed" />
    </div>
  );
}
EOF

cat > app/(site)/faq/page.tsx <<'EOF'
import faqs from "@/content/faqs.json";
export const metadata = { title: "FAQ" };
export default function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((f:any, i:number) => (
        <details key={i} className="card p-4">
          <summary className="font-medium">{f.q}</summary>
          <p className="mt-2 text-sm text-black/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
EOF

# ---- api routes ----
cat > app/api/contact/route.ts <<'EOF'
import { ContactSchema } from "@/lib/validators";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = await req.json();
  const data = ContactSchema.parse(body);
  await sendMail({
    to: process.env.CONTACT_TO || "info@creationcustomsllc.com",
    subject: "New Contact",
    text: JSON.stringify(data, null, 2),
    reply_to: data.email
  });
  return Response.json({ ok: true });
}
EOF

cat > app/api/estimate/route.ts <<'EOF'
import { EstimateSchema } from "@/lib/validators";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = await req.json();
  const data = EstimateSchema.parse(body);
  await sendMail({
    to: process.env.CONTACT_TO || "info@creationcustomsllc.com",
    subject: "New Estimate Request",
    text: JSON.stringify(data, null, 2),
    reply_to: data.email
  });
  return Response.json({ ok: true });
}
EOF

# ---- sitemap + robots ----
cat > app/sitemap.ts <<'EOF'
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["","/services","/portfolio","/reviews","/estimate","/booking","/about","/contact","/location","/faq"].map(p => ({
    url: base + p, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7
  }));
  return routes;
}
EOF

cat > app/robots.ts <<'EOF'
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`
  };
}
EOF

# ---- envs ----
cat > .env.example <<EOF
NEXT_PUBLIC_SITE_URL=${SITE_URL}
GOOGLE_MAPS_API_KEY=
GOOGLE_PLACES_API_KEY=
RESEND_API_KEY=
CONTACT_TO=${EMAIL}
GA_MEASUREMENT_ID=
META_PIXEL_ID=
EOF

# ---- vercel.json ----
cat > vercel.json <<'EOF'
{
  "cleanUrls": true,
  "headers": [
    { "source": "/(.*)", "headers": [ { "key": "X-Frame-Options", "value": "SAMEORIGIN" } ] }
  ]
}
EOF

# ---- README ----
cat > README.md <<EOF
# ${APP_NAME}

Auto body repair, ceramic coating, and PPF — Staten Island, NY.

## Dev
\`\`\`bash
npm run dev
\`\`\`

## Configure
- Set env in \`.env.local\` from \`.env.example\`.
- Update phone/email/address in \`lib/seo.ts\`.
- Add images under \`public/images/portfolio\`.

## Deploy
- Vercel: connect repo, set envs, deploy.
EOF

# ---- Git init (optional) ----
if [ ! -d .git ]; then
  git init -q
  git add -A
  git commit -m "Init ${APP_SLUG} scaffold"
fi

echo "Done. Run: cp .env.example .env.local && npm run dev"
