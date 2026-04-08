import { faqs } from "@/lib/constants";

export default function FAQPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[36px] bg-white p-8 shadow-ambient">
        <p className="font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">FAQ</p>
        <h1 className="mt-3 font-headline text-5xl font-extrabold tracking-tight">Questions shoppers usually ask</h1>
        <p className="mt-4 max-w-3xl text-muted">
          This page now reflects the refreshed storefront structure, Supabase catalog strategy, and the included product image audit results.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[28px] bg-white p-6 shadow-ambient">
            <h2 className="font-headline text-xl font-bold">{faq.question}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
