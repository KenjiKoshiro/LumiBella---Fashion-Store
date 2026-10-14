"use client";
import { useState } from "react";
import { Input } from "@/components/shared/input";
export function ContactForm() {
  const [message, setMessage] = useState("");
  return <form className="space-y-6" onSubmit={event => { event.preventDefault(); setMessage("Demo complete. Your message was not sent or saved."); }}>
    <p className="text-sm text-muted">Try the form with fictional details. It stays in your browser and sends no email.</p>
    <Input label="Sample name" name="name" placeholder="Demo visitor" required maxLength={100} />
    <Input label="Sample email" name="email" type="email" placeholder="demo@example.com" required maxLength={254} />
    <label className="block">Sample message<textarea name="message" required maxLength={2000} className="mt-2 block min-h-32 w-full rounded-2xl border border-outline bg-white p-4" /></label>
    <button className="rounded-full bg-primary px-6 py-3 font-semibold text-white">Try demo form</button>
    {message && <p role="status" className="rounded-2xl bg-surface-low p-4">{message}</p>}
  </form>;
}
