import { createSlice } from "@reduxjs/toolkit";
import { getUserOrders } from "./orderService";

const initialState = {
  loading: false,
  error: "",
  success: false,
  orders: [],
};

const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserOrders.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });

    builder.addCase(getUserOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const orderReducers = OrderSlice.reducer;
