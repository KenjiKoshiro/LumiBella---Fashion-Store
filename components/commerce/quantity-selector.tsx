"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  className?: string;
};

export function QuantitySelector({
  value,
  onIncrement,
  onDecrement,
  min = 1,
  max = 99,
  className
}: Props) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center gap-1 rounded-full bg-surface-low p-1 shadow-sm",
        className
      )}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          if (value > min) onDecrement();
        }}
        disabled={value <= min}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink transition-all hover:bg-white hover:text-primary hover:shadow-sm disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      
      <span className="w-8 text-center text-sm font-bold text-ink">
        {value}
      </span>
      
      <button
        onClick={(e) => {
          e.preventDefault();
          if (value < max) onIncrement();
        }}
        disabled={value >= max}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink transition-all hover:bg-white hover:text-primary hover:shadow-sm disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
