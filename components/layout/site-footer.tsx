import Link from "next/link";
import { brand } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-outline/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <h3 className="font-headline text-2xl font-extrabold text-primary">{brand.name}</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">{brand.description}</p>
          <div className="mt-6 inline-flex rounded-full bg-secondary/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Soft light. Strong style.
          </div>
        </div>
        <div>
          <h4 className="font-headline text-base font-bold">Shop</h4>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <Link className="block hover:text-primary" href="/shop">All products</Link>
            <Link className="block hover:text-primary" href="/new-arrivals">New arrivals</Link>
            <Link className="block hover:text-primary" href="/best-sellers">Best sellers</Link>
            <Link className="block hover:text-primary" href="/sale">Sale</Link>
          </div>
        </div>
        <div>
          <h4 className="font-headline text-base font-bold">Customer care</h4>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <Link className="block hover:text-primary" href="/contact">Contact</Link>
            <Link className="block hover:text-primary" href="/faq">FAQ</Link>
            <Link className="block hover:text-primary" href="/account/orders">Track orders</Link>
          </div>
        </div>
        <div>
          <h4 className="font-headline text-base font-bold">Brand</h4>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <Link className="block hover:text-primary" href="/about">About LumiBelle</Link>
            <Link className="block hover:text-primary" href="/register">Create account</Link>
            <Link className="block hover:text-primary" href="/login">Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
