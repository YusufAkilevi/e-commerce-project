import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import singleProductSlice from "./single-product-slice";
import allProductsSlice from "./all-products-slice";
import categoryProductsSlice from "./category-products-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    singleProduct: singleProductSlice,
    allProducts: allProductsSlice,
    categoryProducts: categoryProductsSlice,
  },
});
export default store;
