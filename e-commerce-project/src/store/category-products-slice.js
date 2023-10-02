import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategoryProductData = createAsyncThunk(
  "products/fetchCategoryProducts",
  async (category) => {
    let url = "https://dummyjson.com/products/category/" + category;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
);

const categoryProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    productData: { products: [], total: 0, limit: 0 },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //// FETCHING CATEGORIES OF PRODUCT
    builder.addCase(fetchCategoryProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.productData = action.payload;
    });
    builder.addCase(fetchCategoryProductData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const categoryProductsActions = categoryProductsSlice.actions;

export default categoryProductsSlice.reducer;
