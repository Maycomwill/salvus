import { Request, Response } from "express";
import { Pool } from "pg";
import { z } from "zod";
import connection from "../../lib/connection";

export default async function updateProduct (req: Request, res: Response) {
    const pool = new Pool(connection);
    const bodySchema = z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      price: z.number().optional(),
      image: z.string().optional(),
    });
    const paramSchema = z.object({
      id: z.string().uuid(),
    });
    const { name, description, price, image } = bodySchema.parse(req.body);
    const { id } = paramSchema.parse(req.params);
    try {
      console.log(name, description, price, image);
      const query = {
        name: "update prodcut",
        text: "UPDATE products SET name = $2, description = $3, price = $4, image = $5 WHERE id = $1",
        values: [id, name, description, price, image],
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