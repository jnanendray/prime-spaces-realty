"use client";

import { useState } from "react";
import Container from "./Container";

export default function EnquiryForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "done" | "error"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900";

  return (
    <section id="contact" className="bg-white py-16">
      <Container className="max-w-xl">
        <h2 className="text-3xl font-bold text-slate-900">Talk to an advisor</h2>
        <p className="mt-2 text-slate-600">
          Tell us what you are looking for and we will get back within one
          working day.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="block text-sm font-medium text-slate-800">
            Name
            <input name="name" required className={field} />
          </label>
          <label className="block text-sm font-medium text-slate-800">
            Phone
            <input name="phone" type="tel" required className={field} />
          </label>
          <label className="block text-sm font-medium text-slate-800">
            I am interested in
            <select name="interest" className={field} defaultValue="buy">
              <option value="buy">Buying a home</option>
              <option value="sell">Selling a property</option>
              <option value="rent">Renting</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-slate-800">
            Message
            <textarea name="message" rows={3} className={field} />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send enquiry"}
          </button>
          {status === "done" && (
            <p className="text-sm text-green-700">
              Thanks! An advisor will contact you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
