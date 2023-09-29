import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
const ProductCard = ({ product }) => {
  return (
    <Link to={`/${product.id}`}>
      <div
        key={product.id}
        className=" flex flex-col group relative border rounded-3xl p-6 cursor-pointer hover:scale-105"
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 font-bold">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <div className="flex items-end gap-1.5 text-gray-500 text-sm">
          <Rating
            size={20}
            readonly
            allowFraction={true}
            initialValue={product.rating}
          />
          <span>{product.rating}</span>
        </div>
        <div className="mt-4 w-full">
          <Button className="w-full bg-[#4361EE] font-semibold py-3 text-sm text-white uppercase rounded-xl">Add to Cart</Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
