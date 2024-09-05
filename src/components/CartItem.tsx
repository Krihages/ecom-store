"use client";

import { CartProduct, CartContext } from "./Providers/CartProvider";
import Image from "next/image";
import StarRating from "./StarRating";
import { useContext } from "react";

import Link from "next/link";

export default function CartItem({ item }: { item: CartProduct }) {
  const cartItem = item.item;
  const quantity = item.quantity;

  return (
    <div className="flex flex-col gap-2">
      <Link
        href={`/product/${cartItem.id}`}
        className="flex items-center gap-4"
      >
        {/* <img src={item.image.url} alt={item.image.alt} /> */}
        <div className=" relative aspect-square w-20">
          <Image
            src={cartItem.image.url}
            alt={cartItem.image.alt || "Product img"}
            fill
            className="object-cover rounded"
          />
        </div>

        <div>
          <p className="font-medium">{cartItem.title}</p>
          {cartItem.rating ? (
            <StarRating rating={cartItem.rating} size={14} />
          ) : (
            <p className="text-sm text-gray-600">No ratings yet</p>
          )}
          <div>
            {quantity > 1 && (
              <p className="text-sm text-slate-600">
                {cartItem.discountedPrice} NOK
              </p>
            )}
            <p className="text-sm font-medium">
              {(quantity * cartItem.discountedPrice).toFixed(2)} NOK
            </p>
          </div>
        </div>
      </Link>

      <QuantityButtons item={item} />
    </div>
  );
}

function QuantityButtons({ item }: { item: CartProduct }) {
  const { setCart } = useContext(CartContext) || {};

  function changeQuantity(type: "add" | "subtract") {
    setCart &&
      setCart((prev: CartProduct[]) => {
        if (item.quantity === 1 && type === "subtract") {
          const updatedItems = prev.filter(
            (cartItem) => cartItem.item.id !== item.item.id
          );
          localStorage.setItem("cart", JSON.stringify(updatedItems));
          return updatedItems;
        }
        const updatedItems = prev.map((cartItem) => {
          if (cartItem.item.id === item.item.id) {
            const updatedItem = {
              item: cartItem.item,
              quantity:
                type === "add" ? cartItem.quantity + 1 : cartItem.quantity - 1,
            };

            localStorage.setItem("cart", JSON.stringify(updatedItem));

            return updatedItem;
          }
          return cartItem;
        });
        localStorage.setItem("cart", JSON.stringify(updatedItems));
        return updatedItems;
      });
  }

  return (
    <div className="flex gap-3 items-center ">
      <button
        onClick={() => changeQuantity("subtract")}
        className="bg-white w-6 h-6 flex justify-center items-center rounded-full shadow-md border border-stone-300"
      >
        -
      </button>
      <p>{item.quantity}</p>
      <button
        onClick={() => changeQuantity("add")}
        className="bg-white w-6 h-6 flex justify-center items-center rounded-full shadow-md border border-stone-300 "
      >
        +
      </button>
    </div>
  );
}
