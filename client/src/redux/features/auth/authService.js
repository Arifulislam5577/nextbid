import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
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
        photoURL: "",
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
  return await signOut(auth);
};
