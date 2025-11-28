const serviceUser = require("../services/user")

class ApiUser {
  async FindAll(req, res) {
    try {
     const users = await serviceUser.FindAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async FindById(req, res) {
    try {
      const { id } = req.params;
      const user = await serviceUser.FindById(id);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async Create(req, res) {
    try {
      const { email, password } = req.body;
      await serviceUser.Create(email, password)
      res.status(204).send("Usuário criado com sucesso");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async Update(req, res){
    try {
      const {id} = req.params
      const {email, password} = req.body
      await serviceUser.Update(id, email, password)
      res.status(200).send("Usuário atualizado com sucesso")
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
      res.status(500).send({ message: error.message });
    }
  }
  async Delete(req, res){
    try {
      const { id } = req.params
      await serviceUser.Delete(id)
      res.status(204).send("Usuario deletado com sucesso")
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new ApiUser();
