import { useParams } from "react-router-dom";
import { useFetch } from "../utils/util";
import ProductList from "../components/Products/ProductList";
const categories = {
  electronics: ["smartphones", "laptops", "automotive", "motorcycle"],
  "personal-care": ["fragrances", "skincare"],
  groceries: ["groceries"],
  "home-decoration": ["home-decoration", "furniture", "lighting"],
  clothes: [
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
  ],
  accessories: [
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
  ],
};
const Category = () => {
  const { categoryName } = useParams();
  //   let products = [];
  //   let isFetching, totalPageNum;
  //   categories[categoryName].forEach((category) => {
  //     let url = "https://dummyjson.com/products/category/" + category;
  //     const response = useFetch(url);

  //     products = [...products, ...response.productsList];
  //   });

  return <>{categoryName}</>;
};

export default Category;
