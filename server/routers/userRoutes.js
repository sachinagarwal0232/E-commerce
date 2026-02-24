const express = require("express");
const { registerUser, loginUser, sendotp, verifyotp } = require("../controllers/userController");
const router = express.Router();
router.post('/register', registerUser);
router.post('/sendotp', sendotp);
router.post('/verifyotp', verifyotp);
router.post('/login', loginUser);


module.exports = router;