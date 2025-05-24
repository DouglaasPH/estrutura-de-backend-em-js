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
}

export default new AutoresController();
