const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Users =require("./models/Users")

mongoose.connect("mongodb://localhost:27017/AUTH")
    .then(()=>{console.log("DB connected")})
    .catch(()=>{console.log("DB not connected")})
    
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res)=>{
    res.render("Home")
});

app.get("/SignUp", (req, res)=>{
    res.render("SignUp")
});

app.post("/SignUp", async(req, res)=>{
    const { username, number, email, password} = req.body;
    await Users.create({ username, number, email, password});
    res.redirect("/Login");
})

app.get("/Login",(req, res)=>{
    res.render("Login")
}); 
const PORT =4000;
app.listen(PORT, ()=>{
    console.log("Server runs at port",PORT)
});