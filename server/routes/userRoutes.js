const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
const router = express.Router();
const { updateUserProfile } = require("../controllers/userControllers");
const protect = require("../middlewares/authMiddleware");
router.route("/register").post(registerUser);
router.post("/login", authUser);
router.post("/updateProfile", updateUserProfile);
module.exports = router;
