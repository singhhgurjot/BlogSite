const express = require("express");
const UserController = require("../controllers/userController.js");
const router = express.Router();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const checkAuthUser = require("../middlewares/checkAuthUser.js");
const Dashboard = require("../controllers/dashboardController.js");
const Blogs = require("../controllers/blogController.js");
//MIDDLEWARES
router.use("/changePassword", checkAuthUser);
router.use("/dashboard", checkAuthUser);
router.use("/addBlog", checkAuthUser);
router.use("/fetchBlogs", checkAuthUser);
router.use("/blog/:id", checkAuthUser);
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
router.post("/addBlog", Blogs.addBlog);
router.get("/fetchblogs", Blogs.fetchBlogs);
router.get("/blog/:id", Blogs.viewBlog);
module.exports = router;
