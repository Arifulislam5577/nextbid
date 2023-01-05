import User from "../model/userModel.js";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res, next) => {
  const { email, email_verified, name, picture } = req.user;

  const user = await User.findOne({ userEmail: email });
  if (Object.keys(user ? user : {}).length) {
    const updateUser = await User.findByIdAndUpdate(user._id, {
      userName: name,
      userImg: picture,
    });
    return res.status(200).json(updateUser);
  } else {
    const user = await User.create({
      userEmail: email,
      isVerify: email_verified,
    });

    if (!user) {
      res.status(500).json({ message: "User Not Created" });
    }
    res.status(201).json(user);
  }
});
