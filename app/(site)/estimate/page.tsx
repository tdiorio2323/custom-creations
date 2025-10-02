"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EstimateSchema } from "@/lib/validators";
import { z } from "zod";

type Form = z.infer<typeof EstimateSchema>;

export default function EstimatePage() {
  const { register, handleSubmit, formState:{errors, isSubmitting}, reset } = useForm<Form>({
    resolver: zodResolver(EstimateSchema), defaultValues: { consent: true, service: "repair" as any }
  });

  async function onSubmit(data: Form) {
    const res = await fetch("/api/estimate",{ method:"POST", body: JSON.stringify(data) });
    if (res.ok) reset();
    alert(res.ok ? "Estimate submitted. We will contact you." : "Error. Try again.");
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div><label className="label">Year</label><input className="input" {...register("year")} /></div>
          <div><label className="label">Make</label><input className="input" {...register("make")} /></div>
          <div><label className="label">Model</label><input className="input" {...register("model")} /></div>
        </div>
        <div>
          <label className="label">Service</label>
          <select className="input" {...register("service")}>
            <option value="repair">Auto Body Repair</option>
            <option value="ceramic">Ceramic Coating</option>
            <option value="ppf">PPF</option>
          </select>
        </div>
        <div><label className="label">Panels / Notes</label><input className="input" {...register("panels")} /></div>
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="label">Name</label><input className="input" {...register("name")} /></div>
          <div><label className="label">Phone</label><input className="input" {...register("phone")} /></div>
        </div>
        <div><label className="label">Email</label><input className="input" {...register("email")} /></div>
        <div><label className="label">Message</label><textarea className="input min-h-28" {...register("message")} /></div>
        <div className="flex items-center gap-2"><input type="checkbox" {...register("consent")} /><span className="text-xs">You agree to be contacted.</span></div>
        <button className="btn" disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting..." : "Submit Estimate"}</button>
      </form>
      <aside className="card p-6">
        <h3 className="font-semibold">Fast Turnaround</h3>
        <p className="text-sm text-black/70 mt-2">Attach photos via text or email after submission. We&apos;ll confirm parts and timelines.</p>
      </aside>
    </div>
  );
}
