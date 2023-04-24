//import sequelize model
const Sequelize = require("sequelize");


//instantiate sequelize object from config file
const sequelize = require('./../config');

//create an Department model
const Department = sequelize.define("Department",{
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
module.exports = Department;