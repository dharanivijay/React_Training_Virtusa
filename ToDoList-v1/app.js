const express = require("express");
const bodyParser = require("body-parser");
const { render } = require("ejs");
const getDate = require("./date");
const day = require(__dirname + "/date.js");
const app = express();
let workDone = [];

let items = ["buy food", "cook food", "eat food"];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    res.render("list", {listTitle: day.getDate(), newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.item1;

    if(req.body.list === "work"){
        workDone.push(item);
        res.redirect("/work");
    }else{
        items.push(item);


        res.redirect("/");
    }

    
})


app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workDone }); 

   
})

app.post("/work", function(req, res){
    let item = req.body.item1;
   
    workDone.push(item);
        res.redirect("/work");

        console.log(req.body.workDone);
});



app.listen(3000, function(){
    console.log("you have entered port 3000");
});