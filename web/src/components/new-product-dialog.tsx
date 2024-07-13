import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { PlusCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import useProducts from "@/hook/useProducts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { createNewProduct } = useProducts();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createNewProduct({ name, description, price });
  }
  return (
    <Dialog>
      <DialogTrigger asChild className="group">
        <button type="button">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <PlusCircle className="group-hover:opacity-60 transition-all duration-200 ease-in-out" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Adicionar novo produto</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-center">Novo Produto</DialogTitle>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome do produto</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Ex: Pão Francês"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Descrição do produto</Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Ex: Pão feito com farinha de trigo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Preço do produto</Label>
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              type="number"
              min={0.1}
              step={0.01}
              placeholder="Ex: 22.42"
            />
          </div>
          <div className="mx-auto">
            <Button type="submit" variant="default">
              Criar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewProduct;
