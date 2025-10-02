import { Resend } from "resend";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendMail(params: { to: string; subject: string; text?: string; html?: string; reply_to?: string }) {
  if (!resend) return { skipped: true };
  await resend.emails.send({
    from: "Custom Creations <no-reply@customcreationssi.com>",
    to: [params.to],
    subject: params.subject,
    text: params.text,
    html: params.html,
    reply_to: params.reply_to,
  });
  return { ok: true };
}
