const userModel = require("../models/userModel.js");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
class UserController {
  static userRegisteration = (req, res) => {
    const result = validationResult(req);
    if (result.errors.length == 0) {
      const { name, username, password, password_confirmation, tc } = req.body;
      if (!name || !username || !password || !password_confirmation || !tc) {
        return res
          .status(400)
          .json({ message: "Please fill all the fields", success: false });
      }
      if (password != password_confirmation) {
        return res.status(422).json({
          message: "Password and confirm password do not match",
          success: false,
        });
      }
      userModel.findOne({ username }).then((data, err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Internal Server Error", success: false });
        }
        if (data) {
          return res
            .status(200)
            .json({ message: "Username Already Exists", success: false });
        } else {
          const salt = bcrypt.genSaltSync(10);
          const encryptedPassword = bcrypt.hashSync(password, salt);
          userModel
            .create({
              name: name,
              username: username,
              password: encryptedPassword,
              tc: tc,
            })
            .then((data, err) => {
              if (err) {
                return res.status(500).json({ message: err });
              }
              if (data) {
                return res
                  .status(200)
                  .json({ message: "Registered Successfully", success: true });
              }
            });
        }
      });
    } else {
      res.send({ errors: result });
    }
  };
  static userLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", success: false });
    }
    userModel.findOne({ username }).then((data, err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Internal Server Error", success: false });
      }
      if (data) {
        const isMatch = bcrypt.compareSync(password, data.password);
        if (isMatch) {
          const token = jwt.sign(
            { userID: data._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: 70 }
          );
          return res.status(200).json({
            message: "Login Successfull",
            success: true,
            token: token,
          });
        } else {
          return res.status(401).json({
            message: "Please Check your Username or Password",
            success: false,
          });
        }
      } else {
        return res.status(401).json({
          message: "Please Check your Username or Password",
          success: false,
        });
      }
    });
  };
  static changePassword = (req, res) => {
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    return res.send(req.user);
    console.log(res.user);
  };
}
module.exports = UserController;
