const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const { authCaptain } = require("../middleware/AuthMiddleware");

// register route:- /api/captain/register
router.post("/register", [
    body("fullname.firstname").notEmpty().withMessage("First Name is required"),
    body("email").isEmail().withMessage("Email is required"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be atleast of 8 characters"),
    body("vehicle.color").notEmpty().withMessage("Color is required"),
    body("vehicle.plate").notEmpty().withMessage("Plate is required"),
    body("vehicle.capacity").notEmpty().withMessage("Capacity is required"),
    body("vehicle.vehicleType").notEmpty().withMessage("Vehicle Type is required"),
  ],
  captainController.registerUser
);

// Login route:- /api/captain/login
router.post("/login", [
    body("email").isEmail().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  captainController.loginUser
);

// Profile route :- /api/captain/profile
router.get("/profile",authCaptain, captainController.profile);

// logout route :- /api/captain/logout
router.get("/logout",authCaptain, captainController.logout);

module.exports = router;