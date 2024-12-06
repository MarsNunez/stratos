import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

router.post("/create", async (req, res) => {
  const {
    email,
    password,
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
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (!email || email.length == 0) {
      return res.status(400).json({ message: "Email is required" });
    } else if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (!username || username.length == 0) {
      return res.status(400).json({ message: "Username is required" });
    } else if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const user = new User({
      email,
      password,
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
    res.status(400).json({ message: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email, username } = req.body;

    try {
      if (!email || email.length == 0) {
        return res.status(400).json({ message: "Email is required" });
      } else {
        const existingEmail = await User.findOne({ email, _id: { $ne: id } });
        if (existingEmail) {
          return res.status(400).json({ message: "Email already exists" });
        }
      }

      if (!username || username.length == 0) {
        return res.status(400).json({ message: "Username is required" });
      } else {
        const existingUsername = await User.findOne({
          username,
          _id: { $ne: id },
        });
        if (existingUsername) {
          return res.status(400).json({ message: "Username already exists" });
        }
      }

      const result = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!result) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(200)
      .send({ message: "User has been deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
