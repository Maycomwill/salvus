import { useEffect } from "react";
import useProducts from "./hook/useProducts";
import Loading from "./components/Loading";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Settings2, Trash2 } from "lucide-react";
import NewProduct from "./components/new-product-dialog";
function App() {
  const { searchAllProducts, products, isLoading } = useProducts();
  useEffect(() => {
    searchAllProducts();
  }, []);
  return (
    <div className="h-screen flex flex-col  items-center justify-center pt-24 gap-12">
      <h1 className="text-4xl font-bold tracking-widest">Hello world</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NewProduct />
          <div className="w-2/3 flex-1">
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
                      <TableRow key={product.id}>
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
                        <TableCell>
                          {formatDistance(product.created_at, Date.now(), {
                            addSuffix: true,
                            locale: ptBR,
                          })}
                        </TableCell>
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
        </>
      )}
    </div>
  );
}

export default App;
