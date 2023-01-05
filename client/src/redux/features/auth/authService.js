import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createUserInDB } from "../../../apis/userApi";
import { auth } from "../../../config/firebase.config";
import { HandleError } from "../../../utils/handleError";

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
  localStorage.removeItem("token");
  return await signOut(auth);
};

export const userInDB = createAsyncThunk(
  "Authentication/createUserInDb",
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/user`,
        {},
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
