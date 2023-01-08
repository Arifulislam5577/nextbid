import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById } from "./productService";

const initialState = {
  products: [],
  loading: false,
  error: "",
  product: null,
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getProductById.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(getProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productReducers = productSlice.reducer;
