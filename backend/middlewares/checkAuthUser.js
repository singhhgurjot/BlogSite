const express = require("express");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");
const checkAuthUser = async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = await userModel.findById(userID);
      next();
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: "Unauthorised user", success: false });
    }
  }
  if (!token) {
    res
      .status(401)
      .json({ message: "Unauthorised user no token", success: false });
  }
};
module.exports = checkAuthUser;
