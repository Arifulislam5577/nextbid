import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createUserInDB } from "../../../apis/userApi";
import { auth } from "../../../config/firebase.config";
import { HandleError } from "../../../utils/handleError";
import { uploadImgBb } from "../../../utils/uploadImgBB";

export const createNewUser = createAsyncThunk(
  "Authentication/createUser",
  async (data, thunkAPI) => {
    try {
      const { name, email, password } = data;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:
          "https://www.shareicon.net/data/2016/05/24/770107_man_512x512.png",
      });
      await createUserInDB(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(HandleError(error.message));
    }
  }
);

// export const updateUser = createAsyncThunk(
//   "Authentication/updateUser",
//   async (data, thunkAPI) => {
//     try {
//       const { name, img } = data;
//       const imgurl = await uploadImgBb(img);

//       await updateProfile(auth.currentUser, {
//         displayName: name,
//         photoURL: imgurl,
//       });
//     } catch (error) {
//       return thunkAPI.rejectWithValue(HandleError(error.message));
//     }
//   }
// );

export const loginUser = createAsyncThunk(
  "Authentication/loginUser",
  async (data, thunkAPI) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return thunkAPI.rejectWithValue(HandleError(error.message));
    }
  }
);

export const logOut = async () => {
  return await signOut(auth);
};
