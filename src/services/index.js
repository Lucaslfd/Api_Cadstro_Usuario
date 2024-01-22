const db = require('../db');

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, regeitado) => {
      db.query("SELECT * FROM users", (error, results) => {
        if(error) { regeitado(error); return;}
        aceito(results)
      });
    });
  }
};