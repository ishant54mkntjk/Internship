const express = require("express");
const app =express();
const products =require("./data/products");

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=> {
    res.render("Home");
});

app.get("/products", (req, res)=>{
    res.render("product",{products})
})

const PORT =5000;
app.listen(PORT, () => {
     console.log("Server run at port",PORT);

})
