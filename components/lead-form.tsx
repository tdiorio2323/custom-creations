"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/lib/validators";
import { z } from "zod";

type Form = z.infer<typeof ContactSchema>;

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Form>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { consent: true }
  });

  async function onSubmit(data: Form) {
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    if (res.ok) reset();
    alert(res.ok ? "Thanks — we'll reach out shortly." : "Error. Try again.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <label className="label">Name</label>
        <input className="input" {...register("name")} />
        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="label">Phone</label>
          <input className="input" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="label">Email (optional)</label>
          <input className="input" {...register("email")} />
        </div>
      </div>
      <div>
        <label className="label">Message</label>
        <textarea className="input min-h-28" {...register("message")} />
        {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("consent")} />
        <span className="text-xs text-black/70">You agree to be contacted.</span>
      </div>
      <button className="btn" disabled={isSubmitting} type="submit">{isSubmitting ? "Sending..." : "Send"}</button>
    </form>
  );
}
