import { consult } from "../database/query.js";

class AutoresRepository {
  async getAutores() {
    const sql = "SELECT * FROM autores";
    return consult(sql, "Unable to query the database.");
  }

  async postAutores(name, email) {
    const sql = "INSERT INTO autores(nome, email) VALUES(?, ?)";
    return consult(sql, [name, email], "Unable to query the database.");
  }

  async putAutores(values, id) {
    const sql = "UPDATE autores SET ? WHERE id = ?";
    return consult(sql, [values, id], "Unable to query the database.");
  }
}

export default new AutoresRepository();
