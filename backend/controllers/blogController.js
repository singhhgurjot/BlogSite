const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

class blogController {
  static addBlog = (req, res) => {
    const title = req.body.title;
    const author = req.user.username;
    const content = req.body.content;
    const id = req.user._id;
    if (!title || !content) {
      return res.status(400).json({
        message: "Please fill all the fields",
        success: false,
      });
    }
    Blog.create({
      title: title,
      author: author,
      content: content,
      blogID: id,
    })
      .then((data) => {
        return res
          .status(200)
          .json({ message: "Congrats! Posted Successfully" });
      })
      .catch((err) => {
        return res.status(500).json({ message: "Internal Server Error" });
      });
  };
  static fetchBlogs = (req, res) => {
    const curr_id = req.user._id;
    Blog.find({
      blogID: curr_id,
    }).then((data, err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Internal Server Error", success: false });
      }
      if (data) {
        return res.status(200).json({ Blogs: data });
      }
    });
  };
}
module.exports = blogController;
