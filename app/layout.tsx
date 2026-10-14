import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StoreProvider } from "@/components/providers/store-provider";
import { ToastProvider } from "@/components/providers/toast-provider";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { CartDrawer } from "@/components/commerce/cart-drawer";
import { CurrencyProvider } from "@/components/providers/currency-provider";
import { isCatalogAvailable } from "@/lib/queries/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "LumiBelle",
  description: "Explore the LumiBelle fashion demo. Discover your style, save favourites, and try a simulated checkout."
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const catalogAvailable = await isCatalogAvailable();
  return (
    <html lang="en" >
      <body className="font-body antialiased">
        <CurrencyProvider>
        <a href="#main" className="sr-only focus:not-sr-only focus:block focus:p-4">Skip to content</a>
        <StoreProvider>
          <ToastProvider>
            <SiteHeader />
            {!catalogAvailable && <p role="status" className="mx-auto max-w-7xl px-4 py-3 text-center text-sm text-muted">The live catalog is unavailable. You can still explore our saved demo collection.</p>}
            <CartDrawer />
            <main id="main" className="mx-auto min-h-[70vh] max-w-7xl px-4 py-8 lg:px-8 font-body antialiased">{children}</main>
            <SiteFooter />
            <MobileBottomNav />
          </ToastProvider>
        </StoreProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
