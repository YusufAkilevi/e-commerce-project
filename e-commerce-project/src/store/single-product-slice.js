import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductData = createAsyncThunk(
  "products/fetchProduct",
  async (productId) => {
    let url = "https://dummyjson.com/products/" + productId;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    productData: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //// FETCHING SINGLE PRODUCT
    builder.addCase(fetchProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.productData = action.payload;
    });
    builder.addCase(fetchProductData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const singleProductActions = singleProductSlice.actions;

export default singleProductSlice.reducer;
