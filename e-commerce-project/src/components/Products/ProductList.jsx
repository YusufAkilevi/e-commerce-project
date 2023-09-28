import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
        {props.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex gap-2.5 justify-center items-center w-full mb-20">
        {props.curPage !== 1 && (
          <button onClick={props.onBack} className="border px-5 py-2 rounded">
            Back
          </button>
        )}
        {props.curPage !== props.maxPage && (
          <button onClick={props.onNext} className="border px-5 py-2 rounded">
            Next
          </button>
        )}
      </div>
    </>
  );
};
export default ProductList;
