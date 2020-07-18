const express = require("express");
const bodyParser = require("body-parser");
const vis=require("vis");
const app = express();
let list;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname ));

app.get("/",(req,res)=>{

        res.sendFile(__dirname+'/index.html');


})

app.listen(3000,()=>{
console.log("Server is up and running");

})