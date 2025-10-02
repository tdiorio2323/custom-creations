export async function GET() {
  const base = "/images/stock/";
  const items = ["repair.svg", "ceramic.svg", "ppf.svg", "hero.svg", "repair.svg", "ceramic.svg", "ppf.svg", "hero.svg"].map((file, index) => ({
    src: base + file,
    alt: `Gallery ${index + 1}`
  }));
  return Response.json({ items });
}
