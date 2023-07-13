//IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
//SERVER CREATION
const app = express();
app.use(cors());
dotenv.config();
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
//MONGOOSE CONNECTION
mongoose
  .connect(
    "mongodb+srv://GurjotSingh:harry499@cluster0.bqsptqv.mongodb.net/blog-app"
  )
  .then((db) => {
    console.log("Connected to Mongo Successfully");
  });
//REGISTER API
