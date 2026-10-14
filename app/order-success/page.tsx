"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { readDemoReceipt, type DemoReceipt } from "@/lib/demo";
import { usePrice } from "@/components/providers/currency-provider";
export default function OrderSuccessPage() {
  const [receipt, setReceipt] = useState<DemoReceipt | null>(null);
  const [loaded, setLoaded] = useState(false);
  const price = usePrice();
  useEffect(() => {
    try { setReceipt(readDemoReceipt(sessionStorage.getItem("lumibelle-demo-receipt"))); } catch { /* Storage unavailable */ }
    setLoaded(true);
  }, []);
  return <section className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center md:p-12">
    <p className="text-sm uppercase tracking-widest text-primary">LumiBelle demo</p>
    <h1 className="mt-4 font-headline text-4xl">{!loaded ? "Loading demo receipt…" : receipt ? "Your demo is complete" : "No demo receipt found"}</h1>
    <p className="mt-5 leading-7">No payment was taken. No real order, email, or shipment was created.</p>
    {receipt && <div className="mt-6 rounded-2xl bg-surface-low p-5"><p className="break-all text-xs">{receipt.id}</p><p className="mt-3 text-2xl">{price(receipt.totalTHB)}</p><p className="mt-2 text-sm">This sample receipt is stored only in this browser session.</p></div>}
    <Link href="/shop" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-white">Continue exploring</Link>
  </section>;
}
