
import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

console.log("DB USER:", process.env.DB_USER);
console.log("DB HOST:", process.env.DB_HOST);
console.log("DB NAME:", process.env.DB_NAME);
console.log("DB PASSWORD TYPE:", typeof process.env.DB_PASSWORD);
console.log("DB PASSWORD EXISTS:", !!process.env.DB_PASSWORD);