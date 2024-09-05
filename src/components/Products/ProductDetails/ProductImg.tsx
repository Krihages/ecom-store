import Image from "next/image";
import { ImageProps } from "@/types/ProductProps";

type Props = ImageProps & {
  discountPrice?: number;
};

export default function ProductImg({ url, alt, discountPrice }: Props) {
  return (
    <div className="relative aspect-square max-w-lg w-full">
      <Image
        src={url}
        alt={alt ?? "Product image"}
        fill
        className="rounded object-cover"
      />
      {discountPrice && <Discount discount={discountPrice} />}
    </div>
  );
}

function Discount({ discount }: { discount: number }) {
  return (
    <div className="absolute top-2 right-2 bg-green-800 shadow-lg border text-white p-3 rounded text-center ">
      <p>SALE</p>
      <p> -{discount.toFixed(2)} NOK</p>
    </div>
  );
}
