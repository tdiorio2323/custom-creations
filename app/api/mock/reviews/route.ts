export async function GET() {
  const data = [
    { name: "Michael R.", rating: 5, text: "Flawless repair and perfect paint match.", vehicle: "2021 BMW 330i" },
    { name: "Alyssa S.", rating: 5, text: "Ceramic coating looks insane. Water beads for days.", vehicle: "2022 Kia Telluride" },
    { name: "James T.", rating: 5, text: "PPF saved my bumper the first week. Clean install.", vehicle: "2020 Tesla Model 3" },
    { name: "Nina V.", rating: 4, text: "Quick insurance process and solid communication.", vehicle: "2018 Honda Accord" },
    { name: "Robert L.", rating: 5, text: "Paint correction + coating = mirror finish.", vehicle: "2016 Porsche Cayman" }
  ];
  return Response.json({ items: data });
}
