const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Users =require("./models/Users")
const bcrypt = require("bcrypt");

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
    let hashPassword = await bcrypt.hash(password,10)
    await Users.create({ username, number, email, password:hashPassword});
    res.redirect("/Login");
});

app.get("/Login",(req, res)=>{
    res.render("Login")
}); 

app.post("/login",async(req,res)=>{
     const {username,password} = req.body;
     const user = await Users.findOne({username});
      if(user){
       let result = await bcrypt.compare(password,user.password);
       if(result){
          //valid user;
          // session create
          req.session.user=username;

          res.redirect("/");
       }else{
         // password incoorect
         res.redirect("/login")
       }
    }else{
        //username not exist
        res.redirect("/login");
    }
})


const PORT =4000;
app.listen(PORT, ()=>{
    console.log("Server runs at port",PORT)
});