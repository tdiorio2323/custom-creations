import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-black/10">
      <div className="container py-8 text-sm grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">Custom Creations</div>
          <div>75 Thompson St, Staten Island, NY 10304</div>
          <div><a href="tel:+1-718-555-0123">+1-718-555-0123</a></div>
        </div>
        <div className="grid gap-2">
          <Link href="/services">Services</Link>
          <Link href="/estimate">Estimate</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="text-black/60">
          © <span>{new Date().getFullYear()}</span> Custom Creations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
