import { ProductContextProps, ProductContext } from "@/context/product-context";
import { useContext } from "react";

export default function useProducts(): ProductContextProps {
  const context = useContext(ProductContext);
  return context;
}
