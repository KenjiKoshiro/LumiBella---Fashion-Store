"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode
} from "react";
import { CartItem, WishlistItem } from "@/lib/types";

type StoreState = {
  cart: CartItem[];
  wishlist: WishlistItem[];
};

type StoreAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { slug: string; color: string; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { slug: string; color: string; size: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_WISHLIST"; payload: WishlistItem }
  | { type: "HYDRATE"; payload: StoreState };

const initialState: StoreState = {
  cart: [],
  wishlist: []
};

function reducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.cart.findIndex(
        (item) =>
          item.slug === action.payload.slug &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existingIndex >= 0) {
        const nextCart = [...state.cart];
        nextCart[existingIndex] = {
          ...nextCart[existingIndex],
          quantity: nextCart[existingIndex].quantity + action.payload.quantity
        };
        return { ...state, cart: nextCart };
      }

      return { ...state, cart: [...state.cart, action.payload] };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(
              item.slug === action.payload.slug &&
              item.color === action.payload.color &&
              item.size === action.payload.size
            )
        )
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.slug === action.payload.slug &&
          item.color === action.payload.color &&
          item.size === action.payload.size
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "TOGGLE_WISHLIST": {
      const exists = state.wishlist.some((item) => item.slug === action.payload.slug);
      return {
        ...state,
        wishlist: exists
          ? state.wishlist.filter((item) => item.slug !== action.payload.slug)
          : [...state.wishlist, action.payload]
      };
    }
    case "HYDRATE":
      return action.payload;
    default:
      return state;
  }
}

type StoreContextValue = {
  state: StoreState;
  cartCount: number;
  wishlistCount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string, color: string, size: string) => void;
  updateQuantity: (slug: string, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (item: WishlistItem) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const persisted = window.localStorage.getItem("lumibelle-store");
    if (persisted) {
      dispatch({ type: "HYDRATE", payload: JSON.parse(persisted) as StoreState });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lumibelle-store", JSON.stringify(state));
  }, [state]);

  const value = useMemo<StoreContextValue>(
    () => ({
      state,
      cartCount: state.cart.reduce((sum, item) => sum + item.quantity, 0),
      wishlistCount: state.wishlist.length,
      addToCart: (item) => dispatch({ type: "ADD_TO_CART", payload: item }),
      removeFromCart: (slug, color, size) =>
        dispatch({ type: "REMOVE_FROM_CART", payload: { slug, color, size } }),
      updateQuantity: (slug, color, size, quantity) =>
        dispatch({ type: "UPDATE_QUANTITY", payload: { slug, color, size, quantity } }),
      clearCart: () => dispatch({ type: "CLEAR_CART" }),
      toggleWishlist: (item) => dispatch({ type: "TOGGLE_WISHLIST", payload: item })
    }),
    [state]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
