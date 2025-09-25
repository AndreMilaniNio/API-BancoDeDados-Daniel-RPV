// Biblioteca base do Node
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

// Direcionando o que for necessário para nossa pasta
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("filename: ", __filename);
console.log("direname: ", __dirname);

export default {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
  },
};
