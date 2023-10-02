import { useParams } from "react-router-dom";
import { useFetch } from "../utils/util";
import ProductList from "../components/Products/ProductList";
import Loading from "../components/UI/Loading";
import CategoryProductList from "../components/Products/CategoryProductList";
const Category = () => {
  const { categoryName } = useParams();

  return <CategoryProductList category={categoryName} />;
};

export default Category;
