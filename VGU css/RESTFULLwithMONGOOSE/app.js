const express = require("express");
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home");
})

const PORT = 4000;
    app.listen(PORT,()=>{
        console.log("Server run at port",PORT)
})