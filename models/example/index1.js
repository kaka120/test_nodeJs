var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.get('/', function(req, res){
   res.render('form');
});


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.post('/', function(req, res){
   console.log(req);
   res.send("recieved your request!");
});

app.listen(3000);