import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL belum diatur. Buat file .env.local di root project dan isi connection string PostgreSQL."
  );
}

const globalForPostgres = globalThis;

const pool =
  globalForPostgres.postgresPool ||
  new Pool({
    connectionString,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPostgres.postgresPool = pool;
}

export default pool;
