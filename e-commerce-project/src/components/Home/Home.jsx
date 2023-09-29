import { useEffect, useState } from "react";
import ProductList from "../Products/ProductList";
import Loading from "../UI/Loading";
import { useFetch } from "../../utils/util";

const Home = () => {
  const [currentPageNum, setCurrentPageNum] = useState(1);
  let prodList = "&skip=" + `${12 * (currentPageNum - 1)}`;

  const { productsList, isFetching, totalPageNum } = useFetch(
    "https://dummyjson.com/products?limit=12" + prodList
  );
  const nextPageHandler = () => {
    setCurrentPageNum((prevPage) => prevPage + 1);
  };
  const prevPageHandler = () => {
    setCurrentPageNum((prevPage) => prevPage - 1);
  };

  return (
    <div className="px-28 flex flex-col items-center pt-20">
      {isFetching && <Loading />}
      {productsList.length > 0 && !isFetching && (
        <ProductList
          onNext={nextPageHandler}
          onBack={prevPageHandler}
          curPage={currentPageNum}
          maxPage={totalPageNum}
          products={productsList}
        />
      )}
    </div>
  );
};
export default Home;
