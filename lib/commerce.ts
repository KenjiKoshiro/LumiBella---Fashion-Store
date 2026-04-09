import { couponCatalog } from "@/lib/constants";
import { CartItem } from "@/lib/types";

export function calculateSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function calculateShipping(subtotal: number) {
  if (subtotal >= 1500) return 0;
  if (subtotal === 0) return 0;
  return 100;
}

export function calculateTax(subtotal: number) {
  return subtotal * 0.08;
}

export function applyCoupon(code: string, subtotal: number, shipping: number) {
  const coupon = couponCatalog[code.toUpperCase() as keyof typeof couponCatalog];
  if (!coupon) {
    return { valid: false, discount: 0, shippingDiscount: 0, message: "Invalid code." };
  }

  if (coupon.type === "percent") {
    const discount = subtotal * (coupon.value / 100);
    return {
      valid: true,
      discount,
      shippingDiscount: 0,
      message: `${coupon.value}% discount applied.`
    };
  }

  return {
    valid: true,
    discount: 0,
    shippingDiscount: shipping,
    message: "Free shipping applied."
  };
}
