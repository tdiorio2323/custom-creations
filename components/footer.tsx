import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10">
      <div className="container py-8 text-sm grid md:grid-cols-3 gap-6 text-white/80">
        <div>
          <div className="font-semibold text-white">Custom Creations</div>
          <div>75 Thompson St, Staten Island, NY 10304</div>
          <div><a href="tel:+1-718-555-0123" className="hover:text-white transition">+1-718-555-0123</a></div>
        </div>
        <div className="grid gap-2">
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/estimate" className="hover:text-white transition">Estimate</Link>
          <Link href="/booking" className="hover:text-white transition">Booking</Link>
          <Link href="/faq" className="hover:text-white transition">FAQ</Link>
        </div>
        <div className="text-white/60">
          © <span>{new Date().getFullYear()}</span> Custom Creations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
