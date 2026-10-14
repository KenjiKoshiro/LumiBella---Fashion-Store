"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useStore } from "@/components/providers/store-provider";
import { usePrice } from "@/components/providers/currency-provider";
import { QuantitySelector } from "@/components/commerce/quantity-selector";

export function CartDrawer() {
  const { state, setCartDrawerOpen, removeFromCart, updateQuantity } = useStore();
  const price = usePrice();
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (state.isCartDrawerOpen && !element?.open) element?.showModal();
    if (!state.isCartDrawerOpen && element?.open) element.close();
  }, [state.isCartDrawerOpen]);
  return <dialog ref={dialog} aria-labelledby="bag-title" onCancel={() => setCartDrawerOpen(false)} onClose={() => setCartDrawerOpen(false)} className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-md overflow-y-auto bg-white p-6 text-ink shadow-xl backdrop:bg-ink/40">
    <div className="flex items-center justify-between gap-4"><h2 id="bag-title" className="font-headline text-3xl">Your demo bag</h2><button autoFocus className="min-h-11 rounded-full border border-outline px-4" onClick={() => setCartDrawerOpen(false)}>Close</button></div>
    <p className="mt-3 text-sm text-muted">No payment or delivery. Try the shopping experience.</p>
    {!state.cart.length && <p className="my-10">Your bag is empty.</p>}
    <ul className="divide-y divide-outline/40">{state.cart.map(item => <li key={item.slug + item.size} className="space-y-3 py-6"><Link href={`/product/${item.slug}`} onClick={() => setCartDrawerOpen(false)} className="font-semibold">{item.name}</Link><p className="text-sm">{item.size} · {price(item.price * item.quantity)}</p><div className="flex items-center justify-between gap-3"><QuantitySelector value={item.quantity} onIncrement={() => updateQuantity(item.slug, item.size, item.quantity + 1)} onDecrement={() => updateQuantity(item.slug, item.size, item.quantity - 1)} /><button className="min-h-11 underline" aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.slug, item.size)}>Remove</button></div></li>)}</ul>
    {state.cart.length > 0 && <><p className="my-5 flex justify-between font-bold"><span>Subtotal</span><span>{price(state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0))}</span></p><Link href="/checkout" onClick={() => setCartDrawerOpen(false)} className="block rounded-full bg-primary p-4 text-center font-semibold text-white">Try demo checkout</Link></>}
  </dialog>;
}
