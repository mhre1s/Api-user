const User = require("../model/user");

const model = new User();

class ServiceUser {
  FindAll() {
    return model.FindAll();
  }
  FindByIndex(i) {
    return model.FindByIndex(i)
  }
  Create(name) {
    return model.CreateUser(name)
  }
  Update(index, name) {}
  Delete(index) {}
}
