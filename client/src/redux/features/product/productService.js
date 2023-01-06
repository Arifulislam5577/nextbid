import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "Products/getProducts",
  async (productData, thunkAPI) => {
    const { page, category, keyword } = productData;

    let api = `http://localhost:5000/api/v1/products?page=${page}&name=${keyword}`;

    if (category) {
      api = `http://localhost:5000/api/v1/products?category=${category}`;
    }
    try {
      const { data } = await axios.get(
        `${api}`,
        {},
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
