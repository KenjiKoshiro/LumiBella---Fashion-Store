import type { CartItem } from "./types";

export const currencies = ["THB", "USD", "EUR", "GBP", "JPY", "SGD", "AUD"] as const;
export type Currency = typeof currencies[number];
export function isCurrency(value: unknown): value is Currency {
  return typeof value === "string" && currencies.some(code => code === value);
}

export function parseRates(data: unknown): { rates: Partial<Record<Currency, number>>; date: string } {
  if (!Array.isArray(data) || !data.length) throw new Error("Rates unavailable");
  const rates: Partial<Record<Currency, number>> = { THB: 1 };
  const dates: string[] = [];
  for (const row of data) {
    if (row?.base === "THB" && isCurrency(row.quote) && row.quote !== "THB" &&
        typeof row.rate === "number" && Number.isFinite(row.rate) && row.rate > 0 &&
        /^\d{4}-\d{2}-\d{2}$/.test(row.date)) {
      rates[row.quote as Currency] = row.rate;
      dates.push(row.date);
    }
  }
  if (!dates.length) throw new Error("Rates unavailable");
  return { rates, date: dates.sort()[0] };
}

export function displayPrice(amount: number, currency: Currency, rates: Partial<Record<Currency, number>>) {
  const rate = rates[currency];
  const available = typeof rate === "number" && Number.isFinite(rate) && rate > 0;
  return new Intl.NumberFormat("en", { style: "currency", currency: available ? currency : "THB", currencyDisplay: "code" })
    .format(amount * (available ? rate : 1));
}

export function validCart(value: unknown): value is CartItem[] {
  return Array.isArray(value) && value.length <= 100 && value.every(item =>
    item && ["productId", "slug", "name", "image", "size"].every(key => typeof item[key] === "string") &&
    typeof item.price === "number" && Number.isFinite(item.price) && item.price >= 0 &&
    Number.isInteger(item.quantity) && item.quantity >= 1 && item.quantity <= 99);
}

export type DemoReceipt = { demo: true; id: string; createdAt: string; items: CartItem[]; totalTHB: number };
export function makeDemoReceipt(items: CartItem[], id: string, createdAt: string): DemoReceipt {
  if (!validCart(items) || !items.length) throw new Error("Add valid items to your bag first.");
  const totalTHB = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!Number.isFinite(totalTHB)) throw new Error("Invalid demo total.");
  return { demo: true, id: `DEMO-${id}`, createdAt, items: items.map(item => ({ ...item })), totalTHB };
}

export function readDemoReceipt(raw: string | null): DemoReceipt | null {
  try {
    const value = JSON.parse(raw ?? "null");
    if (value?.demo !== true || typeof value.id !== "string" || !value.id.startsWith("DEMO-") ||
      typeof value.createdAt !== "string" || !Number.isFinite(Date.parse(value.createdAt)) ||
      !validCart(value.items) || !value.items.length) return null;
    const expected = makeDemoReceipt(value.items, value.id.slice(5), value.createdAt);
    return value.totalTHB === expected.totalTHB ? expected : null;
  } catch { return null; }
}
