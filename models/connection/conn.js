
const express = require('express');
//const dotenv = require('dotenv');
var mysql = require('mysql');
var mysqlModel = require('mysql-model');
/* Custom enviroment variable */
var env_custom_variable = require('../../env/env');
/* Custom enviroment variable */

// const env_custom_variable = dotenv.config({path:'./env/.env'})

if(env_custom_variable.parsed){
    var env = env_custom_variable.parsed.PROJ_ENV;
    var config = require('../../config/config')[env];
}

/* Db configuration extration part */
/* Store the userName and passowrd in the aws or any other cloud platform */
var connection = mysql.createConnection({
    host: config.database.host,
    user: "root",
    password: "password",
    database: config.database.db,
    insecureAuth : true
  });


/* Db configuration extration part */
/* import part of connection */
// module.exports = connection;
module.exports = connection;
/* import part of connection */