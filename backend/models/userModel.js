const mongoose = require("mongoose");
const Schema = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tc: {
    type: Boolean,
    required: true,
  },
  blogsPosted: {
    type: Number,
    default: 0,
  },
  totalLikes: {
    type: Number,
    default: 0,
  },
});
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
