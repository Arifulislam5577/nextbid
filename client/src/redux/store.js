import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./features/auth/authSlice";
import { productReducers } from "./features/product/productSlice";
const store = configureStore({
  reducer: {
    authReducers,
    products: productReducers,
  },
});

export default store;
