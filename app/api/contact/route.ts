import { ContactSchema } from "@/lib/validators";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = await req.json();
  const data = ContactSchema.parse(body);
  await sendMail({
    to: process.env.CONTACT_TO || "info@creationcustomsllc.com",
    subject: "New Contact",
    text: JSON.stringify(data, null, 2),
    replyTo: data.email
  });
  return Response.json({ ok: true });
}
