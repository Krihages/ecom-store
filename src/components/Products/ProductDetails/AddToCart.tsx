"use client";

import { ProductProps } from "@/types/ProductProps";
import { useContext } from "react";
import { CartContext, CartProduct } from "../../Providers/CartProvider";

export default function AddToCart({ item }: { item: ProductProps }) {
  const context = useContext(CartContext);
  const setCart = context?.setCart;
  if (!setCart) return null;

  function addToCart() {
    setCart?.((prev: CartProduct[]) => {
      const cartItem = prev.find((cartItem) => cartItem.item.id === item.id);

      console.log(cartItem);

      let updatedItem = { item, quantity: 1 };
      if (cartItem) {
        updatedItem = { item, quantity: cartItem.quantity + 1 };
      }
      prev = prev.filter((cartItem) => cartItem.item.id !== item.id);
      localStorage.setItem("cart", JSON.stringify([...prev, updatedItem]));
      return [...prev, updatedItem];
    });
  }

  return (
    <button
      className="bg-blue-900 text-white text-sm font-thin px-6 py-2 rounded-md max-w-48 "
      onClick={addToCart}
    >
      Add to Cart
    </button>
  );
}
