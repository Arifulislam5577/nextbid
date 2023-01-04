import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    userImg: { type: String, required: true },
    userEmail: { type: String, required: true },
    isVerify: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = model("user", userSchema);
export default User;
