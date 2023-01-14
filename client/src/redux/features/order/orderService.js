import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserOrders = createAsyncThunk(
  "Order/getOrder",
  async (orderData, thunkAPI) => {
    const userId = thunkAPI.getState().authReducers.user._id;
    let api = `http://localhost:5000/api/v1/order?buyerInfo=${userId}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    try {
      const { data } = await axios.get(`${api}`, config);
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
