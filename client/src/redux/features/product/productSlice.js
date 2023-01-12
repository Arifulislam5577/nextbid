import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductById,
  createNewProduct,
  updateProductById,
} from "./productService";

const initialState = {
  products: [],
  loading: false,
  error: "",
  productInfo: null,
  bidActive: true,
  success: false,
  updateSuccess: false,
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    reset(state) {
      state.success = false;
    },
    updateReset(state) {
      state.updateSuccess = false;
    },
  },
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
      state.productInfo = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(getProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createNewProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createNewProduct.fulfilled, (state, action) => {
      state.success = true;
      state.loading = false;
    });

    builder.addCase(createNewProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(updateProductById.pending, (state) => {});

    builder.addCase(updateProductById.fulfilled, (state, action) => {
      state.updateSuccess = true;
    });

    builder.addCase(updateProductById.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const productReducers = productSlice.reducer;

export const { reset, updateReset } = productSlice.actions;
