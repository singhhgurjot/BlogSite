const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");

//Public Routes
router.post(
  "/register",

  body("username").isLength({ min: 3 }),
  body("password").isLength({ min: 5 }),
  UserController.userRegisteration
);
module.exports = router;
