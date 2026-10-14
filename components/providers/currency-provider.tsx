"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { currencies, displayPrice, isCurrency, type Currency } from "@/lib/demo";

const CurrencyContext = createContext<(amount: number) => string>(amount => displayPrice(amount, "THB", { THB: 1 }));
export const usePrice = () => useContext(CurrencyContext);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("THB");
  const [rates, setRates] = useState<Partial<Record<Currency, number>>>({ THB: 1 });
  const [status, setStatus] = useState("Loading exchange rates…");
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch("/api/currencies", { signal: controller.signal });
        if (!response.ok) throw new Error();
        const data = await response.json();
        setRates(data.rates);
        setStatus(`Estimates · rates ${data.date}`);
        try {
          const saved = localStorage.getItem("lumibelle-currency");
          if (isCurrency(saved) && data.rates[saved]) setCurrency(saved);
        } catch { /* Storage is optional. */ }
      } catch {
        if (!controller.signal.aborted) setStatus("Conversion unavailable · THB prices");
      }
    }
    void load();
    return () => controller.abort();
  }, []);
  return <CurrencyContext.Provider value={amount => displayPrice(amount, currency, rates)}>
    <MotionConfig reducedMotion="user">
      <div className="border-b border-outline/40 bg-white px-4 py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm">
          <p><strong>Demo boutique</strong> · No real payments or deliveries</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-muted" role="status">{status}</span>
            <label className="flex items-center gap-2">Currency
              <select className="min-h-11 rounded-lg border border-outline bg-white px-2" value={currency} onChange={event => {
                const code = event.target.value;
                if (!isCurrency(code)) return;
                setCurrency(code);
                try { localStorage.setItem("lumibelle-currency", code); } catch { /* Optional */ }
              }}>
                {currencies.map(code => <option key={code} disabled={!rates[code]}>{code}</option>)}
              </select>
            </label>
          </div>
        </div>
      </div>
      {children}
    </MotionConfig>
  </CurrencyContext.Provider>;
}
