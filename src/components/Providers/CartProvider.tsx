"use client";

import { ProductProps } from "@/types/ProductProps";
import { useState, useEffect, createContext, ReactNode } from "react";

type CartContextType = {
  cart: CartProduct[];
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
};

export type CartProduct = {
  item: ProductProps;
  quantity: number;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>([]);
  console.log(cart);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (items) {
      setCart(JSON.parse(items));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
