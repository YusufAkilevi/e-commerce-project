import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import "./App.css";
import Category from "./pages/Category";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
