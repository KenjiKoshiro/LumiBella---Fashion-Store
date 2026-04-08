export const brand = {
  name: "LumiBelle",
  tagline: "Soft light. Strong style.",
  description:
    "LumiBelle is a modern, conversion-focused fashion storefront for girls and young women. The experience blends editorial softness with a quick, mobile-first shopping flow."
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/new-arrivals", label: "New In" },
  { href: "/category/dresses", label: "Dresses" },
  { href: "/category/accessories", label: "Accessories" },
  { href: "/sale", label: "Sale" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" }
];

export const valueProps = [
  {
    title: "Verified catalog",
    description: "The starter now distinguishes between working image links and broken ones so every product still renders beautifully."
  },
  {
    title: "Fit confidence",
    description: "Every product page includes a height and weight size recommendation to help shoppers choose the right fit faster."
  },
  {
    title: "Mobile-first polish",
    description: "Large tap targets, sticky navigation, rounded cards, and clean spacing keep the storefront feeling premium on smaller screens."
  }
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
  {
    question: "How many uploaded product image URLs were usable?",
    answer:
      "The included audit found 42 total image URLs, with 14 accessible and 28 broken or non-image responses. Broken images now fall back to polished local placeholders."
  },
  {
    question: "Does the catalog work with Supabase?",
    answer:
      "Yes. The storefront tries the richer LumiBelle Supabase schema first, then a legacy simple products table, and finally a local fallback demo dataset if the database is empty."
  },
  {
    question: "How does size recommendation work?",
    answer:
      "Customers can enter height, weight, optional age, and fit preference. The logic compares those inputs to stored size chart ranges and returns the best match or nearest alternative."
  },
  {
    question: "Can I still extend admin and checkout later?",
    answer:
      "Yes. The project keeps admin, account, checkout, and worker folders in place, but removes brittle dependencies on incomplete mock types."
  }
];

export const couponCatalog = {
  LUMI10: { type: "percent", value: 10 },
  WELCOME15: { type: "percent", value: 15 },
  FREESHIP: { type: "shipping", value: 100 }
} as const;
