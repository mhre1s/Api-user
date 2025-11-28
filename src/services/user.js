const user = require("../model/user");



class ServiceUser {
  async FindAll(transaction) {
    return user.findAll({transaction})
  }
  async FindById(id, transaction) {
    return user.findByPk(id, {transaction})
  }
  async Create(email, password, transaction) {
    if (!email) {
      throw new Error("Favor informar e-mail");
    } else if (!password) {
      throw new Error("Favor informar senha");
    }
    return user.create({
      email, password
    },{ transaction })
  }
  async Update(id, email, password, transaction) {
    const oldUser = await this.FindById(id, transaction)
    if(!oldUser){
      throw new Error("Usuaário náo encontrado")
    }
    oldUser.email = email
    oldUser.password = password
    await oldUser.save({transaction})

    return oldUser
  }
  async Delete(id, transaction) {
    const delUser = await this.FindById(id, transaction)
    delUser.destroy({transaction})
    return true
  }
}


module.exports = new ServiceUser()