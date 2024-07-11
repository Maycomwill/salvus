import { useEffect } from "react";
import useProducts from "./hook/useProducts";
import Loading from "./components/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Settings2, Trash2 } from "lucide-react";
function App() {
  const { searchAllProducts, products, isLoading } = useProducts();
  useEffect(() => {
    searchAllProducts();
  }, []);
  return (
    <div className="h-screen flex flex-col  items-center justify-center">
      <h1 className="text-4xl font-bold tracking-widest">Hello world</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-2/3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Criado em</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products &&
                products.map((product) => {
                  return (
                    <TableRow>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>
                        R$
                        {product.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                      <TableCell>{product.created_at}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Settings2 />
                          <Trash2 />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default App;
