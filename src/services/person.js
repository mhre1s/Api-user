const person = require("../model/person");



class ServicePerson {
  async FindAll() {
    return person.findAll()
  }
  async FindById(id) {
    return person.findByPk(id)
  }
  async Create(name, address) {
    if (!name) {
      throw new Error("Favor informar nome");
    } else if (!address) {
      throw new Error("Favor informar endereço");
    } 
    await person.create({
      name, address
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