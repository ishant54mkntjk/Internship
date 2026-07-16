const express = require("express");
const app = express();
const mongoose =require("mongoose");
const Products = require("./models/product");
const path = require("path");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

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

app.get("/products",async (req, res)=>{
    const products = await Products.find({});
    // console.log(products)
    res.render("index",{products});
})

app.get("/product/new",(req, res)=>{
    res.render("new");
})

app.post("/products",async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Products.create({name,image,price,desc});
    res.redirect("/products")
})


app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id);
        res.render("show", { product });
    } catch (error) {
        console.log(error);
        res.status(404).send("Product not found");
    }
});

app.get("/product/:id/edit", async(req, res)=>{
    res.render("edit", {product})
})

app.put("/product/:id", async(req, res)=>{
    const { id } = req.params;
    const{name, image, price, desc} =req.body;
    const product = await Products.findByIdAndUpdate(id);
    res.render("/product")
})

app.delete("/product/:id", async(req, res)=>{
    const {id} = req.params;
    await Products.findByIdAndDelete(id)
    res.redirect("/products")
})

const PORT = 4000;
    app.listen(PORT,()=>{
        console.log("Server run at port",PORT)
})