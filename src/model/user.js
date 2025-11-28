const database = require("../database")
const person = require("./person")

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
    this.model.hasOne(person, {
      foreignKey: 'userId'
    })
    person.belongsTo(this.model, { 
      foreignKey: 'userId'
    })
  }
}

module.exports = new User().model