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

export const createPayment = createAsyncThunk(
  "Order/createPayment",
  async (orderId, thunkAPI) => {
    let api = `http://localhost:5000/api/v1/order/${orderId}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    try {
      const { data } = await axios.post(`${api}`, {}, config);
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

export const updatePayment = createAsyncThunk(
  "Order/updatePayment",
  async (orderToken, thunkAPI) => {
    let api = `http://localhost:5000/api/v1/order/success?token=${orderToken}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    try {
      const { data } = await axios.patch(`${api}`, {}, config);
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
