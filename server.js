var express = require('express');
var app = express();
var port = process.env.port || 1337;

app.listen(port, function() {
    var datetime = new Date();
    var message = "server running on port:-" + port + " started at :-" + datetime;
    console.log(message);
})

app.get("/product", function(request,response){
    response.json({"Message":"Welcome to Node js"});
});