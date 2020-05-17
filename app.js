const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res) {
    
    res.render("home");

    
})

var name="",email="",password="",city="",gender="",pincode="";
app.get("/profile",function(req,res) {
    res.render("profile",({name:name,email:email,password:password,city:city,gender:gender,pincode:pincode}))
    
})

app.get("/signup",function(req,res) {
    res.render("SignUp")
    
})
app.post("/signup",function(req,res)
{
     
    
    
  name=req.body.name1;
    email=req.body.email;
    password=req.body.password;
  res.redirect("/")
    
})
app.get("/update",function(req,res) {
    res.render("update",({name:name,email:email,password:password,city:city,gender:gender,pincode:pincode}))
    
})

app.post("/update",function(req,res) {

    name=req.body.name1;
    email=req.body.email;
    password=req.body.password;
    city=req.body.city;
    gender=req.body.gender;
    pincode=req.body.pincode;
    res.redirect("/profile")
    
})
app.listen(3000,function () {
   console.log("server started on port 3000");
       
})