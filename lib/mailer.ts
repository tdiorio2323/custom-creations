import { Resend } from "resend";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendMail(params: { to: string; subject: string; text?: string; html?: string; replyTo?: string }) {
  if (!resend) return { skipped: true };

  const emailOptions: any = {
    from: "Custom Creations <no-reply@customcreationssi.com>",
    to: [params.to],
    subject: params.subject,
  };

  if (params.text) emailOptions.text = params.text;
  if (params.html) emailOptions.html = params.html;
  if (params.replyTo) emailOptions.replyTo = params.replyTo;

  await resend.emails.send(emailOptions);
  return { ok: true };
}
