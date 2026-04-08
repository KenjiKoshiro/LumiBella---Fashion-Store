import { ContactForm } from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="rounded-[36px] bg-white p-8 shadow-ambient">
        <p className="font-headline text-xs font-semibold uppercase tracking-[0.3em] text-primary">We're here to help</p>
        <h1 className="mt-3 font-headline text-5xl font-extrabold tracking-tight">Contact LumiBelle</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Use this form for order questions, product inquiries, collaboration requests, or anything else. The included API route already returns a friendly success message and can be connected to your real support workflow later.
        </p>
        <div className="mt-8"><ContactForm /></div>
      </div>
      <div className="space-y-6">
        <div className="rounded-[36px] bg-surface-low p-6">
          <h2 className="font-headline text-2xl font-bold">Support</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            hello@lumibelle.com
            <br />
            +1 (555) 014-8899
          </p>
        </div>
        <div className="rounded-[36px] bg-surface-low p-6">
          <h2 className="font-headline text-2xl font-bold">Response time</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Most messages receive a reply within one business day. Render-based background jobs are still available for future notifications, email, or support routing.
          </p>
        </div>
        <div className="rounded-[36px] bg-surface-low p-6">
          <h2 className="font-headline text-2xl font-bold">Need product help?</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Check the FAQ or visit a product page to use the fit recommendation module before placing your order.
          </p>
        </div>
      </div>
    </div>
  );
}
