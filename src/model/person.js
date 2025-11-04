const database = require("../database")

class Person {
  constructor(){
    this.model = database.db.define("people", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      address:{
        type: database.db.Sequelize.STRING
      }
    });
  }
}

module.exports = new Person().model