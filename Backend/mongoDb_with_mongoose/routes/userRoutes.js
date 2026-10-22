import express from "express"
import { User } from "../models/user.js";

const router = express.Router();

router.post("/create", async (req, res) => {
    const {username, age} = req.body;
    const user = new User({
        username,
        age
    });

    await user.save();

    return res.status(201).json({message:"User created successfully!", user})
})

export default router;
