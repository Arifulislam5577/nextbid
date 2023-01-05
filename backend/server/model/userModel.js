import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    userName: { type: String },
    userImg: {
      type: String,
      default:
        "https://www.shareicon.net/data/2016/05/24/770107_man_512x512.png",
    },
    userEmail: { type: String, required: true },
    isVerify: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = model("user", userSchema);
export default User;
