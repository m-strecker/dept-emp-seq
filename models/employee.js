//import sequelize model
const Sequelize = require("sequelize");


//instantiate sequelize object from config file
const sequelize = require('./../config');

//create an Employee model
const Employee = sequelize.define('Employee', {
    ID:{
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    }

});


//Export model
module.exports = Employee;