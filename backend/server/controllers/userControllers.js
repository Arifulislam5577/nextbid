import User from "../model/userModel.js";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res) => {
  const { email, emailVerified, displayName, photoURL } = req.user;

  const user = await User.findOne({ userEmail: email });
  if (Object.keys(user ? user : {}).length) {
    return res.status(200).json(user);
  } else {
    const user = await User.create({
      userEmail: email,
      isVerify: emailVerified,
      userName: displayName,
      userImg: photoURL,
    });

    if (!user) {
      res.status(500).json({ message: "User Not Created" });
    }
    res.status(201).json(user);
  }
});
