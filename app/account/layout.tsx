"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const accountNav = [
  { href: "/account", label: "Dashboard" },
  { href: "/account/profile", label: "Profile" },
  { href: "/account/orders", label: "Orders" },
  { href: "/wishlist", label: "Wishlist" }
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12" style={{ background: "#FFF5F7", minHeight: "calc(100vh - 80px)" }}>
      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside
          className="rounded-[32px] p-8"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 4px 24px rgba(248,200,220,0.3)"
          }}
        >
          <p className="font-headline text-2xl font-extrabold" style={{ color: "#5A4A4A" }}>
            My account
          </p>
          <div className="mt-8 space-y-2">
            {accountNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-5 py-3.5 font-bold transition-all"
                  style={isActive ? {
                    background: "#F8C8DC",
                    color: "#FFFFFF",
                    boxShadow: "0 2px 10px rgba(248,200,220,0.4)"
                  } : {
                    background: "transparent",
                    color: "#7A6A6A"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#F5E6E8";
                      e.currentTarget.style.color = "#5A4A4A";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#7A6A6A";
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
