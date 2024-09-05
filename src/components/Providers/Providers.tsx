import CartProvider from "./CartProvider";

import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

// function Provider(children: { children: ReactNode }) {}
