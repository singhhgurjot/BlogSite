const Blog = require("../models/blogModel");
const mongoose = require("mongoose");
const User = require("../models/userModel");

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
        User.findOneAndUpdate(
          {
            _id: id,
          },
          { $inc: { blogsPosted: 1 } }
        )
          .then((data) => {
            return res.status(200).json({
              message: "Congrats! Posted Successfully",
              success: true,
            });
          })
          .catch((err) => {
            return res.status(500).json({ message: "Internal Server Error" });
          });
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
  static viewBlog = (req, res) => {
    const id = req.params.id;
    Blog.findOne({
      _id: id,
    })
      .then((data) => {
        res.status(200).json({
          message: "Data Retrieved Successfully",
          Blog: data,
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  };
}
module.exports = blogController;
