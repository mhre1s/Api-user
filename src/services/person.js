const person = require("../model/person");
const user = require("../model/user");


class ServicePerson {
  async FindAll() {
    return person.findAll()
  }
  async FindById(id) {
    return person.findByPk(id, { include: { model: user }})
  }
  async Create(name, address, userId) {
    if (!name) {
      throw new Error("Favor informar nome");
    } else if (!address) {
      throw new Error("Favor informar endereço");
    } else if(!userId){
      throw new Error("Favor informar userId")
    }
    await person.create({
      name, address, userId
    })
  }
  async Update(id, name, address) {
    const oldPerson = await this.FindById(id)
    if(!oldPerson){
      throw new Error("Usuaário náo encontrado")
    }
    oldPerson.name = name
    oldPerson.address = address
    oldPerson.save()

    return oldPerson
  }
  async Delete(id) {
    const delPerson = await this.FindById(id)
    delPerson.destroy()
  }
}


module.exports = new ServicePerson()