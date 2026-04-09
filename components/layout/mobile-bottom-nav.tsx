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
    <div className="fixed bottom-6 left-1/2 z-40 flex w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 items-center justify-around rounded-full border border-white/20 bg-white/70 px-4 py-2.5 shadow-ambient backdrop-blur-xl md:hidden">
      {[
        { href: "/", label: "Home", icon: Home },
        { href: "/shop", label: "Shop", icon: Search },
        { href: "/cart", label: "Cart", icon: ShoppingBag, count: cartCount },
        { href: "/account", label: "Account", icon: UserRound },
      ].map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative flex flex-col items-center gap-1 p-2 spring-transition ${
              isActive ? "text-primary scale-110" : "text-ink/60 hover:text-primary"
            }`}
          >
            <div className="relative">
              <item.icon className={`h-[20px] w-[20px] spring-transition ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
              {item.count ? (
                <span className="absolute -right-2 -top-1.5 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-blush text-[9px] font-bold text-primary shadow-sm">
                  {item.count}
                </span>
              ) : null}
            </div>
            <span className={`text-[10px] font-bold tracking-tight transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 scale-50"}`}>
              {item.label}
            </span>
            
            {/* Active Indicator Dot */}
            {isActive && (
              <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-primary animate-in fade-in zoom-in duration-500" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
