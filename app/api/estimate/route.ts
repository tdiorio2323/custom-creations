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
