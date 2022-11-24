const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/", function(req, res){
    
    var weight1 = parseFloat(req.body.w1);
    var weight2 = parseFloat(req.body.w2);
    var bmi = weight1 / (weight2*weight2);

    res.send("Your BMI is "+ bmi);
});





app.listen(3000, function(){
    console.log("you have entered port 3000")
});