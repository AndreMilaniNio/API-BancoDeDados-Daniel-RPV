import knexConfig from "../../knexfile.js";
import knex from "knex";
import "dotenv/config";

const enviroment = process.env.NODE_ENV || 'development'

const database = knex(knexConfig[enviroment])

// Exportando
export {database}