"use client";

import { useState } from "react";
import { Product, SizeRecommendationResult, FitPreference } from "@/lib/types";

type Props = {
  product: Product;
};

const defaultForm = {
  height: "",
  weight: "",
  age: "",
  fitPreference: "regular" as FitPreference
};

export function SizeRecommendationPanel({ product }: Props) {
  const [form, setForm] = useState(defaultForm);
  const [result, setResult] = useState<SizeRecommendationResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleRecommend() {
    setLoading(true);
    try {
      const response = await fetch("/api/size-recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug: product.slug, ...form })
      });

      const data = (await response.json()) as { result: SizeRecommendationResult };
      setResult(data.result);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-[28px] bg-surface-low p-6">
      <div className="mb-5">
        <p className="font-headline text-sm font-semibold uppercase tracking-[0.3em] text-primary">Smart fit helper</p>
        <h3 className="mt-2 font-headline text-2xl font-bold tracking-tight">Find your best size</h3>
        <p className="mt-3 text-sm leading-6 text-muted">
          Enter height and weight for a realistic recommendation based on the product&apos;s stored size chart.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          <span className="mb-2 block text-muted">Height (cm)</span>
          <input
            type="number"
            value={form.height}
            onChange={(event) => setForm((current) => ({ ...current, height: event.target.value }))}
            className="w-full rounded-2xl bg-white px-4 py-3 outline-none ring-1 ring-outline/15 focus:ring-primary/25"
            placeholder="165"
          />
        </label>
        <label className="text-sm">
          <span className="mb-2 block text-muted">Weight (kg)</span>
          <input
            type="number"
            value={form.weight}
            onChange={(event) => setForm((current) => ({ ...current, weight: event.target.value }))}
            className="w-full rounded-2xl bg-white px-4 py-3 outline-none ring-1 ring-outline/15 focus:ring-primary/25"
            placeholder="52"
          />
        </label>
        <label className="text-sm">
          <span className="mb-2 block text-muted">Age (optional)</span>
          <input
            type="number"
            value={form.age}
            onChange={(event) => setForm((current) => ({ ...current, age: event.target.value }))}
            className="w-full rounded-2xl bg-white px-4 py-3 outline-none ring-1 ring-outline/15 focus:ring-primary/25"
            placeholder="18"
          />
        </label>
        <label className="text-sm">
          <span className="mb-2 block text-muted">Fit preference</span>
          <select
            value={form.fitPreference}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                fitPreference: event.target.value as FitPreference
              }))
            }
            className="w-full rounded-2xl bg-white px-4 py-3 outline-none ring-1 ring-outline/15 focus:ring-primary/25"
          >
            <option value="slim">Slim fit</option>
            <option value="regular">Regular fit</option>
            <option value="oversized">Oversized fit</option>
          </select>
        </label>
      </div>

      <button
        onClick={handleRecommend}
        disabled={!form.height || !form.weight || loading}
        className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Checking..." : "Recommend my size"}
      </button>

      {result ? (
        <div className="mt-5 rounded-[24px] bg-white p-5 shadow-ambient">
          <p className="font-headline text-xl font-bold text-primary">{result.message}</p>
          <p className="mt-2 text-sm text-ink">{result.fitNote}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-ink">Confidence: {result.confidence}</span>
            <span className="rounded-full bg-tertiary px-3 py-1 font-semibold text-ink">
              {result.matchedExactly ? "Exact chart match" : "Closest chart match"}
            </span>
          </div>
        </div>
      ) : null}
    </section>
  );
}
