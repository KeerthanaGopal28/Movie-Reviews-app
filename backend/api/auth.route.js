import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';

const router = express.Router();

// Register a new user
router.post("/register", async(req,res) => {
    try {
        const {username, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({username,email,password: hashedPassword});
        await newUser.save();
        res.status(201).json({message:"User created successfully"});    
    } catch(e) {
        res.status(500).json({message:"Server error"});
    }
});

//Login

router.post("/login", async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const payload = {
            id: user._id,
            email: user.email
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { 
                expiresIn: '1h' 
            }
        );
        res.json({ token });
    }
    catch(e) {
        res.status(500).json({message:"Server error"});
    }
});
 
export default router;