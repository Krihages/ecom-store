import SearchAndDisplay from "./SearchAndDisplay";
import fetchData from "@/utils/helpers/fetchData";

export default async function ProductSection() {
  const products = await fetchData();

  return (
    <section className="px-4">
      <SearchAndDisplay products={products} />
    </section>
  );
}
