import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StoreProvider } from "@/components/providers/store-provider";
import { ToastProvider } from "@/components/providers/toast-provider";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { CartDrawer } from "@/components/commerce/cart-drawer";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "LumiBelle",
  description: "Premium-accessible fashion storefront built with Next.js, Supabase, and Render."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <StoreProvider>
          <ToastProvider>
            <SiteHeader />
            <CartDrawer />
            <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-8 lg:px-8 font-body antialiased">{children}</main>
            <SiteFooter />
            <MobileBottomNav />
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
