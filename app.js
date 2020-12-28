const express = require('express');
const bodyParser = require('body-parser');
var multer = require('multer');

const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

var upload = multer();
const app= express() 
var cors = require('cors')
// Add headers
app.use(cors())
const parent_router = require('./routes/parent_router');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(upload.array()); 
app.use(express.static('public'));


const dbURI = 'mongodb://localhost/test_db';
mongoose.connect(dbURI)
  .then((result) => app.listen(5000,function(){
      console.log("Testing Server is listning at port 5000")
  }))
  .catch((err) => console.log(err));
app.use('/api', parent_router); 



// app.listen(process.env.port||5000,function(){
//     console.log("Testing Server is listning at port 5000")
// })