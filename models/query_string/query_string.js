
const express = require('express');
const dotenv = require('dotenv');
var mysql = require('mysql');

const app= express() 


//import connection
const conn = require('../connection/conn');
//insert import 
const insert = require('../query_string/insert');
//select query 
const select = require('../query_string/select');
const query_function = require('../query_string/query_function');


conn.connect(function(err){
    if(!!err){
      console.log(err)
    }
    else
    {
      console.log("connected")
    }
});

const query_string = async (query_string) => {
    // switch(query_string.flag) {
    //     case 1:
    //         try{  
    //             // Validating the data vefore the insert query
    //             console.log(" waiting for insert ")
    //             //const a = await insert(" insert into "+ query_string.table_name +" values('"+query_string.values[0].email+"','"+query_string.values[0].password+"')")
    //             const a = await query_function(" insert into "+ query_string.table_name +" values('"+query_string.values[0].email+"','"+query_string.values[0].password+"')")
    //             console.log(a)
    //             return a
    //          }catch(error){
    //           return error
    //          }
    //     break;
    //     case 2:
    //         try{  
    //             //Dynamic select query
    //             console.log(" waiting for select ")
    //             //const a1 = await select(" select count(*) as count from emp where email='"+query_string.values[0].email+"'")
    //             const a1 = await query_function(" select count(*) as count from emp where email='"+query_string.values[0].email+"'")
    //             //console.log(a1[0].count)
    //             return a1[0].count
    //          }catch(error){
    //           return error
    //          }
    //     break;
    //   }
         var sql;
         console.log(query_string.flag)
         if(query_string.flag==1){
           sql = " insert into "+ query_string.table_name +" values('"+query_string.values[0].email+"','"+query_string.values[0].password+"')";
         }
         else{
          sql = " select count(*) as count from emp where email='"+query_string.values[0].email+"'"
         }
            try{  
                // Validating the data vefore the insert query
                console.log(" query part ")
                const a = await query_function(sql)
                console.log(a)
                return a
             }catch(error){
              return next(error)
             }
}
module.exports = query_string;

