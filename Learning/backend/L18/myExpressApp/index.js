const express = require("express");
const app = express();
const path = require("path");

app.get("/",(req,res)=>{
    res.send("Working fine!")
})

app.get("/cat",(req,res)=>{
    res.send("MeoWwwwwwwwwwwwww");
})

app.get("/products/:id",(req,res)=>{
    //  console.log(req.params);
    //  const id = req.params.id;
     const {id} = req.params;
    res.send(`you want to show product of its id ${id}`)
})

app.get('/data',(req,res)=>{
    console.log(req.query);
    res.send('ok')
})
const filePath = path.join(__dirname,"index.html")
app.get("/payment",(req,res)=>{
    // res.send("payment page");
    // res.send(`<h1>payment page</h1>`);
    res.sendFile(filePath);
})


const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})