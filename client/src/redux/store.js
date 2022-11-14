import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./features/auth/authSlice";
const store = configureStore({
  reducer: {
    authReducers,
  },
});

export default store;
