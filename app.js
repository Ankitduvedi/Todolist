const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["buy food","eat food"];
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res)
{
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("lists", {kindofday: day, newItems: items});

});
app.post("/", function(req, res){
    var item = req.body.freshitem ;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server is running");
});