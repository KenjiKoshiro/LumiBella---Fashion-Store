"use client";

import { useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        topic: form.get("topic"),
        message: form.get("message")
      })
    });

    const data = (await response.json()) as { message: string };
    setMessage(data.message);
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {["name", "email", "topic"].map((field) => (
        <label key={field} className="block text-sm">
          <span className="mb-2 block capitalize text-muted">{field}</span>
          <input name={field} className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" required />
        </label>
      ))}
      <label className="block text-sm">
        <span className="mb-2 block text-muted">Message</span>
        <textarea name="message" className="min-h-[140px] w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" required />
      </label>
      <button className="rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white">Send message</button>
      {message ? <p className="text-sm text-primary">{message}</p> : null}
    </form>
  );
}
