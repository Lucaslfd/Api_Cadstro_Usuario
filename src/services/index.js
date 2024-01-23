const db = require('../db');

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM users", (error, results) => {
        if(error) { rejeitado(error); return;}
        aceito(results)
      });
    });
  },

  buscarUnico: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
        if(error) { rejeitado(error); return;}
        if(results.length > 0){
          aceito(results[0])
        }else {
          aceito(false);
        }
      });
    });
  },

  inserir: (nome, email, senha) => {
    return new Promise((aceito, rejeitado) => {
      db.query('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha], 
      (error, results) => {
        if(error) { rejeitado(error); return;}
        aceito(results.insertUser);
      });
    });
  },

  alterar: (id, nome, email, senha) => {
    return new Promise((aceito, rejeitado) => {
      db.query('UPDATE users SET nome=?, email=?, senha=? WHERE id=?',[nome, email, senha, id],(error, results) => {
        if(error) { rejeitado(error); return; }
        aceito(results);
      });
    });
  },

  excluir: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query("DELETE FROM users WHERE id=?", [id], (error, results) => {
        if(error) { rejeitado(error); return;}
        aceito(results)
      });
    });
  }
};