import { Request, Response } from "express";
import { Pool } from "pg";
import { z } from "zod";
import connection from "../../lib/connection";

export default async function deleteProduct(req: Request, res: Response) {
  const pool = new Pool(connection);
  const paramsSchema = z.object({
    id: z.string().uuid(),
  });
  try {
    const { id } = paramsSchema.parse(req.params);
    const query = {
      name: "delete product",
      text: "DELETE FROM products WHERE id = $1",
      values: [id],
    };
    pool.query(query, (error, result) => {
      if (error) {
        return res.status(500).send({ message: error.message, data: error });
      }
      return res.status(200).send({ message: "Product deleted", data: result });
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
}
