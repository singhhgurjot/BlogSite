//IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes.js");
//SERVER CREATION
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use("/api/user", userRouter);
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
const mongopass = process.env.MONGOPASS;
const mongourl =
  "mongodb+srv://GurjotSingh:" +
  mongopass +
  "@cluster0.bqsptqv.mongodb.net/blog-app";
//MONGOOSE CONNECTION
mongoose.connect(mongourl).then((db) => {
  console.log("Connected to Mongo Successfully");
});
//REGISTER API
