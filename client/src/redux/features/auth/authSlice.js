import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    isLoginUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(createNewUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const authReducers = authSlice.reducer;
export const { isLoginUser } = authSlice.actions;
