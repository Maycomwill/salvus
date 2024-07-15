import { Request, Response } from "express";
import { Pool } from "pg";
import { z } from "zod";
import connection from "../../lib/connection";

export default async function updateProduct(req: Request, res: Response) {
  const pool = new Pool(connection);
  const bodySchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
  });
  const paramSchema = z.object({
    id: z.string().uuid(),
  });
  const { name, description, price } = bodySchema.parse(req.body);
  const { id } = paramSchema.parse(req.params);
  try {
    console.log(name, description, price);
    const new_price = price && price * 100;
    const query = {
      name: "update prodcut",
      text: "UPDATE products SET name = $2, description = $3, price = $4 WHERE id = $1",
      values: [id, name, description, new_price],
    };
    pool.query(query, (error, result) => {
      if (error) {
        return res.status(500).send({ message: error.message, data: error });
      }
      return res.status(200).send({ message: "Product updated", data: result });
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
}
