require("dotenv").config();
const mongoose = require("mongoose");
const db_uri = process.env.DB_URI; 

let connectDB = async () => {
  await mongoose
    .connect(db_uri)
    .then(() => console.log("Connected to expensepalDB locally"))
    .catch((err) => console.error("Error connecting to local MongoDB:", err));
};

// Export this functionality
module.exports = connectDB;