// const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// const appp = require("./app")
// const app = express();
// const port = 4000;


// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000', // allow requests from this origin
//   credentials: true, // allow credentials (e.g., cookies) to be sent
// }));
// const userRoutes = require('./routes/users');

const db_connecction = mongoose.connect("mongodb://localhost:27017/food3", {
 
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {  
  console.error("Error connecting to MongoDB:", err);
});

// app.use(userRoutes);

module.exports = db_connecction;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });