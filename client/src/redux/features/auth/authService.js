import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../config/firebase.config";
import { HandleError } from "../../../utils/handleError";

export const createNewUser = createAsyncThunk(
  "Authentication/createUser",
  async (data, thunkAPI) => {
    try {
      const { name, email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: `https://randomuser.me/api/portraits/men/${Math.ceil(
          Math.random() * 50
        )}.jpg`,
      });
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

export const googleAuth = createAsyncThunk(
  "Authentication/loginUser",
  async (data, thunkAPI) => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      return thunkAPI.rejectWithValue(HandleError(error.message));
    }
  }
);
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
