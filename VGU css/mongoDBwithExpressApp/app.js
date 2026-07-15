const express = require("express");
const app =express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/University")
    .then(()=>{
        console.log("DB connected")
    })
    .catch(()=>{
        console.log("DB not connected!")
    })

const userSChema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const Users = mongoose.model("Users",userSChema);

app.get("/", (req, res)=>{
    res.send("Working fine!");
})


const PORT =4000;
app.listen(PORT, ()=>{
    console.log("Server run at port",PORT);
})