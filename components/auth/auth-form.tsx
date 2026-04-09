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

  const handleGoogleLogin = async () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback`
      }
    });
  };

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
      <p className="mt-3 text-muted">Use your email or continue with a social account for a faster experience.</p>

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
        <button className="w-full rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white transition hover:bg-primary/90">{mode === "login" ? "Login" : "Create account"}</button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-outline/10"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-surface-card px-3 text-muted">Or continue with</span>
        </div>
      </div>

      <button 
        onClick={handleGoogleLogin}
        className="flex w-full items-center justify-center gap-3 rounded-full border border-primary/20 bg-white px-5 py-3 font-headline font-semibold text-ink shadow-sm transition hover:bg-surface-low"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Google
      </button>

      <div className="mt-8 flex items-center justify-between text-sm">
        <Link href={mode === "login" ? "/register" : "/login"} className="font-semibold text-primary">{mode === "login" ? "Need an account?" : "Already have an account?"}</Link>
        <button className="font-semibold text-muted">Forgot password</button>
      </div>

      {message ? <p className="mt-4 text-sm text-primary">{message}</p> : null}
    </div>
  );
}
