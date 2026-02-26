const user = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const registerUser = async (req, res) => {
    try {
        const newuser = await user.create(req.body)
        res.status(200).json({ msg: 'User Registered Successfully', newuser })

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const sendotp = async (req, res) => {
    try {
        const { email } = req.body

        const newuser = await user.findOne({ email })
        if (!newuser) { res.status(404).json({ msg: 'User Not Found' }) };

        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const otpExpiry = Date.now() + 5 * 60 * 1000;
        const mail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
        mail.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'OTP for Login',
            text: `Your OTP for login is ${otp}`
        })


        newuser.otp = otp,
            newuser.isVerified = false,
            newuser.otpExpiry = otpExpiry,
            await newuser.save()

        return res.json({ msg: 'OTP Sent Successfully' })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const verifyotp = async (req, res) => {
    try {
        const { email, otp } = req.body
        const newuser = await user.findOne({ email })
        if (!newuser) {
            res.status(404).json({ msg: 'User Not Found' })

        };
        if (newuser.otp !== otp.toString()) { res.status(400).json({ msg: 'Invalid OTP' }) };
        if (newuser.otpExpiry < Date.now()) { res.status(400).json({ msg: 'OTP Expired' }) };
        newuser.isVerified = true;
        newuser.otp = null;
        await newuser.save()
        return res.json({ msg: 'OTP Verified' })

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const newuser = await user.findOne({ email })
        if (!newuser) { res.status(404).json({ msg: 'User Not Found' }) };
        const isMatch = await newuser.comparePassword(password)
        if (!isMatch) { res.status(400).json({ msg: 'Invalid Credentials' }) };

        const token = jwt.sign({ id: newuser._id, role: newuser.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('token', token);
        res.json({ msg: 'Login Successfull', newuser, token })

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token');
        res.json({ msg: 'Logout Successfull' })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = { registerUser, loginUser, sendotp, verifyotp, logoutUser }