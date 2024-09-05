import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "@/types/ProductProps";
import StarRating from "../StarRating";

export default function Thumbnail({ product }: { product: ProductProps }) {
  return (
    <Link href={`/product/${product.id}`} className="flex flex-col gap-2">
      {product.image && <ThumbnailImg img={product.image} />}
      <ThumbnailDetails product={product} />
    </Link>
  );
}

function ThumbnailImg({ img }: { img: { url: string; alt?: string } }) {
  return (
    <div className="relative h-40 w-56 ">
      <Image
        src={img.url}
        alt={img.alt ?? "Product image"}
        fill
        className="rounded-lg object-cover"
      />
    </div>
  );
}

function ThumbnailDetails({ product }: { product: ProductProps }) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <p className="text-lg font-medium">{product.title}</p>
        <Price price={product.price} salePrice={product.discountedPrice} />
      </div>
      <div className="flex gap-1 items-center ">
        <StarRating rating={product.rating} color="primary" />
        {product.reviews && product.reviews.length > 0 && (
          <span className="text-sm  font-semibold text-gray-600">
            ({product.reviews?.length})
          </span>
        )}
      </div>
    </div>
  );
}

function Price({ price, salePrice }: { price: number; salePrice: number }) {
  if (salePrice < price) {
    return (
      <div className="font-medium flex gap-2 ">
        <p>{salePrice} NOK</p>
        <p className="text-gray-400 text-sm line-through">{price} NOK</p>
      </div>
    );
  }
  return <p className=" font-medium ">{price} NOK</p>;
}

function Favorite() {}
