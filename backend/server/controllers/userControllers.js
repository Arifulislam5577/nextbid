import User from "../model/userModel.js";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res, next) => {
  const { email, name, picture, email_ver } = req.user;
  const findUser = await User.findOne({ userEmail: email });
  if (Object.keys(findUser ? findUser : {}).length) {
    const user = await User.findByIdAndUpdate(findUser._id, {
      userImg: picture,
      userName: name,
    });
    return res.status(200).json(user);
  } else {
    const user = await User.create({
      userEmail: email,
      userImg: picture,
      userName: name,
    });

    if (!user) {
      res.status(500).json({ message: "User Not Created" });
    }
    res.status(201).json(user);
  }
});
