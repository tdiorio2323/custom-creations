export const metadata = { title: "About" };

export default function About() {
  return (
    <article className="prose max-w-none">
      <h1>About Custom Creations</h1>

      <section className="space-y-4">
        <h2>Our Story</h2>
        <p>
          Custom Creations was founded in 2015 with a simple mission: deliver precision auto body repair and premium
          protective coatings with uncompromising attention to detail. What started as a small collision shop on Thompson
          Street has grown into Staten Island&apos;s trusted destination for collision repair, ceramic coating, and paint
          protection film.
        </p>
        <p>
          Our team brings over 40 years of combined experience in automotive refinishing, frame straightening, and
          protective film installation. We&apos;ve worked on everything from daily commuters to exotic supercars, treating
          every vehicle with the same level of care and craftsmanship.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2>Credentials & Certifications</h2>
        <ul>
          <li><strong>I-CAR Gold Class Certified</strong> – Ongoing training in collision repair standards</li>
          <li><strong>PPG Certified Refinish Center</strong> – Factory-approved paint systems and techniques</li>
          <li><strong>XPEL Authorized Installer</strong> – Premier paint protection film application</li>
          <li><strong>IGL Coatings Certified</strong> – Professional ceramic coating expertise</li>
          <li><strong>Insurance Direct Repair Program (DRP)</strong> – Partnered with major carriers</li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2>Meet the Team</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-4">
            <h3 className="text-lg font-semibold text-black">Tony Russo – Owner & Master Technician</h3>
            <p className="text-sm text-black/70 mt-2">
              With over 20 years in auto body repair, Tony leads our collision and refinish department. His eye for
              color matching and structural repair has earned him a reputation across Staten Island for perfection.
            </p>
          </div>
          <div className="card p-4">
            <h3 className="text-lg font-semibold text-black">Mike Chen – Paint & Coating Specialist</h3>
            <p className="text-sm text-black/70 mt-2">
              Mike specializes in ceramic coatings and paint correction. Trained by IGL and Gtechniq, he ensures every
              coating job delivers maximum gloss, protection, and longevity.
            </p>
          </div>
          <div className="card p-4">
            <h3 className="text-lg font-semibold text-black">Jessica Torres – PPF Lead Installer</h3>
            <p className="text-sm text-black/70 mt-2">
              Jessica is our PPF expert, certified by XPEL and 3M. Her precision installations ensure every film edge is
              seamless and every curve is perfectly wrapped—no lifting, no bubbles.
            </p>
          </div>
          <div className="card p-4">
            <h3 className="text-lg font-semibold text-black">Danny O&apos;Brien – Estimator & Customer Liaison</h3>
            <p className="text-sm text-black/70 mt-2">
              Danny handles estimates, insurance claims, and customer communication. He&apos;s your point of contact throughout
              the repair process, keeping you informed and making sure everything stays on track.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 mt-8">
        <h2>Why Choose Custom Creations?</h2>
        <ul>
          <li>Lifetime warranty on collision repairs and workmanship</li>
          <li>OEM and aftermarket parts sourcing to fit your budget</li>
          <li>Insurance claim handling from estimate to final payment</li>
          <li>Loaner and rental car coordination</li>
          <li>State-of-the-art spray booth and frame equipment</li>
          <li>Premium ceramic coatings and self-healing PPF films</li>
          <li>Free estimates—no appointment needed</li>
        </ul>
      </section>

      <section className="space-y-4 mt-8">
        <h2>Community Commitment</h2>
        <p>
          We&apos;re proud to support Staten Island through sponsorships, local events, and charitable partnerships. From youth
          sports teams to community drives, Custom Creations believes in giving back to the neighborhoods that trust us
          with their vehicles.
        </p>
      </section>
    </article>
  );
}
