const express =require("express");
const cors =require("cors");
const dotenv =require("dotenv");

const app =express();

dotenv.config();

const connectDB =require("./config/db");
//connect database
connectDB();


//middleware
app.use(cors());
app.use(express.json());


//Routes
const studentRoutes =require("./routes/studentroutes");

// console.log("Student routes loaded");
app.use("/api/students", studentRoutes);


// TEST ROUTE
app.get("/",(req, res)=>{
    res.send("Student Result Management System");
})



// SERVER
const PORT=5000;
app.listen(PORT, ()=>{
    console.log("Server runs at PORT",PORT);
})