import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ProductCard from "./ProductCard";
import Button from "../UI/Button";
const ProductList = (props) => {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
        {props.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {props.curPage <= props.maxPage && (
<<<<<<< HEAD
        <div className="flex gap-2.5 justify-center items-center w-full mb-20 font-semibold">
          {props.curPage !== 1 && (
            <Button
              className="bg-gradient-to-br from-[#8767e7] to-[#7209B7] hover:ring-1 hover:ring-purple-500"
              onClick={props.onBack}
            >
              <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#fff" }} />
            </Button>
          )}
=======
        <div className="flex gap-2.5 justify-center items-center w-full mb-20">
          {props.curPage !== 1 && <Button onClick={props.onBack}>Back</Button>}
>>>>>>> dev
          {props.curPage !== props.maxPage && (
            <Button
              className="bg-gradient-to-br from-[#8767e7] to-[#7209B7] hover:ring-1 hover:ring-purple-500"
              onClick={props.onNext}
            >
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fff" }} />
            </Button>
          )}
        </div>
      )}
    </>
  );
};
export default ProductList;
