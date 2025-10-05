"use client";

import { useState } from "react";
import AlertBanner from "./alert-banner";
import { SITE } from "@/src/config/site";

export default function EstimateMini() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          message: `${formData.get("year")} ${formData.get("make")} ${formData.get("model")} — ${formData.get("notes") || ""}`,
          consent: true,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 8000);
    }
  }

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold">Start Your Estimate</h2>
      <p className="text-sm text-black/70 mt-1">Share your vehicle details—we&apos;ll text you within the hour.</p>
      {status === "success" ? (
        <div className="mt-4">
          <AlertBanner kind="success">Thanks! A Custom Creations advisor will follow up shortly.</AlertBanner>
        </div>
      ) : null}
      {status === "error" ? (
        <div className="mt-4">
          <AlertBanner kind="error">We couldn&apos;t send that. Please retry or call {SITE.PHONE}.</AlertBanner>
        </div>
      ) : null}
      <form className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-6" onSubmit={handleSubmit}>
        <input className="input sm:col-span-1" name="year" placeholder="Year" autoComplete="off" />
        <input className="input sm:col-span-1" name="make" placeholder="Make" autoComplete="off" />
        <input className="input sm:col-span-1" name="model" placeholder="Model" autoComplete="off" />
        <input className="input sm:col-span-1" name="name" placeholder="Your name" required autoComplete="name" />
        <input className="input sm:col-span-1" name="phone" placeholder="Phone" required autoComplete="tel" />
        <input className="input sm:col-span-2 md:col-span-2" name="notes" placeholder="Damage or service notes" />
        <button className="btn sm:col-span-2 md:col-span-1" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Submit"}
        </button>
      </form>
    </div>
  );
}
