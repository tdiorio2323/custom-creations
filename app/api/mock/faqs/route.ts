export async function GET() {
  const items = [
    { q: "Do you work with insurance?", a: "Yes, we assist with claims, estimates, and adjuster coordination." },
    { q: "How long does a repair take?", a: "Minor repairs 1–3 days. Collision 3–10+ based on parts." },
    { q: "How long should ceramic cure?", a: "Keep dry 24h. No harsh washes for 7 days." },
    { q: "What PPF areas are most popular?", a: "Full front: bumper, hood, fenders, mirrors, rockers." },
    { q: "Do you offer warranties?", a: "Yes. Written warranty provided at delivery." },
    { q: "What do I bring for an estimate?", a: "Registration, insurance info, and photos if available." },
    { q: "Do you match OEM paint?", a: "Yes. We use computerized paint matching." },
    { q: "Do you have loaner cars?", a: "Ask us. We can help arrange rentals when needed." }
  ];
  return Response.json({ items });
}
