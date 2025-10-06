export const metadata = { title: "Insurance Claims" };
export default function Insurance() {
  return (
    <article className="prose max-w-none">
      <h1>Insurance Claims Help</h1>
      <p>
        Navigating insurance shouldn&apos;t slow repairs. Our team handles the paperwork while you stay informed each step.
      </p>
      <ol>
        <li>Document the damage — upload photos to the estimate form or text them to our estimator.</li>
        <li>Drop the vehicle for blueprinting; we capture photos and write the formal insurance estimate.</li>
        <li>We submit supplements and negotiate with the adjuster while parts are ordered.</li>
        <li>Repairs begin once approvals land; you receive status updates on structural, refinish, and detailing milestones.</li>
        <li>Pickup day includes a walk-through, warranty briefing, and optional detailing add-ons.</li>
      </ol>
      <p>
        Download the <a href="/pdfs/claim-checklist.pdf" rel="noopener" className="text-blue-500 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
          Claim Checklist
        </a>
      </p>
    </article>
  );
}
