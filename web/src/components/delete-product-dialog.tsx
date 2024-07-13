import { Trash2 } from "lucide-react";
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
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import useProducts from "@/hook/useProducts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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
                <Trash2 className="group-hover:text-red-500 transition-all duration-200 ease-in-out text-red-600" />
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
