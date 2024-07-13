import { Pool } from "pg";
import connection from "../../lib/connection";
import { Request, Response } from "express";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export default async function createNewProduct(req: Request, res: Response) {
  const pool = new Pool(connection);
  const bodySchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    price: z.number(),
  });
  const { name, description, price } = bodySchema.parse(req.body);
  try {
    const id = uuidv4();
    const new_price = price * 100;
    const created_at = new Date();
    const query = {
      name: "create prodcut",
      text: "INSERT INTO products (id, name, description, price, created_at) VALUES ($1, $2, $3, $4, $5)",
      values: [id, name, description, new_price, created_at],
    };
    pool.query(query, (error, result) => {
      if (error) {
        return res.status(500).send({ message: error.message, data: error });
      }
      return res.status(201).send({ message: "Product created", data: result });
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
}
