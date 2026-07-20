const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.get("/abcd",(req,res)=>{
    console.log(req.query);
    res.send("Signup successfully!!")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/abcd",(req,res)=>{
    console.log(req.body);
    res.send("login successfully!!")
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})