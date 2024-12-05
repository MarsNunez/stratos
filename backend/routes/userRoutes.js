import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

router.post("/create", async (req, res) => {
  const {
    current_location,
    future_location,
    username,
    alias,
    social,
    tags,
    portfolio,
    bio,
  } = req.body;

  try {
    const user = new User({
      current_location,
      future_location,
      username,
      alias,
      social,
      tags,
      portfolio,
      bio,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Username already exists" });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
});

export default router;
