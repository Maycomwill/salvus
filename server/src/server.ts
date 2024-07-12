import express from "express";
import productRouter from "./controllers/products";
import cors from "cors";
import { config } from "dotenv";

const app = express();
config()
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the API!" });
});

app.use("/products", productRouter);

app.listen(3333, () => {
  console.log("Server is running!");
});
