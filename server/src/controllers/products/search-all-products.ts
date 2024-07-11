import { Pool } from "pg";
import connection from "../../lib/connection";
import { Request, Response } from "express";

export default async function searchAllProducts(req: Request, res: Response) {
  const pool = new Pool(connection);
  const query = "SELECT * FROM products";
  try {
    pool.query(query, (error, result) => {
      if (error) {
        return res.status(500).send({ message: error.message, data: error });
      }
      console.log(result.rows);
      return res.status(200).send({ message: "ok", data: result.rows });
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
}
