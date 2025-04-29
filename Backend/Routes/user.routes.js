const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const { authUser } = require("../middleware/AuthMiddleware");

// register route:- /api/user/register
router.post(
  "/register",
  [
    body("fullname.firstname").notEmpty().withMessage("First Name is required"),
    body("fullname.lastname").notEmpty().withMessage("Last Name is required"),
    body("email").isEmail().withMessage("Email is required"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be atleast of 8 characters"),
  ],
  userController.registerUser
);

// Login route:- /api/user/login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  userController.loginUser
);

// Profile route :- /api/user/profile

router.get("/profile",authUser, userController.profile);

// Logout route :- /api/user/logout

router.get("/logout",authUser, userController.logout);

module.exports = router;
