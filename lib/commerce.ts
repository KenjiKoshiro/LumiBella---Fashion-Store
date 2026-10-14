import { couponCatalog } from "@/lib/constants";
import { CartItem } from "@/lib/types";

export function calculateSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function calculateShipping(subtotal: number) {
  return 0; // Demo only: no delivery charge or shipment.
}

export function calculateTax(subtotal: number) {
  return 0; // Demo only: no tax is collected.
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
