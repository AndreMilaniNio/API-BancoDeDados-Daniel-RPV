import { list, listById } from "../controllers/marcas.js";

export const routes = async (app) => {
  app.get("/", (req, res) => {
    res.status(200).send({ message: "API ok!" });
  });

  app.get("/marcas", list)

  app.get("/marcas/:id", listById)
};
