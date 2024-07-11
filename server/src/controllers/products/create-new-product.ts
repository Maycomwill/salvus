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
    image: z.string().optional(),
  });
  const { name, description, price, image } = bodySchema.parse(req.body);
  try {
    const id = uuidv4();
    const query = `INSERT INTO products (id, name, description, price, image) VALUES ('${id}', '${name}', '${description}', '${price}', '${image}')`;
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
