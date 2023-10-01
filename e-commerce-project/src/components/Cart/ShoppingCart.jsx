import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>ShoppingCart</h1>
      <p>{cart.totalAmount}</p>
      <p>{cart.totalQuantity}</p>
    </div>
  );
};
export default ShoppingCart;
