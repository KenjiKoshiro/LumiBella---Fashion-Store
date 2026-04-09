"use client";

import { useEffect } from "react";

export default function ShopError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[LumiBelle] Shop error:", error);
  }, [error]);

  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
      style={{ background: "#FFF5F7" }}
    >
      {/* Decorative flower SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        className="mb-8 h-24 w-24 opacity-60"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="18" fill="#F8C8DC" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="60"
            cy="60"
            rx="10"
            ry="26"
            fill="#F4A6B8"
            opacity="0.7"
            transform={`rotate(${angle} 60 60) translate(0 -24)`}
          />
        ))}
      </svg>

      <p
        className="mb-2 text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "#F4A6B8" }}
      >
        Something went wrong
      </p>
      <h1
        className="mb-4 font-headline text-4xl font-extrabold tracking-tight"
        style={{ color: "#5A4A4A" }}
      >
        We&apos;ll be right back
      </h1>
      <p
        className="mb-8 max-w-sm text-base leading-7"
        style={{ color: "#7A6A6A" }}
      >
        The LumiBelle boutique is experiencing high traffic right now. Our team
        is on it — please refresh or try again in a moment.
      </p>

      <div className="flex gap-4">
        <button
          id="shop-error-retry"
          onClick={reset}
          className="rounded-full px-8 py-3 text-sm font-semibold transition hover:scale-[1.03] active:scale-[0.98]"
          style={{
            background: "#F8C8DC",
            color: "#5A4A4A",
            boxShadow: "0 4px 24px rgba(248,200,220,0.4)"
          }}
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-full border px-8 py-3 text-sm font-semibold transition hover:scale-[1.03] active:scale-[0.98]"
          style={{ borderColor: "#F4A6B8", color: "#7A6A6A" }}
        >
          Go home
        </a>
      </div>
    </div>
  );
}
