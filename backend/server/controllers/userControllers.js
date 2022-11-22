import User from "../model/userModel.js";

export const createUser = async (req, res, next) => {
  const { userName, userImg, userEmail, isAdmin } = req.body;

  try {
    const isExistedUser = await User.findOne({ userEmail: userEmail });
    if (isExistedUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({ userName, userImg, userEmail, isAdmin });
    const user = await newUser.save();
    if (user) {
      return res.status(201).json(user);
    } else {
      return res.status(201).json({ message: "User Not Created" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
