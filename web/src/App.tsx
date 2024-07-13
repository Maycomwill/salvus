import { useEffect } from "react";
import useProducts from "./hook/useProducts";
import Loading from "./components/Loading";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import NewProduct from "./components/new-product-dialog";
import UpdateProduct from "./components/update-product-dialog";
import DeleteProduct from "./components/delete-product-dialog";
import Footer from "./components/footer";
function App() {
  const { searchAllProducts, products, isLoading } = useProducts();
  useEffect(() => {
    searchAllProducts();
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-start pt-24 gap-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold tracking-widest">Product API</h1>
        <NewProduct />
      </div>
      <main className="w-full flex items-start justify-center pb-24">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="w-2/3">
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
                  {products &&
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
                    })}
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
