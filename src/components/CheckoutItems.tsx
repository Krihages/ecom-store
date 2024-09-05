"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import Link from "next/link";
import totalPrice from "@/utils/helpers/totalPrice";
import { CartContext } from "./Providers/CartProvider";

export default function CheckoutItems() {
  const { cart } = useContext(CartContext) || { cart: [] };

  if (typeof window !== "undefined" && cart.length === 0) {
    window.location.href = "/";
    return null;
  }

  return (
    <section className="flex flex-col max-w-80">
      <h1 className="text-2xl font-semibold pb-6">Your items</h1>
      <div className="flex flex-col gap-6">
        {cart.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </div>
      <div className="text-xl text-center py-6 ">
        <p>Total</p>
        <p className="font-semibold">{totalPrice(cart)} NOK</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full ">
        <Link
          href="/"
          className="border border-black py-2 px-6 rounded-md w-full text-center"
        >
          Shop more
        </Link>
        <Link
          href="/checkout/success"
          className="text-white bg-blue-700 py-2 px-6 rounded-md w-full text-center"
        >
          Pay now
        </Link>
      </div>
    </section>
  );
}
