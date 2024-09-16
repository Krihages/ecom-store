import Link from "next/link";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <nav className="flex gap-6">
      <Navigation />
      <Cart />
    </nav>
  );
}

function Navigation() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}

// function Cart() {
//   return (
//     <Link href="/">
//       <CartIcon />
//     </Link>
//   );
// }
