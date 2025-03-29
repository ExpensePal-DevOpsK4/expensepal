const express = require("express");
const router = require("./routes/index.routes")
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const port = process.env.PORT;

//Allow requests from any origin
app.use(cors({}));

// to parse body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

connectDB();

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
