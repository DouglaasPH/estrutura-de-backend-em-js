import AutoresRepository from "../repositories/autores_repository.js";

class AutoresController {
  async getAutores(req, res) {
    const row = await AutoresRepository.getAutores();
    return res.json(row);
  }

  async postAutores(req, res) {
    const { nome, email } = req.body;
    const row = await AutoresRepository.postAutores(nome, email);
    return res.json(row);
  }

  async putAutores(req, res) {
    const { values, id } = req.body;
    const row = await AutoresRepository.putAutores(values, Number(id));
    return res.json(row);
  }

  async deleteAutores(req, res) {
    const { id } = req.body;
    const row = await AutoresRepository.deleteAutores(Number(id));
    return res.json(row);
  }
}

export default new AutoresController();
