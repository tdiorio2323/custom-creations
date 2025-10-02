"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/lib/validators";
import { z } from "zod";
import { useState } from "react";
import AlertBanner from "@/components/alert-banner";

type Form = z.infer<typeof ContactSchema>;

export default function LeadForm() {
  const [result, setResult] = useState<{ status: "idle" | "success" | "error"; message?: string }>({ status: "idle" });
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Form>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { consent: true }
  });

  async function onSubmit(data: Form) {
    setResult({ status: "idle" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Request failed");
      reset();
      setResult({ status: "success", message: "Thanks — we'll reach out shortly." });
    } catch (error) {
      setResult({ status: "error", message: "Something went wrong. Please try again or call us." });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {result.status !== "idle" && result.message ? (
        <AlertBanner kind={result.status === "success" ? "success" : "error"}>{result.message}</AlertBanner>
      ) : null}
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
      <button className="btn" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
