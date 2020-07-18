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

let port=process.env.PORT;
if(port== null || port==""){
    port=3000;
}
app.listen(3000,()=>{
console.log("Server is up and running");

})