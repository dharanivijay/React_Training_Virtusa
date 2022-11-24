const express = require("express");
const { log } = require("node:console");
const https = require('node:https');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res){

        const cityName = req.body.cityName1;
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=fba6d64369e83917b2bf6ca5ae543dc0&units=metric"

        https.get(url, function(response){
            console.log(response.statusCode);

            response.on("data", function(data){
                const weather = JSON.parse(data);
                const temp = weather.main.temp;
                res.write("<h1>your weather description now is " + weather.weather[0].description +"</h1>");
                res.write("<h1>your current temperature is "+temp+"</h1>")
                res.send();

            })
        });
});




app.listen(3000, function(){
    console.log("u have logged");
});
