"use client";

import Link from "next/link";
import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const supabase = createSupabaseBrowserClient();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (mode === "login") {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) {
        setMessage(error.message);
        return;
      }

      if (data.user) {
        const { data: adminUser } = await supabase
          .from("admin_users")
          .select("user_id")
          .eq("user_id", data.user.id)
          .maybeSingle();

        // Redirect based on role
        if (adminUser) {
          window.location.href = "/admin";
        } else {
          window.location.href = "/account";
        }
      }
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    });

    setMessage(error ? error.message : "Account created. Check your email for confirmation.");
  }

  return (
    <div className="mx-auto max-w-md rounded-[36px] bg-surface-card p-8 shadow-ambient">
      <p className="font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">{mode === "login" ? "Welcome back" : "Create account"}</p>
      <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight">{mode === "login" ? "Login" : "Register"}</h1>
      <p className="mt-3 text-muted">Supabase Auth handles email/password authentication, protected routes, and account state.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {mode === "register" ? (
          <label className="block text-sm">
            <span className="mb-2 block text-muted">Full name</span>
            <input value={fullName} onChange={(event) => setFullName(event.target.value)} className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" required />
          </label>
        ) : null}
        <label className="block text-sm">
          <span className="mb-2 block text-muted">Email</span>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" required />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-muted">Password</span>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" required />
        </label>
        <button className="w-full rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white">{mode === "login" ? "Login" : "Create account"}</button>
      </form>

      <div className="mt-5 flex items-center justify-between text-sm">
        <Link href={mode === "login" ? "/register" : "/login"} className="font-semibold text-primary">{mode === "login" ? "Need an account?" : "Already have an account?"}</Link>
        <button className="font-semibold text-muted">Forgot password</button>
      </div>

      {message ? <p className="mt-4 text-sm text-primary">{message}</p> : null}
    </div>
  );
}
