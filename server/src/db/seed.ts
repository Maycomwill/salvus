import { Pool } from "pg";
import connection from "../lib/connection";

const productTable = `CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INT NOT NULL,
    created_at TIMESTAMP
);`;

async function Seed() {
  const pool = new Pool(connection);
  const queries = [productTable];
  queries.forEach(async (query) => {
    pool.query(query);
  });
}

Seed();
