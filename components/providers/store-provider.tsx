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
  isCartDrawerOpen: boolean;
};

type StoreAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { slug: string; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { slug: string; size: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_WISHLIST"; payload: WishlistItem }
  | { type: "SET_CART_DRAWER"; payload: boolean }
  | { type: "HYDRATE"; payload: StoreState };

const initialState: StoreState = {
  cart: [],
  wishlist: [],
  isCartDrawerOpen: false
};

function reducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.cart.findIndex(
        (item) =>
          item.slug === action.payload.slug &&
          item.size === action.payload.size
      );

      if (existingIndex >= 0) {
        const nextCart = [...state.cart];
        nextCart[existingIndex] = {
          ...nextCart[existingIndex],
          quantity: nextCart[existingIndex].quantity + action.payload.quantity
        };
        return { ...state, cart: nextCart, isCartDrawerOpen: true };
      }

      return { ...state, cart: [...state.cart, action.payload], isCartDrawerOpen: true };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(
              item.slug === action.payload.slug &&
              item.size === action.payload.size
            )
        )
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.slug === action.payload.slug &&
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
    case "SET_CART_DRAWER":
      return { ...state, isCartDrawerOpen: action.payload };
    case "HYDRATE":
      return { ...state, ...action.payload, isCartDrawerOpen: false };
    default:
      return state;
  }
}

type StoreContextValue = {
  state: StoreState;
  cartCount: number;
  wishlistCount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string, size: string) => void;
  updateQuantity: (slug: string, size: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (item: WishlistItem) => void;
  setCartDrawerOpen: (open: boolean) => void;
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
      removeFromCart: (slug, size) =>
        dispatch({ type: "REMOVE_FROM_CART", payload: { slug, size } }),
      updateQuantity: (slug, size, quantity) =>
        dispatch({ type: "UPDATE_QUANTITY", payload: { slug, size, quantity } }),
      clearCart: () => dispatch({ type: "CLEAR_CART" }),
      toggleWishlist: (item) => dispatch({ type: "TOGGLE_WISHLIST", payload: item }),
      setCartDrawerOpen: (open) => dispatch({ type: "SET_CART_DRAWER", payload: open })
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
