"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Boxes,
  ShoppingCart,
  BarChart2,
  Settings,
  Bell,
  HelpCircle,
  Search,
  User,
  Heart,
  LogOut
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const adminNav = [
  { href: "/admin",           label: "Overview",  icon: LayoutDashboard, exact: true },
  { href: "/admin/inventory", label: "Inventory", icon: Boxes },
  { href: "/admin/orders",    label: "Orders",    icon: ShoppingCart },
  { href: "/admin/products",  label: "Analytics", icon: BarChart2 },
  { href: "/admin/settings",  label: "Settings",  icon: Settings }
];

// ── Palette (Soft Pink Theme) ───────────────────────────────────────────
const P = {
  bgMain:     "#FFF5F7",       // Main background (soft pink-white)
  bgSection:  "#F5E6E8",       // Section background
  bgCard:     "#FFFFFF",       // Cards background
  btnPrimary: "#F8C8DC",       // Primary button
  btnHover:   "#F4A6B8",       // Hover button
  textTitle:  "#5A4A4A",       // Title text
  textBody:   "#7A6A6A",       // Body text
  shadow:     "0 4px 24px rgba(248,200,220,0.3)", // Soft pink shadow
  border:     "rgba(244,166,184,0.15)",
  muted:      "#A89B9B",
  danger:     "#E4A1A1"
};

export function AdminShell({
  title,
  subtitle,
  description,
  children,
  actions
}: {
  title: ReactNode;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  const pathname = usePathname();
  const [adminName, setAdminName] = useState<string>("Loading...");
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    async function loadUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        setAdminName("Admin");
        return;
      }
      const name = data.user.user_metadata?.full_name || data.user.email || "Curator";
      setAdminName(name);
    }
    loadUser();
  }, [supabase.auth]);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <div className="flex min-h-screen" style={{ background: P.bgMain }}>

      {/* ── Sidebar ──────────────────────────────────────────────────── */}
      <aside
        className="fixed left-0 top-0 flex h-full w-[220px] flex-col z-30"
        style={{
          background: P.bgCard,
          borderRight: `1px solid ${P.border}`,
          boxShadow: P.shadow
        }}
      >
        {/* Logo */}
        <div className="px-6 pt-7 pb-5">
          <div className="flex items-center gap-2.5">
            <div
              className="h-7 w-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: P.btnPrimary }}
            >
              <Heart className="h-4 w-4" style={{ color: P.textTitle, fill: "white" }} />
            </div>
            <span
              className="font-headline text-lg font-extrabold tracking-tight"
              style={{ color: P.textTitle, letterSpacing: "0.03em" }}
            >
              LumiBelle
            </span>
          </div>
          <div className="mt-5 h-px w-full" style={{ background: P.border }} />
        </div>

        {/* Label */}
        <div className="px-6 mb-4">
          <p
            className="text-[9px] font-bold uppercase tracking-[0.3em]"
            style={{ color: P.muted }}
          >
            Admin Console
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-1">
          {adminNav.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group"
                style={isActive ? {
                  background: P.bgMain,
                  color: P.textTitle,
                  boxShadow: `inset 0 0 0 1px ${P.border}`
                } : {
                  color: P.textBody
                }}
              >
                {isActive && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 rounded-r-full"
                    style={{ background: P.btnPrimary }}
                  />
                )}
                <Icon
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: isActive ? P.btnHover : P.muted }}
                />
                <span
                  className="transition-colors group-hover:text-[#5A4A4A]"
                  style={isActive ? { color: P.textTitle, fontWeight: 700 } : {}}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ borderTop: `1px solid ${P.border}` }}
        >
          <div
            className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: P.bgSection, border: `1px solid ${P.border}` }}
          >
            <User className="h-4 w-4" style={{ color: P.textTitle }} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold truncate" style={{ color: P.textTitle }}>{adminName}</p>
            <p className="text-[10px] truncate" style={{ color: P.textBody }}>Curator</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-full p-2 hover:bg-[#F5E6E8] transition-colors"
            title="Log out"
          >
            <LogOut className="h-4 w-4 text-danger transition hover:scale-110" style={{ color: P.danger }} />
          </button>
        </div>
      </aside>

      {/* ── Main ─────────────────────────────────────────────────────── */}
      <div className="flex-1 ml-[220px] flex flex-col min-h-screen">

        {/* Top bar */}
        <header
          className="sticky top-0 z-20 flex items-center gap-4 px-8 py-3"
          style={{
            background: "rgba(255,245,247,0.85)",
            backdropFilter: "blur(12px)",
            borderBottom: `1px solid ${P.border}`
          }}
        >
          <div
            className="flex flex-1 items-center gap-2.5 rounded-full px-4 py-2 max-w-xs"
            style={{
              background: P.bgCard,
              border: `1px solid ${P.border}`,
              boxShadow: P.shadow
            }}
          >
            <Search className="h-3.5 w-3.5 flex-shrink-0" style={{ color: P.muted }} />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent text-xs outline-none"
              style={{ color: P.textBody }}
            />
          </div>

          <div className="flex items-center gap-2.5 ml-auto">
            <button
              className="relative rounded-full p-2 transition hover:bg-[#F5E6E8]"
              style={{ background: P.bgCard, border: `1px solid ${P.border}` }}
            >
              <Bell className="h-4 w-4" style={{ color: P.textTitle }} />
              <span
                className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white"
                style={{ background: P.btnHover }}
              />
            </button>
            <button
              className="rounded-full p-2 hover:bg-[#F5E6E8] transition"
              style={{ background: P.bgCard, border: `1px solid ${P.border}` }}
            >
              <HelpCircle className="h-4 w-4" style={{ color: P.textTitle }} />
            </button>
          </div>
        </header>

        {/* Page */}
        <main className="flex-1 px-10 py-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              {subtitle && (
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2"
                  style={{ color: P.btnHover }}
                >
                  {subtitle}
                </p>
              )}
              <h1
                className="font-headline text-[2.8rem] font-extrabold leading-tight tracking-tight shadow-sm"
                style={{ color: P.textTitle }}
              >
                {title}
              </h1>
              {description && (
                <p className="mt-1.5 text-sm max-w-lg" style={{ color: P.textBody }}>
                  {description}
                </p>
              )}
            </div>
            {actions && <div className="flex items-center gap-3 flex-shrink-0">{actions}</div>}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
