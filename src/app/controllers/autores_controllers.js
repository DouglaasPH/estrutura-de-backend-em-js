import AutoresRepository from "../repositories/autores_repository.js";

class AutoresController {
  async getAutores(req, res) {
    const row = await AutoresRepository.getAutores();
    return res.json(row);
  }
}

export default new AutoresController();
