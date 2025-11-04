const database = require("../database")

class User {
  constructor(){
    this.model = database.db.define("users", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: database.db.Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
    });
  }
}

module.exports = new User().model