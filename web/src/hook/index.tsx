import { ProductContextProvider } from "@/context/product-context";
import { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <ProductContextProvider>{children}</ProductContextProvider>;
}
