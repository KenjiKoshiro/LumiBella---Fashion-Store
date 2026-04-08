"use client";

import Link from "next/link";
import { Home, Search, ShoppingBag, UserRound } from "lucide-react";
import { useStore } from "@/components/providers/store-provider";

import { usePathname } from "next/navigation";

export function MobileBottomNav() {
  const { cartCount } = useStore();
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center justify-between rounded-full border border-outline/15 bg-background/90 px-6 py-3 shadow-ambient md:hidden">
      <Link href="/" className="flex flex-col items-center gap-1 text-xs text-primary">
        <Home className="h-4 w-4" />
        Home
      </Link>
      <Link href="/shop" className="flex flex-col items-center gap-1 text-xs text-primary">
        <Search className="h-4 w-4" />
        Shop
      </Link>
      <Link href="/cart" className="relative flex flex-col items-center gap-1 text-xs text-primary">
        <ShoppingBag className="h-4 w-4" />
        Cart
        {cartCount > 0 && (
          <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
            {cartCount}
          </span>
        )}
      </Link>
      <Link href="/account" className="flex flex-col items-center gap-1 text-xs text-primary">
        <UserRound className="h-4 w-4" />
        Account
      </Link>
    </div>
  );
}
