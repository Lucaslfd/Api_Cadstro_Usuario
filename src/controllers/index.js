const userServices = require('../services/index');

module.exports = {
  //Para Listar todos os Usuarios
  buscarTodos: async (requi, response) => {
    let json = {error: '', result: []};
    let users = await userServices.buscarTodos();

    for(let user in users){
      json.result.push({
        id: users[user].id,
        nome: users[user].nome,
        email: users[user].email,
        senha: users[user].senha
      })
    }
    response.json(json);
  }
}