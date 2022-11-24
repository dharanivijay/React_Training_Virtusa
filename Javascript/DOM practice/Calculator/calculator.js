const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (_req, res) => {
        res.sendFile(__dirname + "/index.html");
    });
app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sol = num1 + num2;
    res.send("addition of these two numbers is "+ sol);
})
app.listen(3000, function(){
    console.log("Server is started");
});