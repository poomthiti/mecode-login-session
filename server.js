var express=require('express');
var app=express();
var path = require('path');


app.get('/', function(req,res){
    res.sendFile(__dirname + '/login.html');
});

app.use(express.static("./"));

app.listen(process.env.port || 3000);
console.log('Server is running on port 3000');
