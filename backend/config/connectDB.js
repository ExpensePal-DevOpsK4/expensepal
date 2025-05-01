require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });
const mongoose = require("mongoose");
const db_uri = process.env.DB_URI; 

let connectDB = async () => {
  await mongoose
    .connect(db_uri)
    .then(() => console.log("Connected to expensepalDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};

// Export this functionality
module.exports = connectDB;