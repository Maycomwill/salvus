import { Pool } from "pg";
import connection from "../lib/connection";

const productTable = `CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP
);`;

const userTable = `CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);`;

async function Seed() {
  const pool = new Pool(connection);
  const queries = [productTable, userTable];
  queries.forEach(async (query) => {
    pool.query(query);
  });
}

Seed();
