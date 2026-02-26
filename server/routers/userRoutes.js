const express = require("express");
const { registerUser, loginUser, sendotp, verifyotp, logoutUser } = require("../controllers/userController");
const router = express.Router();
router.post('/register', registerUser);
router.post('/sendotp', sendotp);
router.post('/verifyotp', verifyotp);
router.post('/login', loginUser);
router.post('/logout', logoutUser);


module.exports = router;