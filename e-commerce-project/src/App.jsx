import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import "./App.css";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import store from "./store";
import Footer from "./components/Footer/Footer";
import ProductSearch from "./pages/ProductSearch";
import SignInLayout from "./components/auth/signIn/SignInLayout";
import SignUpLayout from "./components/auth/signup/SignUpLayout";
import ForgotPasswordLayout from "./components/auth/forgotPassword/ForgotPasswordLayout";

// Rafet redux configure store ekleme denemesi
// import configureStore from "./redux/reducers/store/configureStore"

const router = createBrowserRouter([
  {
    path: "/",

    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":categoryName",
        element: <Category />,
      },
      {
        path: ":categoryName/:productId",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <ProductSearch />
      },
      {
        path: "signin",
        element: <SignInLayout />
      },
      {
        path: "signup",
        element: <SignUpLayout />
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordLayout />
      },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
