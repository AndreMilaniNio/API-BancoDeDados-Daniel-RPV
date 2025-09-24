import { app } from "./app.js";
import cors from "@fastify/cors";

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
}

server();
