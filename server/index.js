const express = require("express");
const PORT = 8000;
const app = express();
const connectDB = require("./connection.js");

//Connection
connectDB("mongodb://127.0.0.1:27017/short_url")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error ", err));

app.listen(PORT, () => console.log("Server started at port : ", PORT));