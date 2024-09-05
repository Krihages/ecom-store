import { CartProduct } from "@/components/Providers/CartProvider";

export default function totalPrice(items: CartProduct[]) {
  return items
    .reduce((acc, item) => {
      return acc + item.item.price * item.quantity;
    }, 0)
    .toFixed(2);
}
