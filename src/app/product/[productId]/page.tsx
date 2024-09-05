import fetchData from "@/utils/helpers/fetchData";
import Product from "@/components/Products/ProductDetails";
import { ProductProps } from "@/types/ProductProps";
import Reviews from "@/components/Products/ProductDetails/Reviews";

type PageParams = {
  params: {
    productId: string;
  };
};

export default async function Page({ params }: PageParams) {
  const { productId } = params;

  const product: ProductProps = await fetchData(productId);

  return (
    <>
      <section className="px-4">
        <Product product={product} />
      </section>
      {product.reviews && (
        <Reviews reviews={product.reviews} avgRating={product.rating} />
      )}
    </>
  );
}
