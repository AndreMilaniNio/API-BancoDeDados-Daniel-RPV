import { database } from "../../database/index.js";


//* LISTAR TUDO
export async function list(req, res) {
  // Tentando buscar a tabela de marcas
  try {
    const query = await database("marcas").select();

    res.status(200).send({
      message: "Dados consultados com sucesso!",
      data: query,
      error: false,
    });
  } catch (error) {
    // Em caso de erro:
    res.status(412).send({
      message: "Ocorreu um erro interno!",
      data: {},
      error: true,
    });
  }
}


//* LISTAR POR ID
export async function listById(req, res) {
  try {
    const { id } = req.params;
    const query = await database("marcas").where("id", id);

    if (!query.length) {
      return res.status(200).send({
        message: "Dados consultados com sucesso!",
        data: {},
        error: false,
      });
    }

    return res.status(200).send({
      message: "Dados consultados com sucesso!",
      data: query[0],
      error: false,
    });

    // const dadosDaRequisicao = req.params()
    // res.status(200).send({params: dadosDaRequisicao})
  } catch (error) {
    // Em caso de erro:
    res.status(500).send({
      message: "Ocorreu um erro interno!",
      data: "",
      error: true,
    });
  }
}
