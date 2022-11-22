import axios from "axios";

export const createUserInDB = async (user) => {
  console.log(user);
  const { data } = await axios.post("http://localhost:5000/api/v1/user", {
    userName: user.displayName,
    userImg: user.photoURL
      ? user.photoURL
      : "https://www.shareicon.net/data/2016/05/24/770107_man_512x512.png",
    userEmail: user.email,
  });

  console.log(data);
};
