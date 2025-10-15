import { EstimateSchema } from "@/lib/validators";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = await req.json();
  const data = EstimateSchema.parse(body);

  // Server-side lead tracking
  console.log("💰 Estimate Lead", {
    timestamp: new Date().toISOString(),
    name: data.name,
    phone: data.phone,
    email: data.email || null,
    service: data.service,
    vehicle: data.make ? `${data.year} ${data.make} ${data.model}` : "Not provided",
  });

  await sendMail({
    to: process.env.CONTACT_TO || "info@creationcustomsllc.com",
    subject: "New Estimate Request",
    text: JSON.stringify(data, null, 2),
    replyTo: data.email
  });

  return Response.json({ ok: true });
}
