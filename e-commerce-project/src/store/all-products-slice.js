import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProductData = createAsyncThunk(
  "products/fetchAllProducts",
  async (curPage) => {
    let url =
      "https://dummyjson.com/products?limit=12" +
      "&skip=" +
      `${12 * (curPage - 1)}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    productData: { products: [], total: 0, limit: 0 },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //// FETCHING ALL PRODUCT
    builder.addCase(fetchAllProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.productData = action.payload;
    });
    builder.addCase(fetchAllProductData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const allProductActions = allProductsSlice.actions;

export default allProductsSlice.reducer;
