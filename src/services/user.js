const user = require("../model/user");



class ServiceUser {
  async FindAll() {
    return user.findAll()
  }
  async FindById(id) {
    return user.findByPk(id)
  }
  async Create(email, password) {
    if (!email) {
      throw new Error("Favor informar e-mail");
    } else if (!password) {
      throw new Error("Favor informar senha");
    }
    await user.create({
      email, password
    })
  }
  async Update(id, email, password) {
    const oldUser = await this.FindById(id)
    if(!oldUser){
      throw new Error("Usuaário náo encontrado")
    }
    oldUser.email = email
    oldUser.password = password
    await oldUser.save()

    return oldUser
  }
  async Delete(id) {
    const delUser = await this.FindById(id)
    delUser.destroy()
  }
}


module.exports = new ServiceUser()