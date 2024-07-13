import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import DeleteProduct from "./delete-product-dialog";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import UpdateProduct from "./update-product-dialog";
import useProducts from "@/hook/useProducts";
import { useEffect } from "react";
import Loading from "./Loading";

function ProductTable() {
  const { searchAllProducts, isLoading, products } = useProducts();
  useEffect(() => {
    searchAllProducts();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="md:px-0 px-4 md:w-2/3 overflow-y-auto max-h-[700px] lg:max-h-[380px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Criado em</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products ? (
            products.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>
                    {(product.price / 100).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                  <TableCell>
                    {formatDistance(product.created_at, Date.now(), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <UpdateProduct data={product} />
                      <DeleteProduct id={product.id} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <Loading />
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductTable;
