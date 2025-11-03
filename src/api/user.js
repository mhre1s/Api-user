const serviceUser = require("../services/user")

class ApiUser {
  FindAll(req, res) {
    try {
      const users = serviceUser.FindAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  FindByIndex(req, res) {
    try {
      const { index } = req.params;
      const user = serviceUser.FindByIndex(index);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  Create(req, res) {
    try {
      const { name } = req.body;
      serviceUser.Create(name)
      res.status(204).send("Usuário criado com sucesso");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  Update(req, res){
    try {
      const {index} = req.params
      const {name} = req.body
      serviceUser.Update(index, name)
      res.status(200).send("Usuário atualizado com sucesso")
    } catch (error) {
      res.status(500).send(error)
    }
  }
  Delete(req, res){
    try {
      const { index } = req.params
      serviceUser.Delete(index)
      res.status(204).send("Usuario deletado com sucesso")
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new ApiUser();
