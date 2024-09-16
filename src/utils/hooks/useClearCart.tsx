"use client";

import { useContext, useEffect } from "react";
import { CartContext } from "../../components/Providers/CartProvider";

export function useClearCart() {
  const { setCart } = useContext(CartContext) || {};

  useEffect(() => {
    clearCart();
    setCart && setCart([]);
  }, [setCart]);

  const clearCart = () => {
    localStorage.removeItem("cart");
  };

  return { clearCart };
}
