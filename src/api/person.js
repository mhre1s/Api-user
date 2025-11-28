const servicePerson = require("../services/person")

class ApiPerson {
  async FindAll(req, res) {
    try {
     const result = await servicePerson.FindAll();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async FindById(req, res) {
    try {
      const { id } = req.params;
      const result = await servicePerson.FindById(id);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async Create(req, res) {
    try {
      const { name, address, userId } = req.body;
      await servicePerson.Create(name, address, userId)
      res.status(204).send("Usuário criado com sucesso");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async Update(req, res){
    try {
      const {id} = req.params
      const {name, address} = req.body
      await servicePerson.Update(id, name, address)
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
      await servicePerson.Delete(id)
      res.status(204).send("Usuario deletado com sucesso")
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new ApiPerson();
