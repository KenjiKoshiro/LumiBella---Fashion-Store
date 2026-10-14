"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/components/providers/store-provider";
import { usePrice } from "@/components/providers/currency-provider";
import { makeDemoReceipt } from "@/lib/demo";

export function CheckoutPageClient() {
  const { state, clearCart } = useStore();
  const price = usePrice();
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  if (!state.cart.length) return <div className="rounded-3xl bg-white p-8"><h2 className="text-2xl">Your demo bag is empty</h2><Link href="/shop" className="mt-4 inline-block underline">Explore the collection</Link></div>;
  function complete() {
    if (busy) return;
    setBusy(true);
    try {
      const receipt = makeDemoReceipt(state.cart, crypto.randomUUID(), new Date().toISOString());
      sessionStorage.setItem("lumibelle-demo-receipt", JSON.stringify(receipt));
      clearCart();
      router.push("/order-success");
    } catch {
      setError("We couldn't save the demo receipt in this browser. Your bag has been kept. Allow session storage and try again.");
      setBusy(false);
    }
  }
  return <section className="mx-auto max-w-3xl rounded-3xl bg-white p-6 md:p-10">
    <h2 className="font-headline text-3xl">Review your demo bag</h2>
    <p className="mt-3 leading-7 text-muted">This is a simulation. No payment, address, account, or personal details are required. Nothing will be shipped.</p>
    <ul className="my-6 divide-y divide-outline/40">{state.cart.map(item => <li key={item.slug + item.size} className="flex justify-between gap-4 py-4">
      <span>{item.name}<span className="block text-sm text-muted">{item.size} · Quantity {item.quantity}</span></span><span>{price(item.price * item.quantity)}</span>
    </li>)}</ul>
    <p className="flex justify-between gap-4 text-xl font-bold"><span>Demo total</span><span>{price(state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0))}</span></p>
    <p className="mt-2 text-sm text-muted">THB base prices. Other currencies are estimates. No tax or shipping is charged.</p>
    <button disabled={busy} onClick={complete} className="mt-8 min-h-12 w-full rounded-full bg-primary px-6 py-4 font-semibold text-white disabled:opacity-50">{busy ? "Saving demo…" : "Complete demo checkout"}</button>
    {error && <p role="alert" className="mt-4 text-primary">{error}</p>}
  </section>;
}
