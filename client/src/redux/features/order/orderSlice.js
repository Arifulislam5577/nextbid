import { createSlice } from "@reduxjs/toolkit";
import { createPayment, getUserOrders, updatePayment } from "./orderService";

const initialState = {
  loading: false,
  error: "",
  success: false,
  orders: [],
  paymentLoad: false,
  url: "",
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
    builder.addCase(createPayment.pending, (state) => {
      state.paymentLoad = true;
    });

    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.paymentLoad = false;
      state.url = action.payload;
    });

    builder.addCase(createPayment.rejected, (state, action) => {
      state.paymentLoad = false;
      state.error = action.payload;
    });
    builder.addCase(updatePayment.pending, (state) => {
      state.paymentLoad = true;
    });

    builder.addCase(updatePayment.fulfilled, (state, action) => {
      state.paymentLoad = false;
      state.success = true;
    });

    builder.addCase(updatePayment.rejected, (state, action) => {
      state.paymentLoad = false;
      state.error = action.payload;
    });
  },
});

export const orderReducers = OrderSlice.reducer;
