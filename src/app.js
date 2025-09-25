// Importando bibliotecas
import fastify from "fastify";
import { routes } from "./http/routes/index.js";

// Para abrir servidor
const app = fastify();

app.register(routes);

// Exportando
export { app };
