export const brand = {
  name: "LumiBelle",
  tagline: "Soft light. Strong style.",
  description:
    "A fashion demo from Thailand. Explore considered pieces, everyday layers, and your own sense of style."
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/new-arrivals", label: "New In" },
  { href: "/category/dresses", label: "Dresses" },
  { href: "/category/accessories", label: "Accessories" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" }
];

export const valueProps = [
  { title: "Find your style", description: "Browse the collection and explore colours, silhouettes, and outfit ideas." },
  { title: "Fit inspiration", description: "Try the size helper as an illustration. Measurements and recommendations are not a fit guarantee." },
  { title: "A demo to explore", description: "Save favourites and try checkout without payments or deliveries." }
];

export const testimonials = [
  {
    name: "Ariya, 19",
    quote: "The storefront feels clean and premium, and the product page made sizing feel much less risky."
  },
  {
    name: "Mina, 24",
    quote: "I love how the site keeps the shopping flow simple without looking plain."
  },
  {
    name: "Sara, 28",
    quote: "The polished visuals and fast checkout flow feel like a real brand, not a generic template."
  }
];

export const faqs = [
  { question: "Can I buy these pieces?", answer: "LumiBelle is a demo. You can browse products and simulate checkout, but no purchase or delivery takes place." },
  { question: "Why can I change currency?", answer: "Catalog prices use THB. Other currencies are estimates from dated exchange rates. If rates are unavailable, prices stay in THB." },
  { question: "Where are my favourites saved?", answer: "Your bag and wishlist are saved in this browser when storage is available. Demo receipts last for the browser session." },
  { question: "Does the contact form send an email?", answer: "No. It is a local demonstration. Use fictional information; nothing is emailed or stored." }
];

export const couponCatalog = {
  LUMI10: { type: "percent", value: 10 },
  WELCOME15: { type: "percent", value: 15 },
  FREESHIP: { type: "shipping", value: 100 }
} as const;
