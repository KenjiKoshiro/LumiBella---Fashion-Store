"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/components/providers/store-provider";
import { formatCurrency } from "@/lib/utils";
import { QuantitySelector } from "@/components/commerce/quantity-selector";
import { calculateSubtotal } from "@/lib/commerce";
import { useEffect } from "react";

export function CartDrawer() {
  const { state, setCartDrawerOpen, removeFromCart, updateQuantity } = useStore();
  const subtotal = calculateSubtotal(state.cart);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCartDrawerOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setCartDrawerOpen]);

  // Lock scroll when open
  useEffect(() => {
    if (state.isCartDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [state.isCartDrawerOpen]);

  return (
    <AnimatePresence>
      {state.isCartDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartDrawerOpen(false)}
            className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-outline/10 p-6">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <h2 className="font-headline text-xl font-bold text-ink">Your Bag</h2>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                    {state.cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="rounded-full p-2 hover:bg-surface-low transition-colors"
                >
                  <X className="h-5 w-5 text-muted" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                {state.cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-4 rounded-full bg-surface-low p-6">
                      <ShoppingBag className="h-10 w-10 text-muted/40" />
                    </div>
                    <h3 className="font-headline text-lg font-bold text-ink">Your bag is empty</h3>
                    <p className="mt-2 text-sm text-muted">Looks like you haven&apos;t added anything yet.</p>
                    <button
                      onClick={() => setCartDrawerOpen(false)}
                      className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-bold text-white shadow-md transition-all hover:bg-primary/90"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {state.cart.map((item) => (
                      <div key={`${item.slug}-${item.size}`} className="flex gap-4">
                        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl bg-surface-low">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex justify-between gap-2">
                            <div>
                              <h4 className="line-clamp-1 text-sm font-bold text-ink">{item.name}</h4>
                              <p className="text-xs text-muted">Size: {item.size}</p>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.slug, item.size)}
                              className="text-muted/40 hover:text-primary transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <QuantitySelector
                              value={item.quantity}
                              onIncrement={() => updateQuantity(item.slug, item.size, item.quantity + 1)}
                              onDecrement={() => updateQuantity(item.slug, item.size, item.quantity - 1)}
                              className="h-8 px-1"
                            />
                            <span className="text-sm font-bold text-ink">
                              {formatCurrency(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.cart.length > 0 && (
                <div className="border-t border-outline/10 bg-surface-low/30 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted">Subtotal</span>
                    <span className="font-headline text-xl font-bold text-ink">{formatCurrency(subtotal)}</span>
                  </div>
                  <p className="text-[10px] text-center uppercase tracking-widest text-muted/60">
                    Shipping & taxes calculated at checkout
                  </p>
                  <Link
                    href="/checkout"
                    onClick={() => setCartDrawerOpen(false)}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-headline text-lg font-bold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-[0.98]"
                  >
                    Checkout Securely
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
