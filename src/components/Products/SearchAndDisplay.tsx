"use client";

import { ProductProps } from "@/types/ProductProps";
import { useState } from "react";
import Thumbnail from "@/components/Products/Thumbnail";

export default function SearchAndDisplay({
  products,
}: {
  products: ProductProps[];
}) {
  const [searchProducts, setSearchProducts] =
    useState<ProductProps[]>(products);

  function handleSearch(e: any) {
    if (e.target.value.length === 0) {
      setSearchProducts(products);
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchProducts(filteredProducts);
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="py-14 flex flex-col items-center gap-2">
        <label htmlFor="search">Search products</label>
        <input
          onChange={handleSearch}
          id="search"
          type="text"
          className="py-2 px-4 rounded-lg shadow-sm   border border-gray-400  "
        />
      </div>
      <DisplayThumbnails products={searchProducts} />
    </div>
  );
}

function DisplayThumbnails({ products }: { products: ProductProps[] }) {
  return (
    <div className="flex flex-wrap  justify-center gap-4 lg:gap-8  ">
      {products?.length ? (
        products.map((product) => (
          <Thumbnail key={product.id} product={product} />
        ))
      ) : (
        <div className="mx-auto">
          There are no products matching your search criteria..
        </div>
      )}
    </div>
  );
}
