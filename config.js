//import sequelize model
const Sequelize = require("sequelize");

//create an instance of Sequelize
const sequelize = new Sequelize("dept_emp", "robo", "123456", {dialect: "mysql"});

//export object to be used in other modules
module.exports = sequelize;