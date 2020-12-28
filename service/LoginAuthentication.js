const bcrypt = require('bcryptjs');
//const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admintest:admintest@cluster0.y02b6.mongodb.net/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const login_model = require('../model/login_model');

console.log(login_model)

const LoginAuthentication = async (userParam) => {

    return new Promise( async ( resolve, reject ) => {
        console.log("in promice")
        //console.log(userParam)
        if((!userParam.username) || (!userParam.password))
        reject({ status:401 ,message: " please upload validate data " })
        
      /*
        await login_model.findOne({ username: userParam.username }).then(function(login_model){ 

            console.log("userParam.password")
            console.log(userParam.password)
            
            var isPasswordValid = bcrypt.compareSync(userParam.password, login_model.hash);
            
            if(!isPasswordValid){
                reject({ status:401 ,message: " Not Authorised User " })
            }else{
                let payload = {
                    user_id : login_model._id,
                    username : login_model.username
                  }
                   let token;
                    token = jwt.sign(payload,"config.secrets.session",{
                        expiresIn : "1000s"
                    });
                    console.log("token")
                    console.log(token)
                    resolve({ status: 200 , message: { auth : true, token : token, message : "User Logged In Successfully" } } )
            } 
         })  
       */  
      await login_model.findOne({ username: userParam.username },function(err, login_model){
        if (err) { 
            console.log(err)
            reject({ status:500 ,message:err  })
         }
         else
         {
            if (login_model) {
                var isPasswordValid = bcrypt.compareSync(userParam.password, login_model.hash);
                console.log(userParam.password)
                console.log(isPasswordValid)
                if(!isPasswordValid){
                    reject({ status:401 ,message: " Not Authorised User " })
                }else{
                    let payload = {
                        user_id : login_model._id,
                        username : login_model.username
                      }
                       let token;
                        token = jwt.sign(payload,"config.secrets.session",{
                            expiresIn : "1000s"
                        });
                        console.log("token")
                        console.log(token)
                        resolve({ status: 200 , message: { auth : true, token : token, message : "User Logged In Successfully" } } )
                }     
            } else {
                console.log(" Not Authorised User ")
                reject({ status:401 ,message: " Not Authorised User " })
            }
         }
      })  
    });

}

module.exports = LoginAuthentication;