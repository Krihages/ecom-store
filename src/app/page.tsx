import ProductSection from "@/components/Products/ProductSection";
import { ProductProps } from "@/types/ProductProps";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductSection />
      </Suspense>
    </>
  );
}
