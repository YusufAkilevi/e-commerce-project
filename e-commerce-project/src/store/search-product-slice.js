import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchProductData = createAsyncThunk(
  "products/fetchSearchProduct",
  async (searchParam) => {
    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + searchParam
    );
    const data = await response.json();

    return data;
  }
);

const searchProductSlice = createSlice({
  name: "searchProducts",
  initialState: {
    productData: { products: [] },
    loading: false,
    error: null,
    searchParam: "",
  },
  reducers: {
    getSearchParam(state, action) {
      state.searchParam = action.payload;
    },
  },
  extraReducers: (builder) => {
    //// FETCHING SEARCHED PRODUCT
    builder.addCase(fetchSearchProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.productData = action.payload;
    });
    builder.addCase(fetchSearchProductData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const searchProductActions = searchProductSlice.actions;
export default searchProductSlice.reducer;
