import { database } from "./database/index.js";
import { app } from "./app.js";
import cors from "@fastify/cors";
import "dotenv/config";

async function server() {
  // Passando biblioteca "cors"
  app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  app
    .listen({
      host: "127.0.0.1",
      port: process.env.PORT,
    })
    .then(() => {
      console.log(`HTTP is running on PORT: ${process.env.PORT}`);
    });

  // database.raw("SELECT * FROM produtos").then((result) => console.log(result));
}

server();
