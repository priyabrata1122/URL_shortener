const express = require("express");
const PORT = 8000;
const app = express();
const connectDB = require("./connect.js");
const middleware = require("./middleware/middleware.js");
const router = require("./routes/urlRoutes.js");

//connect the mongoDB
connectDB("mongodb://127.0.0.1:27017/short_url")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Mongo Error ", err));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ encoded: false }));
app.use(middleware);

//routes
app.use("/url", router);

app.listen(PORT, () => console.log("Server Started at port :", PORT));
