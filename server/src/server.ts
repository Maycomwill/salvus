import express from "express";
import productRouter from "./controllers/products";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the API!" });
});

app.use('/product', productRouter)

app.listen(3333, () => {
  console.log("Server is running!");
});
