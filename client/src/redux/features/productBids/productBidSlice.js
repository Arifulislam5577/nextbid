import { createSlice } from "@reduxjs/toolkit";
import { createNewProductBid, getProductBid } from "./productBidService";

const initialState = {
  loading: false,
  error: "",
  success: false,
  bidInfo: null,
};

const ProductBidSlice = createSlice({
  name: "ProductBid",
  initialState,
  reducers: {
    resetBids(state) {
      state.loading = false;
      state.error = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewProductBid.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(createNewProductBid.fulfilled, (state) => {
      state.success = true;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(createNewProductBid.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getProductBid.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductBid.fulfilled, (state, action) => {
      state.loading = false;
      state.bidInfo = action.payload;
    });

    builder.addCase(getProductBid.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productBidReducers = ProductBidSlice.reducer;
export const { resetBids } = ProductBidSlice.actions;
