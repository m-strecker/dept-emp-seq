//import express model
const express = require('express');
//instantiate express object
const app = express();

//instantiate sequelize object from config file
const sequelize = require('./config');


//test connection
sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully');    
}).catch((err)=>{
    console.log(err);
});

app.listen(3000, ()=>{
    console.log('Listening to port 3000');
});



//import models defined Employee and Department
const Employee = require('./models/employee');
const Department = require('./models/department');

//Apply association between department and employee models
//Make primary key from Department table a foreign key in Employee table - new column will be called "DepartmentID"
Department.hasMany(Employee,
    {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});


//Sync method to create Department table in mysql database
Department.sync().then((result)=>{
    console.log(result);
 }).catch((err)=>{
     console.log(err);
 });

 //Sync method to create Employee table in mysql database
Employee.sync().then((result)=>{
    console.log(result);
 }).catch((err)=>{
     console.log(err);
 });