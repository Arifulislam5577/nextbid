import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "Products/getProducts",
  async (productData, thunkAPI) => {
    const {
      page = 1,
      category = "",
      keyword = "",
      value = [0, 10000],
      isFeatured = false,
      isSold = false,
      limit = 6,
      sort = "",
    } = productData;

    let api = `http://localhost:5000/api/v1/products?newPrice[gte]=${
      value[0]
    }&newPrice[lte]=${value[1]}&searchBy=${keyword}&page=${page}&sort=${
      sort === "dsc" ? "newPrice" : sort === "asc" ? "-newPrice" : ""
    }&isSold=${isSold}${isFeatured ? "&isFeatured=true" : ""}${
      limit === 3 ? "&limit=3" : "&limit=6"
    }`;

    if (category) {
      api = `http://localhost:5000/api/v1/products?category=${category}&newPrice[lte]=${
        value[1]
      }&searchBy=${keyword}&page=${page}&sort=${
        sort === "dsc" ? "newPrice" : sort === "asc" ? "-newPrice" : ""
      }`;
    }
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

export const createNewProduct = createAsyncThunk(
  "Products/createProduct",
  async (productInfo, thunkAPI) => {
    let api = `http://localhost:5000/api/v1/products`;
    const {
      name,
      description,
      coverPhoto,
      newPrice,
      category,
      lastDate,
      sellerInfo,
    } = productInfo;
    try {
      const { data } = await axios.post(
        `${api}`,
        {
          name,
          description,
          coverPhoto,
          newPrice,
          category,
          lastDate,
          sellerInfo,
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

export const getProductById = createAsyncThunk(
  "Products/getProductsById",
  async (productId, thunkAPI) => {
    let api = `http://localhost:5000/api/v1/products/${productId}`;

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

export const updateProductById = createAsyncThunk(
  "Products/updateProductsById",
  async (productId, thunkAPI) => {
    let api = `http://localhost:5000/api/v1/products/${productId}`;

    try {
      const { data } = await axios.patch(
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

export const getUserProduct = createAsyncThunk(
  "Products/getUserProduct",
  async (pageNumber, thunkAPI) => {
    const sellerId = thunkAPI.getState().authReducers.user._id;
    let api = `http://localhost:5000/api/v1/products?page=${pageNumber}&sellerInfo=${sellerId}`;

    try {
      const { data } = await axios.get(
        `${api}`,

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
