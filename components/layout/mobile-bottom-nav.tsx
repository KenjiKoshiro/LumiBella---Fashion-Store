"use client";

import Link from "next/link";
import { Home, Search, ShoppingBag, UserRound } from "lucide-react";
import { useStore } from "@/components/providers/store-provider";

import { usePathname } from "next/navigation";

export function MobileBottomNav() {
  const { cartCount, setCartDrawerOpen } = useStore();
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  const items = [
    { href: "/", label: "Home", icon: Home },
    { href: "/shop", label: "Shop", icon: Search },
    { id: "cart", label: "Cart", icon: ShoppingBag, count: cartCount, onClick: () => setCartDrawerOpen(true) },
    { href: "/account", label: "Account", icon: UserRound },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 z-40 flex w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 items-center justify-around rounded-full border border-white/20 bg-white/70 px-4 py-2.5 shadow-ambient backdrop-blur-xl md:hidden">
      {items.map((item) => {
        const isActive = "href" in item && pathname === item.href;
        const commonClasses = `group relative flex flex-col items-center gap-1 p-2 spring-transition ${
          isActive ? "text-primary scale-110" : "text-ink/60 hover:text-primary"
        }`;
        
        const content = (
          <>
            <div className="relative">
              <item.icon className={`h-[20px] w-[20px] spring-transition ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
              {"count" in item && item.count ? (
                <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white shadow-sm">
                  {item.count}
                </span>
              ) : null}
            </div>
            <span className={`text-[10px] font-bold tracking-tight transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 scale-50"}`}>
              {item.label}
            </span>
            {isActive && (
              <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-primary animate-in fade-in zoom-in duration-500" />
            )}
          </>
        );

        if ("onClick" in item) {
          return (
            <button key={item.id} onClick={item.onClick} className={commonClasses}>
              {content}
            </button>
          );
        }

        return (
          <Link key={item.href} href={item.href} className={commonClasses}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
