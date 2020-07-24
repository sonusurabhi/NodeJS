var express = require("express");
var app =  express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine","ejs"); 
app.use(express.static("public"));
let costs = [25,5];
var names = ["Book","Gum"];
app.post('/additem',function(req,res){
    var name = req.body.name;
    var c = req.body.cost;
    let cost = parseInt(c);
    costs.push(cost);
    names.push(name);
    res.redirect("/");
})      
app.get("/",function(req,res){
    res.render("index", { costs: costs, names: names });
});
app.listen(50011,function(){
    console.log("Expenditure Calculator is listening on 3000 !");
});