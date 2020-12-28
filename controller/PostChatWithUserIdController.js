
const userService = require('../service/parent_service');
module.exports =  function  register(req, res, next) {
    
    console.log("Login register controller");
    
    let result = userService.PostChatWithUserId(req.body)
    result.then(function (result_set) {
        console.log("Promise Resolved");
        console.log(result_set)
        if(result_set.status===201)
            res.status(201).send(result_set)
        
    }).catch(function (result_set) {
            if(result_set.status===500)
            res.status(500).send(result_set)
    });

}