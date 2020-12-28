const express = require('express');
const bodyParser = require('body-parser');
/* Custom enviroment variable */
var env_custom_variable = require('./env/env');
/* Custom enviroment variable */
//const dotenv = require('dotenv');
//var mysql = require('mysql');
const server = express() 

if(env_custom_variable.parsed){
    var env = env_custom_variable.parsed.PROJ_ENV;
    var config = require('./config/config')[env];
}

// var env = 'development';
// var config = require('./config/config')[env];
// env variable related config
// dotenv.config()

//import Routes
const authroutes = require('./routes/api');
// //import connection
// // const conn = require('./models/connection/conn');
// // //insert import 
// // const insert = require('./models/query_string/insert');
// //querystring import 
 //const query_string = require('./models/query_string/query_string');
// routes middle ware
server.use(bodyParser.json());
server.use('/api/user', authroutes); 

//console.log(query_string_val)
//query_string("insert into emp values('NIIT1',2111)")
//query_string(query_string_val)
// console.log(conn);  

// app.listen(process.env.port||4000,function(){
//     console.log("Server is listning")
// })


server.listen(config.server.port,function(){
     console.log("Server is listning")
 })
