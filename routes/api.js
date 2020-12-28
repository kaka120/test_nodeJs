const express = require('express')
const routes_request = express.Router()
const query_string = require('../models/query_string/query_string');
// validation import using @hapi/joi
const Joy = require('@hapi/joi');
// password cncription bcript js
const bcrypt = require('bcryptjs');
// jsonweb token import
const jwt = require('jsonwebtoken');
//console.log(routes_request).
/* Custom enviroment variable */
var env_custom_variable = require('../env/env');
/* Custom enviroment variable */

routes_request.get('/api',async function(req,res){
    console.log("GET REQUEST")
    console.log(req.body)
    res.send({type:'get'});
})

// const schema = {
//     val_1: Joy.string().min(6).required(),
//     val_2: Joy.string().min(6).required(),
//     val_3: Joy.string().min(6).required()
// };

const schema = Joy.object({
     val_1: Joy.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    val_2: Joy.string().min(6).required(),
    val_3: Joy.string().min(6).required()
})

routes_request.post('/register', async function(req,res){
    /* password section encription */ 
    var salt = bcrypt.genSaltSync(10);
    var hashedpassword = bcrypt.hashSync(req.body.val_2, salt);
    /* password section encription */
    const query_string_val = {
        flag:1,
        table_name: "emp",
        values:[
            {
                email : req.body.val_1,
                password : hashedpassword,
            }
        ]
    }
    /*
    const { error } =  Joy.validate(req.body,schema);
    if(error) return res.status(400).send(error.details[0].message)
    */
    const query_string_val_1 = {
        flag:2,
        values:[
            {
                email : req.body.val_1,
                //password : hashedpassword,
            }
        ]
    }
    let a1  = await query_string(query_string_val_1)
    console.log(a1) 
    if(a1) return res.status(400).send("DATA ALREADY EXISTS")
    /* Validation section right now it getting error but it needed to be rectified */
    let a  =  await query_string(query_string_val)
    console.log(a)
    const jwtoken = jwt.sign({use_id:req.body.val_1,password:req.body.val_2},  env_custom_variable.parsed.TOKENSECRET )
    res.header('auth-token',jwtoken).send(jwtoken);
    res.end();
})

routes_request.put('/api/:id',async function(req,res){
    res.send();
})

routes_request.delete('/api/:id',async function(req,res){
    res.send();
})

module.exports = routes_request;