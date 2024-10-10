import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    liked: [
      {
        type: String,
      },
    ],
    codes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Code",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

