"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBag } from "lucide-react";
import { useStore } from "@/components/providers/store-provider";

export function SiteHeader() {
  const { cartCount, wishlistCount } = useStore();
  const pathname = usePathname();
  const links = [{ href: "/shop", label: "All pieces" }, { href: "/new-arrivals", label: "New arrivals" }, { href: "/category/dresses", label: "Dresses" }, { href: "/contact", label: "Contact" }];
  if (pathname.startsWith("/admin")) return null;
  return <header className="relative z-40 border-b border-outline/40 bg-background">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 lg:px-8">
      <Link href="/" className="font-headline text-3xl font-bold tracking-tight text-primary">LumiBelle<span className="ml-1 text-lg">.</span></Link>
      <nav aria-label="Main navigation" className="hidden gap-6 text-sm font-medium md:flex">
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/wishlist" aria-label={`Wishlist, ${wishlistCount} items`} className="flex min-h-11 min-w-11 items-center justify-center gap-1"><Heart size={20} /><span className="text-xs">{wishlistCount}</span></Link>
        <Link href="/cart" aria-label={`Bag, ${cartCount} items`} className="flex min-h-11 min-w-11 items-center justify-center gap-1"><ShoppingBag size={20} /><span className="text-xs">{cartCount}</span></Link>
      </div>
      <form action="/search" role="search" className="flex w-full gap-2 md:max-w-xs">
        <label htmlFor="catalog-search" className="sr-only">Search the catalog</label>
        <input id="catalog-search" name="q" maxLength={100} placeholder="Find your next favourite…" className="min-w-0 flex-1 rounded-full border border-outline bg-white px-4 py-3 text-sm" />
        <button className="rounded-full bg-ink px-4 text-sm text-white">Search</button>
      </form>
      <nav aria-label="Mobile navigation" className="flex w-full flex-wrap gap-x-5 gap-y-2 text-sm md:hidden">
        {links.map(link => <Link className="py-2" key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
      </nav>
    </div>
  </header>;
}
