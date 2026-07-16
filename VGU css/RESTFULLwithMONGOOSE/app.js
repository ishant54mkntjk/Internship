const express = require("express");
const app = express();
const mongoose =require("mongoose");
const Products = require("./models/product");

mongoose.connect("mongodb://localhost:27017/VGU-Ecom")
    .then(()=>{
        console.log("DB Connected");
    })
    .catch(()=>{
        console.log("DB not connected");
    })

// yaha database ka schema and model banate hai but yaha banane se app.js ka code messy 
// ho jata hai esliye schema and model ham "models" folder me banayege and uske baad 
// yaha require kar lenge
    

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home");
})

const PORT = 4000;
    app.listen(PORT,()=>{
        console.log("Server run at port",PORT)
})