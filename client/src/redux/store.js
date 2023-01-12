import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./features/auth/authSlice";
import { productReducers } from "./features/product/productSlice";
import { productBidReducers } from "./features/productBids/productBidSlice";
import { orderReducers } from "./features/order/orderSlice";
const store = configureStore({
  reducer: {
    authReducers,
    products: productReducers,
    productBid: productBidReducers,
    orderReducers,
  },
});

export default store;
