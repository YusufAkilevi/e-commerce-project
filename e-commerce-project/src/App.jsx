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
      { path: "search", element: <ProductSearch /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  );
}

export default App;
