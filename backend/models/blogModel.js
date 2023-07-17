const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    blogID: {
      type: String,
    },
  },
  { timestamps: true }
);
const blogModel = mongoose.model("blogs", blogSchema);
module.exports = blogModel;
