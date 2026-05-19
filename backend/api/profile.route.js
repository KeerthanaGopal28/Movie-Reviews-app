import express from 'express';
import auth from '../middleware/auth.js';
import User from '../models/user.model.js';

const router = express.Router();

router.get("/me" , auth, async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if(!user) {
            return res.status(404).json({message: 'user not found'});
        }
        res.json({user});
    } catch(e) {
        console.log(e);
        res.status(500).json({message: 'Server error'});
    }
});

export default router;