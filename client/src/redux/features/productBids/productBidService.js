import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createNewProductBid = createAsyncThunk(
  "ProductBid/createNewBid",
  async (bidInfo, thunkAPI) => {
    let api = `http://localhost:5000/api/v1/bid`;

    try {
      const { data } = await axios.post(
        `${api}`,
        {
          productInfo: bidInfo.productInfo,
          userInfo: bidInfo.userInfo,
          amount: bidInfo.amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
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

export const getProductBid = createAsyncThunk(
  "ProductBid/getProductBid",
  async (productId, thunkAPI) => {
    let api = `http://localhost:5000/api/v1/bid?productInfo=${productId}`;

    try {
      const { data } = await axios.get(
        `${api}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
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

export const getUserBid = createAsyncThunk(
  "ProductBid/getUserBid",
  async (_, thunkAPI) => {
    const userId = thunkAPI.getState().authReducers.user._id;
    let api = `http://localhost:5000/api/v1/bid/${userId}`;

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
