import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import useProducts from "@/hook/useProducts";
import { Trash2 } from "lucide-react";

interface DeleteProductProps extends AlertDialogProps {
  id: string;
}

function DeleteProduct({ id, ...props }: DeleteProductProps) {
  const { deleteProduct } = useProducts();
  function handleDelete(id: string) {
    deleteProduct(id);
  }
  return (
    <AlertDialog {...props}>
      <AlertDialogTrigger asChild className="group">
        <button type="button">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Trash2 className="text-red-600 transition-all duration-200 ease-in-out group-hover:text-red-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Deletar produto</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deletar produto</AlertDialogTitle>
          <AlertDialogDescription>
            Essa operação irá deletar o registro do produto em nossa base de
            dados.
            <br />
            Essa ação é{" "}
            <span className="underline underline-offset-2">irreversível.</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteProduct;
