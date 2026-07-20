const express = require("express");
const app =express();
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/University")
//     .then(()=>{
//         console.log("DB connected")
//     })
//     .catch(()=>{
//         console.log("DB not connected!")
//     })

// const userSChema = new mongoose.Schema({
//     username:String,
//     password:String,
//     age:Number,
//     city:String
// })

// const Users = mongoose.model("Users",userSChema);

//INSERT Documents
// Users.insertMany([
//     {
//     username:"rahul",
//     password:"rahul@123",
//     age:35,
//     city:"Jaipur"
//    },
//    {
//     username:"ishant",
//     password:"ishantt@123",
//     age:21,
//     city:"Alwar"
//    },
//    {
//     username:"chirayu",
//     password:"chirayu@123",
//     age:22,
//     city:"Kota"
//    },
//    {
//     username:"jyoti",
//     password:"jyoti@123",
//     age:20,
//     city:"Hanumanghar"
//    }
// ]).then(()=>{console.log("Document created")})



//// READ

// Users.find({})
//    .then((data)=>{console.log(data)});

app.get("/", (req, res)=>{
    res.send("Working fine!");
})


const PORT =4000;
app.listen(PORT, ()=>{
    console.log("Server run at port",PORT);
})