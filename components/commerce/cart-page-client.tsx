"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "@/components/providers/store-provider";
import { calculateShipping, calculateSubtotal, calculateTax } from "@/lib/commerce";
import { formatCurrency } from "@/lib/utils";

import { QuantitySelector } from "@/components/commerce/quantity-selector";

export function CartPageClient() {
  const { state, removeFromCart, updateQuantity } = useStore();
  const subtotal = calculateSubtotal(state.cart);
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;

  if (state.cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[40px] bg-surface-low px-8 py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-ambient">
          <ShoppingBag className="h-10 w-10 text-primary/40" />
        </div>
        <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight">Your bag is empty</h2>
        <p className="mt-3 max-w-sm text-lg text-muted">
          Browse our latest collections and find pieces that speak to your style.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-headline font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          Explore collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
      <div className="space-y-6">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Shopping Bag ({state.cart.length})</h1>
        <div className="space-y-4">
          {state.cart.map((item) => (
            <div
              key={`${item.slug}-${item.size}`}
              className="group flex gap-6 rounded-[32px] bg-white p-5 shadow-ambient ring-1 ring-black/[0.03] transition-all hover:shadow-[0_20px_50px_rgba(48,51,48,0.1)]"
            >
              <div className="relative h-[160px] w-[130px] shrink-0 overflow-hidden rounded-[24px] bg-surface-low">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-xl font-bold tracking-tight text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      Size: <span className="text-ink">{item.size}</span>
                    </p>
                  </div>
                  <p className="font-headline text-xl font-bold text-primary">
                    {formatCurrency(item.price)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <QuantitySelector
                    value={item.quantity}
                    onIncrement={() => updateQuantity(item.slug, item.size, item.quantity + 1)}
                    onDecrement={() => updateQuantity(item.slug, item.size, item.quantity - 1)}
                  />
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => removeFromCart(item.slug, item.size)}
                      className="text-sm font-bold text-primary/80 transition-colors hover:text-primary"
                    >
                      Remove
                    </button>
                    <div className="h-1 w-1 rounded-full bg-outline/30" />
                    <button className="text-sm font-bold text-muted/70 transition-colors hover:text-ink">
                      Save for later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="relative">
        <div className="sticky top-28 space-y-6 rounded-[40px] bg-surface-low p-8 shadow-sm ring-1 ring-black/[0.02]">
          <h2 className="font-headline text-2xl font-bold tracking-tight text-ink">Summary</h2>
          <div className="space-y-4 text-sm font-medium">
            <div className="flex justify-between text-muted">
              <span>Subtotal</span>
              <span className="text-ink">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Shipping</span>
              <span className="text-ink">
                {shipping === 0 ? "Complimentary" : formatCurrency(shipping)}
              </span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Estimated tax</span>
              <span className="text-ink">{formatCurrency(tax)}</span>
            </div>
            <div className="my-2 h-px bg-outline/10" />
            <div className="flex justify-between font-headline text-2xl font-bold text-ink">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-5 shadow-sm">
            <p className="text-xs leading-relaxed text-muted">
              Secure checkout with SSL encryption. Free shipping on all orders over $150. Easy 30-day returns.
            </p>
          </div>

          <Link
            href="/checkout"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-headline text-lg font-bold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95"
          >
            Checkout now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-muted/50">
            LumiBelle Secure Payment
          </p>
        </div>
      </aside>
    </div>
  );
}
