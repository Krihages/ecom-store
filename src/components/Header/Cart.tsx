"use client";

import { useContext, useState } from "react";
import CartIcon from "../Icons/Cart";
import { CartContext, CartProduct } from "../Providers/CartProvider";
import Dropdown from "../Dropdown";
import Link from "next/link";
import CartItem from "../CartItem";

type MenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items?: CartProduct[];
};

export default function Cart() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(e: React.MouseEvent<HTMLDivElement>) {
    if (isOpen === true) return null;
    setIsOpen(true);
  }

  return (
    <div onMouseDown={handleOpen}>
      <div className="relative cursor-pointer">
        <CartIcon />
        {cart?.length > 0 && (
          <>
            <NumberOfItems numberOfItems={cart.length} />
            <MenuOpen isOpen={isOpen} setIsOpen={setIsOpen} items={cart} />
          </>
        )}
      </div>
    </div>
  );
}

function NumberOfItems({ numberOfItems }: { numberOfItems: number }) {
  if (numberOfItems === 0) return null;
  return (
    <div className="absolute top-3 -right-3 bg-orange-400 w-5 h-5 flex justify-center items-center rounded-full text-xs">
      {numberOfItems}
    </div>
  );
}

function MenuOpen({ isOpen, setIsOpen, items }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        className="bg-white border border-gray-300 shadow-md p-5 max-h-96 overflow-y-auto
         rounded-b-md"
      >
        <div className="flex flex-col gap-4 py-4">
          {items?.map((item) => (
            <CartItem item={item} key={item.item.id} />
          ))}
          <TotalPrice items={items} />
          <Link href="/checkout">
            <button className="bg-blue-900 text-white w-full py-2 rounded-md">
              Go to checkout
            </button>
          </Link>
        </div>
      </div>
    </Dropdown>
  );
}

function TotalPrice({ items }: { items: CartProduct[] | undefined }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="text-center">
      <p>Total</p>
      <p className="font-semibold">
        {items
          .reduce(
            (acc, cur) => acc + cur.quantity * cur.item.discountedPrice,
            0
          )
          .toFixed(2)}{" "}
        NOK
      </p>
    </div>
  );
}
