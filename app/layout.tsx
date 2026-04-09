import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StoreProvider } from "@/components/providers/store-provider";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "LumiBelle",
  description: "Premium-accessible fashion storefront built with Next.js, Supabase, and Render."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <SiteHeader />
          <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-8 lg:px-8">{children}</main>
          <SiteFooter />
          <MobileBottomNav />
        </StoreProvider>
      </body>
    </html>
  );
}
