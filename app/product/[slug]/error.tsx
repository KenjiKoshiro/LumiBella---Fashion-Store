"use client";

import { useEffect } from "react";

export default function ProductError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[LumiBelle] Product error:", error);
  }, [error]);

  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
      style={{ background: "#FFF5F7" }}
    >
      {/* Decorative hanger icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 100"
        className="mb-8 h-24 w-24 opacity-60"
        aria-hidden="true"
      >
        <path
          d="M60 18 C60 10 72 10 72 18 C72 24 66 28 60 32 L20 60 Q10 65 10 72 Q10 82 20 82 L100 82 Q110 82 110 72 Q110 65 100 60 Z"
          fill="none"
          stroke="#F4A6B8"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p
        className="mb-2 text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "#F4A6B8" }}
      >
        Item unavailable
      </p>
      <h1
        className="mb-4 font-headline text-4xl font-extrabold tracking-tight"
        style={{ color: "#5A4A4A" }}
      >
        This item stepped out
      </h1>
      <p
        className="mb-8 max-w-sm text-base leading-7"
        style={{ color: "#7A6A6A" }}
      >
        We couldn&apos;t load this product right now — it may be temporarily
        unavailable. Please try again or explore our other pieces.
      </p>

      <div className="flex gap-4">
        <button
          id="product-error-retry"
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
          href="/shop"
          className="rounded-full border px-8 py-3 text-sm font-semibold transition hover:scale-[1.03] active:scale-[0.98]"
          style={{ borderColor: "#F4A6B8", color: "#7A6A6A" }}
        >
          Browse shop
        </a>
      </div>
    </div>
  );
}
