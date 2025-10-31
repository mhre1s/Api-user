const users = ["Jão", "Ana", "Pedro"]

class User {
  FindAll() {
    return users;
  }
  FindByIndex(i) {
    return users[i];
  }
  CreateUser(name) {
    return users.push(name)
  }

  Update(i, name) {
    users[i] = name
  }

  Delete(i) {
    users.splice(i, 1)
  }
}

module.exports = User