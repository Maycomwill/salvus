import { Router } from "express";
import bodyParser from "body-parser";
import z from "zod";

import searchAllProducts from "./search-all-products";
import createNewProduct from "./create-new-product";
import updateProduct from "./update-product";
import deleteProduct from "./delete-product";

const productRouter = Router();
const parser = bodyParser.json();

// Search all products
productRouter.get("/", searchAllProducts);

// Create product
productRouter.post("/", parser, createNewProduct);

// Update product
productRouter.patch("/:id", parser, updateProduct);

// Delete product
productRouter.delete("/:id", deleteProduct);

export default productRouter;
