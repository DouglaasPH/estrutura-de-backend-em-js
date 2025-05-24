import { consult } from "../database/query.js";

class AutoresRepository {
  async getAutores() {
    const sql = "SELECT * FROM autores";
    return consult(sql, "Unable to query the database.");
  }
}

export default new AutoresRepository();
