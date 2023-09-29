import { useParams } from "react-router-dom";
import { useFetch } from "../utils/util";
import ProductList from "../components/Products/ProductList";
import Loading from "../components/UI/Loading";
const Category = () => {
  const { categoryName } = useParams();
  const { productsList, isFetching } = useFetch(
    "https://dummyjson.com/products/category/" + categoryName
  );
  return (
    <div className="px-28 flex flex-col items-center pt-20">
      {isFetching && <Loading />}
      {productsList.length > 0 && !isFetching && (
        <ProductList products={productsList} />
      )}
    </div>
  );
};

export default Category;
