const User = require("../model/user");



class ServiceUser {
  FindAll() {
    return User.FindAll();
  }
  FindByIndex(i) {
    return User.FindByIndex(i)
  }
  Create(name) {
    User.CreateUser(name)
  }
  Update(i, name) {
    User.Update(i, name)
  }
  Delete(i) {
    User.Delete(i)
  }
}


module.exports = new ServiceUser()