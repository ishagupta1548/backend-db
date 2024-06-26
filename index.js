require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

const uri =
  "mongodb+srv://dbtest:<password>@cluster0.ojegltu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Middleware to parse JSON
// app.use(express.json());

// // Use the user routes
// app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
