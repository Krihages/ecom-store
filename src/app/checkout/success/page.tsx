"use client";

import { useClearCart } from "@/utils/hooks/useClearCart";
import Link from "next/link";

export default function Page() {
  useClearCart();

  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col gap-5 items-center text-lg">
      <h1 className="text-3xl font-semibold">Order successfull!</h1>
      <p>You will receive your items within 3-5 days</p>

      <p>Order id: 54325236</p>

      <Link
        href="/"
        className="bg-blue-700 text-white py-2 px-6 mt-4 rounded-lg text-base"
      >
        Shop more
      </Link>
    </section>
  );
}
