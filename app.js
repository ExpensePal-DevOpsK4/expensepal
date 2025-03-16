const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./backend/database_connect/connectDB");
require("dotenv").config();

const port = process.env.PORT;

//Allow requests from any origin
app.use(cors({}));

// to parse body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
