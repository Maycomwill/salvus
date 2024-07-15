import { Settings2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { UpdateProductSchema } from "@/interfaces/products";
import { DialogProps } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import useProducts from "@/hook/useProducts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface UpdateProductProps extends DialogProps {
  data: UpdateProductSchema;
}

function UpdateProduct({ data: product, ...props }: UpdateProductProps) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const { updateProduct } = useProducts();

  console.log(product.price)

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updateProduct({
      name,
      description,
      price,
      id: product.id,
      created_at: product.created_at,
    });
  }

  return (
    <Dialog {...props}>
      <DialogTrigger asChild className="group">
        <button type="button">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Settings2 className="transition-all duration-200 ease-in-out group-hover:opacity-60" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Atualizar produto</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-center">Update Product</DialogTitle>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              type="text"
              placeholder="Ex: Pão"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="description"
              type="text"
              placeholder="Ex: Frânces"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Preço</Label>
            <Input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              id="price"
              placeholder="Ex: 1.50"
              type="number"
              min={0.01}
              step={0.01}
            />
          </div>
          <div className="mx-auto">
            <Button type="submit" variant="default">
              Atualizar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateProduct;
