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
});

app.get("/product/new",(req,res)=>{
    res.render("new")
});

app.post("/products", (req, res)=>{
     const {name,price,image,desc} =req.body;
     let id;
     if(products.length>0){
        id=products[products.length-1].id+1;
     }else{
        id=1;
     }
     products.push({id,name,image,price,desc});
     res.redirect("/products")
});

app.get("/products/:id", (req,res)=>{
    const {id} =req.params;
    const product =products.find((item)=> item.id==id);
    res.render("show", {product})
});

const PORT =5000;
app.listen(PORT, () => {
     console.log("Server run at port",PORT);

})
