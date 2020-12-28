const userService = require('../service/parent_service');
module.exports = function  LoginRegsistration(req, res, next) {
    console.log(req.body)
    console.log("Login authentication controller");
    
    let result = userService.LoginAuthentication(req.body)
    result.then(function (result_set) {
        console.log("Promise Resolved");
        console.log(result_set)
        if(result_set.status===200)
            res.status(201).send(result_set.message)
        
    }).catch(function (result_set) {
        if(result_set.status===401)
            res.status(401).send(result_set.message)
        if(result_set.status===500)
            res.status(500).send(result_set.message)
    });
}
