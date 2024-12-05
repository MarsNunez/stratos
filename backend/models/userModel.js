import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    current_location: String,
    future_location: String,
    username: {
      type: String,
      unique: true,
    },
    alias: String,
    social: [String],
    tags: [String],
    portfolio: String,
    bio: {
      type: String,
      default: "Hey im using Stratos!",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
