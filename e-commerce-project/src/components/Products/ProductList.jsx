import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { fetchAllProductData } from "../../store/all-products-slice";
import ProductCard from "./ProductCard";
import Button from "../UI/Button";
import Loading from "../UI/Loading";
import { getTotalPageNumbers } from "../../utils/util";

let maxPageNumber = 0;

const ProductList = (props) => {
  const dispatch = useDispatch();
  const [currentPageNum, setCurrentPageNum] = useState(1);
  useEffect(() => {
    dispatch(fetchAllProductData(currentPageNum));
  }, [dispatch, currentPageNum]);

  const productData = useSelector((state) => state.allProducts.productData);
  const loading = useSelector((state) => state.allProducts.loading);

  if (!maxPageNumber) {
    maxPageNumber = getTotalPageNumbers(productData.total, productData.limit);
  }
  const nextPageHandler = () => {
    setCurrentPageNum((prevPage) => prevPage + 1);
  };
  const prevPageHandler = () => {
    setCurrentPageNum((prevPage) => prevPage - 1);
  };

  return (
    <div className="px-28 pt-20">
      <Carousel useKeyboardArrows={true}>
    {productData.products && productData.products.length > 0 ? (
      productData.products.map((product) => (
        <Link to={`/${product.category}/${product.id}`} key={product.id}>
          <div>
            <img
              src={product.thumbnail}
              alt={`Product ${product.id}`}
              className="max-h-96 object-contain rounded"
            />
          </div>
        </Link>
      ))
    ) : (
      <div>No products to display.</div>
    )}
  </Carousel>
      <div className="mt-6 grid  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
        {loading && (
          <div className="col-span-full flex justify-center">
            <Loading />
          </div>
        )}
        {!loading &&
          productData.products.length > 0 &&
          productData?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      {currentPageNum <= maxPageNumber && (
        <div className="flex gap-2.5 justify-center items-center w-full mb-20 font-semibold">
          {currentPageNum !== 1 && (
            <Button
              className="bg-gradient-to-br from-[#8767e7] to-[#7209B7] hover:ring-1 hover:ring-purple-500"
              onClick={prevPageHandler}
            >
              <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#fff" }} />
            </Button>
          )}
          {currentPageNum !== maxPageNumber && (
            <Button
              className="bg-gradient-to-br from-[#8767e7] to-[#7209B7] hover:ring-1 hover:ring-purple-500"
              onClick={nextPageHandler}
            >
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fff" }} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
export default ProductList;
