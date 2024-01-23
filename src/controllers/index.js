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
  },

  //Para Buscar um unico usuario
  buscarUnico: async (requi, response) => {
    let json = {error: '', result: {}};
    let id = requi.params.id;
    let user = await userServices.buscarUnico(id);
    if (user){
      json.result = user;
    }
    response.json(json);
  },

  //Para Inserir um usuario
  inserir: async (requi, response) => {
    let json = {error: '', result: {}};
    let nome = requi.body.nome;
    let email = requi.body.email;
    let senha = requi.body.senha;
    
    if (nome && email && senha){
      let userId = await userServices.inserir(nome, email, senha);
      json.result = {
        id: userId,
        nome,
        email,
        senha
      };
    } else {
      json.error = "Campos nao enviados"
    }
    response.json(json);
  },

  // Alterar usuario
  alterar: async (requi, response) => {
    let json = {error: '', result: {}};
    let id = requi.params.id;
    let nome = requi.body.nome;
    let email = requi.body.email;
    let senha = requi.body.senha;
    
    if(id && nome && email && senha){
      await userServices.alterar(id, nome, email, senha);
      json.result = {
        id,
        nome,
        email,
        senha
      };
    } else {
      json.error = "Campos nao enviados"
    }
    response.json(json);
  },

  // Excluir um Usuario
  excluir: async (requi, response) => {
    let json = {error: '', result: {}};
    await userServices.excluir(requi.params.id);
    response.json(json);
  }
}