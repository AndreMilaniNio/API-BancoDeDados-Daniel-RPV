export const routes = async (app) => {
  app.get("/", () => {
    console.log("HELLOWORLD");
  });

  




  // Rota para pegar um ID
  app.get("/produtos/:id", (req, res) => {
    console.log(req.params);
    return res
      .status(200)
      .send({ message: "Requisição efetuada com suceisso!" });
  });
};
