"use client";

import { useState } from "react";

import { Input } from "@/components/shared/input";

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
    <form onSubmit={submit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="Your name" name="name" placeholder="John Doe" required />
        <Input label="Email address" name="email" type="email" placeholder="john@example.com" required />
      </div>
      <Input label="Subject" name="topic" placeholder="How can we help?" required />
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-muted/80">Message</label>
        <textarea 
          name="message" 
          className="min-h-[160px] w-full rounded-2xl bg-surface-low px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/20" 
          placeholder="Write your message here..."
          required 
        />
      </div>
      <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-headline text-lg font-bold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95">
        Send Message
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
      {message ? (
        <p className="rounded-2xl bg-primary/10 p-4 text-sm font-bold text-primary animate-in fade-in slide-in-from-top-2">
          {message}
        </p>
      ) : null}
    </form>
  );
}
