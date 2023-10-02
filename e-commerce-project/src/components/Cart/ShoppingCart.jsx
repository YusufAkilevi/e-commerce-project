import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <div>
      <h1>ShoppingCart</h1>
      <ul className="flex flex-col">
        {cart.items.map((item) => (
          <li key={item.id} className="flex gap-5">
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShoppingCart;
