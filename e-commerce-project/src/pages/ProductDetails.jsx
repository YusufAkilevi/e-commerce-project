import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  return <>{productId}</>;
};
export default ProductDetails;
