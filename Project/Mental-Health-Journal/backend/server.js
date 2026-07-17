const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// CONNECT DATABASE
connectDB();

// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
const journalRoutes = require("./routes/journalRoutes");

app.use("/api/journals", journalRoutes);


// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Mental Health Journal API is running");
});


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});