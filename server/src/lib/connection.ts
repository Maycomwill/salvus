const connection = {
  user: String(process.env.PGUSER),
  password: String(process.env.PGPASSWORD),
  host: String(process.env.PGHOST),
  port: Number(process.env.PGPORT),
  database: String(process.env.PGDATABASE),
  connectionString: String(process.env.DATABASE_URL),
};

export default connection;
