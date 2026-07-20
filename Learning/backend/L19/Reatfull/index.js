const express = require("express");
const app = express();
const users = require("./data/users");

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/users",(req,res)=>{
    res.render("user",{users});
})

app.get("/user/new",(req,res)=>{
    res.render("new")
})

app.post("/users",(req,res)=>{
    console.log(req.body);
    const {username,password,age,city} = req.body;
    users.push({username,password,age,city});
    res.redirect("/users");
})

app.get("/users/edit/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((item)=>item.id==id);
    console.log(id);
    console.log(user);
    res.render("edit",{user});
})

app.post("/users/edit/:id",(req,res)=>{
     const {id} = req.params;
     const user = users.find((item)=>item.id==id);
     const {username,password,age,city} = req.body;
    user.username= username;
    user.password=password;
    user.age=age;
    user.city=city;

    res.redirect("/users")
})

app.post("/users/delete/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((item)=>item.id==id);
    let ind = users.indexOf(user);
    users.splice(ind,1);

    res.redirect("/users");
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})