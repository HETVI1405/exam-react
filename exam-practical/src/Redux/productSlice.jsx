import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000/product";

export const fetchproduct = createAsyncThunk("product/fetchproduct", async () => {
  const res = await axios.get(URL);
  return res.data;
});

export const addproduct = createAsyncThunk("products/addproduct", async (product) => {
  const res = await axios.post(URL, product);
  return res.data;
});

export const deleteproduct = createAsyncThunk("products/deleteproduct", async (id) => {
  await axios.delete(`${URL}/${id}`);
  return id;
});

export const editproduct = createAsyncThunk(
  "products/editproduct",
  async ({ id, updatedData }) => {
    const res = await axios.put(`${URL}/${id}`, updatedData);
    return res.data;
  }
);

const initialState = {
  allproducts: [],
  status: "loading",
  error: null,
  products: []
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchproduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchproduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allproducts = action.payload;
        state.products = action.payload;
      })
      .addCase(fetchproduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addproduct.fulfilled, (state, action) => {
        state.allproducts.push(action.payload);
        state.products.push(action.payload);
      })
      .addCase(deleteproduct.fulfilled, (state, action) => {
        state.allproducts = state.allproducts.filter((p) => p.id !== action.payload);
        state.products = state.products.filter((p) => p.id !== action.payload);
      })
      .addCase(editproduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.allproducts = state.allproducts.map((p) =>
          p.id === updatedProduct.id ? updatedProduct : p
        );
        state.products = state.products.map((p) =>
          p.id === updatedProduct.id ? updatedProduct : p
        );
      });
  },
});

export default ProductSlice.reducer;
