const express = require("express");
const path  = require("path");
const requests = require("requests");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;
const temp_view = path.join(__dirname,"../templates/views");
const partial_ = path.join(__dirname,'../templates/partial');
app.set('view engine','hbs');
app.set('views',temp_view);
hbs.registerPartials(partial_);
app.get("",(req ,res)=>{
    res.render("index");
});
app.get("/services",(req ,res)=>{
    res.render("services");
});
app.get("/about",(req ,res)=>{
    res.render("about");
});
app.get("/contact",(req ,res)=>{
    res.render("contact");
});
app.get("/portfolio",(req ,res)=>{
    res.render("portfolio");
});



app.get("*",(req,res)=>{
    res.render('404',{
        errorpage :'page not found'
    });
});
app.listen(port,()=>{
    console.log(`server serve website on port number ${port} ..`);
});