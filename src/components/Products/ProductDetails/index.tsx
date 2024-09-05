import { ProductProps } from "@/types/ProductProps";
import Image from "next/image";
import AddToCart from "./AddToCart";
import ProductImg from "./ProductImg";
import StarRating from "@/components/StarRating";

export default function Product({ product }: { product: ProductProps }) {
  const priceDif = product.price - product.discountedPrice;

  return (
    <div className="max-w-5xl mx-auto  ">
      <div className="flex flex-col lg:flex-row  items-center lg:items-start justify-between w-full gap-20 ">
        <ProductImg {...product.image} discountPrice={priceDif} />
        <ProductDetails product={product} />
      </div>
    </div>
  );
}

function ProductDetails({ product }: { product: ProductProps }) {
  return (
    <div className="w-full flex flex-col gap-6 text-lg max-w-lg">
      <div>
        <h1 className="text-3xl font-semibold py-1">{product.title}</h1>
        <a href="#" className="flex gap-2 text-sm">
          <StarRating rating={product.rating} />
          <p> ({product.reviews?.length} reviews)</p>
        </a>
      </div>
      <p>{product.description}</p>
      <ProductPrice price={product.price} salePrice={product.discountedPrice} />
      <AddToCart item={product} />
    </div>
  );
}

function ProductPrice({
  price,
  salePrice,
}: {
  price: number;
  salePrice: number;
}) {
  if (salePrice < price) {
    return (
      <div className="font-medium flex flex-col  ">
        <p className="text-gray-400 text-sm line-through">{price} NOK</p>
        <p className="flex  gap-4">
          Now:
          <span className="text-green-600 font-semibold">{salePrice} NOK</span>
        </p>
      </div>
    );
  }
  return <p className=" text-green-600 font-semibold ">{price} NOK</p>;
}
