const express = require("express");
const UserController = require("../controllers/userController.js");
const router = express.Router();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const checkAuthUser = require("../middlewares/checkAuthUser.js");
const Dashboard = require("../controllers/dashboardController.js");
//MIDDLEWARES
router.use("/changePassword", checkAuthUser);
router.use("/dashboard", checkAuthUser);
//Public Routes
router.post(
  "/register",

  body("username").isLength({ min: 3 }),
  body("password").isLength({ min: 5 }),
  UserController.userRegisteration
);
router.post("/login", UserController.userLogin);
//PROTECTED ROUTES
router.post("/changePassword", UserController.changePassword);
router.get("/dashboard", Dashboard.getUserInfo);
module.exports = router;
