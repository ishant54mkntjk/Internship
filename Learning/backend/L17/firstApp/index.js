const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.get("/payment",(req,res)=>{
    res.send("Payment page")
})

app.get("/contact",(req,res)=>{
    res.send("This is contact page")
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("Server run at port ",PORT);
})