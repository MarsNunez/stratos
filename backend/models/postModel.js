import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      minlength: 1,
      maxlength: 280,
    },
    likes: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", postSchema);
