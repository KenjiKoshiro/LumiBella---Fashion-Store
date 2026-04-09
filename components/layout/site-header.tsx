"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Search, ShoppingBag, UserRound, Menu, X } from "lucide-react";
import { brand, navigation } from "@/lib/constants";
import { useStore } from "@/components/providers/store-provider";
import { useState, useEffect } from "react";

export function SiteHeader() {
  const { cartCount, wishlistCount } = useStore();
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userMetadata, setUserMetadata] = useState<any>(null);
  const supabase = createSupabaseBrowserClient();

  // Subtle blur and shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Load user metadata for the login indicator
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserMetadata(data?.user?.user_metadata || null);
    };

    fetchUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserMetadata(session?.user?.user_metadata || null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-primary/5 bg-white/80 shadow-ambient backdrop-blur-xl py-2"
            : "border-b border-transparent bg-background py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
          
          {/* Mobile Menu Toggle */}
          <button
            className="p-2 lg:hidden text-ink/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="font-headline text-[1.6rem] font-black tracking-tight text-primary transition-transform duration-300 hover:scale-105"
            >
              {brand.name}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative px-4 py-2 font-headline text-[13px] font-bold tracking-wide transition-colors duration-300"
                  >
                    <span className={`relative z-10 ${isActive ? "text-primary" : "text-ink/75 group-hover:text-primary"}`}>
                      {item.label}
                    </span>
                    {/* Animated Pill Active/Hover State */}
                    <span
                      className={`absolute inset-0 -z-10 rounded-full transition-all duration-300 ease-out ${
                        isActive
                          ? "scale-100 bg-primary/10 opacity-100"
                          : "scale-90 bg-primary/5 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Search Bar (Hidden on Mobile, Animated Focus) */}
          <form action="/search" className="hidden lg:flex flex-1 max-w-[340px] ml-auto mr-4">
            <div className="group relative flex w-full items-center rounded-full border border-primary/10 bg-white/50 px-4 py-2.5 transition-all duration-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 focus-within:shadow-sm">
              <Search className="mr-2 h-4 w-4 text-muted transition-colors group-focus-within:text-primary" />
              <input
                name="q"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pieces..."
                className="w-full bg-transparent text-[13px] font-medium outline-none placeholder:text-muted/70"
              />
            </div>
          </form>

          {/* Icons Context */}
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              href="/wishlist"
              className="group relative rounded-full p-2.5 transition-all duration-300 hover:bg-primary/5"
            >
              <Heart className="h-[22px] w-[22px] text-ink/80 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
              {wishlistCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#fec2cb] text-[10px] font-bold text-[#80525a] shadow-[0_2px_4px_rgba(254,194,203,0.4)] animate-in zoom-in">
                  {wishlistCount}
                </span>
              )}
            </Link>
            
            <Link
              href="/account"
              className="hidden md:flex group relative rounded-full h-10 w-10 items-center justify-center transition-all duration-300 hover:bg-primary/5"
            >
              {userMetadata?.avatar_url ? (
                <div className="relative h-[28px] w-[28px] overflow-hidden rounded-full ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary/20">
                  <img src={userMetadata.avatar_url} alt="Profile" className="h-full w-full object-cover" />
                </div>
              ) : userMetadata?.full_name || userMetadata?.email ? (
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary transition-all duration-300 group-hover:bg-primary/20">
                  {(userMetadata.full_name || userMetadata.email || "U")[0].toUpperCase()}
                </div>
              ) : (
                <UserRound className="h-[22px] w-[22px] text-ink/80 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
              )}
            </Link>

            <Link
              href="/cart"
              className="group relative rounded-full p-2.5 transition-all duration-300 hover:bg-primary/5"
            >
              <ShoppingBag className="h-[22px] w-[22px] text-ink/80 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#fec2cb] text-[10px] font-bold text-[#80525a] shadow-[0_2px_4px_rgba(254,194,203,0.4)] animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* ── Slide/Fade Mobile Menu ───────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop Fade */}
        <div
          className={`absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Panel Slide */}
        <div
          className={`absolute left-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-primary/5">
            <span className="font-headline text-xl font-bold text-primary">{brand.name}</span>
            <button
              className="rounded-full p-2 bg-primary/5 text-primary transition-transform duration-300 hover:scale-110 hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="px-6 py-5 pb-2">
            <form action="/search" className="relative flex w-full items-center rounded-2xl bg-white px-4 py-3 shadow-sm border border-primary/5">
              <Search className="mr-3 h-4 w-4 text-muted" />
              <input
                name="q"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pieces..."
                className="w-full bg-transparent text-sm font-medium outline-none"
              />
            </form>
          </div>

          {/* Mobile Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            {navigation.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-4 rounded-2xl text-base font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-primary/5 text-primary translate-x-2"
                      : "text-ink/80 hover:bg-primary/5 hover:text-primary hover:translate-x-2"
                  }`}
                  style={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                    transitionDelay: `${isMobileMenuOpen ? i * 40 + 100 : 0}ms`
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Footer Links */}
          <div className="border-t border-primary/5 p-6 bg-white space-y-4">
            <Link
              href="/account"
              className="flex items-center gap-3 text-sm font-bold text-ink/70 hover:text-primary transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-primary/5">
                {userMetadata?.avatar_url ? (
                  <img src={userMetadata.avatar_url} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <UserRound className="h-4 w-4 text-primary" />
                )}
              </div>
              {userMetadata?.full_name || "My Account"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
