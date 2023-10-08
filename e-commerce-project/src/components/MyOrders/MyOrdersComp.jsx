import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

import Order from "./Order";
const orders = [
  {
    id: 1,
    title: "Order 1",
    products: [
      {
        brand: "Apple",
        id: 1,
        image: "https://i.dummyjson.com/data/products/2/1.jpg",
        price: 899,
        quantity: 1,
        title: "iPhone X",
        totalPrice: 899,
      },
      {
        brand: "Samsung",
        id: 3,
        image: "https://i.dummyjson.com/data/products/3/1.jpg",
        price: 1249,
        quantity: 1,
        title: "Samsung Universe 9",
        totalPrice: 1249,
      },
      {
        brand: "OPPO",
        id: 4,
        image: "https://i.dummyjson.com/data/products/4/1.jpg",
        price: 280,
        quantity: 1,
        title: "OPPOF19",
        totalPrice: 280,
      },
    ],
    totalAmount: 2428,
    totalQuantity: 3,
    date: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
  },
  {
    id: 2,
    title: "Order 2",
    products: [
      {
        brand: "Apple",
        id: 1,
        image: "https://i.dummyjson.com/data/products/2/1.jpg",
        price: 899,
        quantity: 1,
        title: "iPhone X",
        totalPrice: 899,
      },
      {
        brand: "Samsung",
        id: 3,
        image: "https://i.dummyjson.com/data/products/3/1.jpg",
        price: 1249,
        quantity: 1,
        title: "Samsung Universe 9",
        totalPrice: 1249,
      },
      {
        brand: "OPPO",
        id: 4,
        image: "https://i.dummyjson.com/data/products/4/1.jpg",
        price: 280,
        quantity: 1,
        title: "OPPOF19",
        totalPrice: 280,
      },
    ],
    totalAmount: 2428,
    totalQuantity: 3,
    date: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
  },
  {
    id: 3,
    title: "Order 3",
    date: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    products: [
      {
        brand: "Apple",
        id: 1,
        image: "https://i.dummyjson.com/data/products/2/1.jpg",
        price: 899,
        quantity: 1,
        title: "iPhone X",
        totalPrice: 899,
      },
      {
        brand: "Samsung",
        id: 3,
        image: "https://i.dummyjson.com/data/products/3/1.jpg",
        price: 1249,
        quantity: 1,
        title: "Samsung Universe 9",
        totalPrice: 1249,
      },
      {
        brand: "OPPO",
        id: 4,
        image: "https://i.dummyjson.com/data/products/4/1.jpg",
        price: 280,
        quantity: 1,
        title: "OPPOF19",
        totalPrice: 280,
      },
    ],
    totalAmount: 2428,
    totalQuantity: 3,
  },
];
const MyOrdersComp = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const orderExpandHandler = (e) => {
    console.log(e.target.id, expandedOrder);
    if (e.target.id == expandedOrder) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(e.target.id);
    }
  };
  return (
    <div className="py-5 px-5 sm:px-60  sm:py-20 ">
      <h1 className="font-bold text-2xl mb-10">My Orders</h1>
      <ul className="flex flex-col gap-5">
        {orders.map((order) => (
          <li
            className="bg-slate-300 p-2.5 sm:p-5 rounded flex  items-center justify-between w-full"
            key={order.id}
          >
            <div className="flex flex-col items-center w-full">
              <div className="flex  items-center justify-between gap-5 w-full">
                <div>
                  <p className="font-semibold text-lg sm:text-xl">
                    {order.title}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-md sm:text-lg text-gray-500">
                    {order.date}
                  </p>
                </div>
                <div className="flex items-center gap-1 sm:gap-5">
                  <div>
                    <p className="font-bold text-lg sm:text-xl">
                      ${order.totalAmount}
                    </p>
                  </div>
                  <motion.button
                    animate={{ rotate: order.id == expandedOrder ? 180 : 0 }}
                    className="p-2.5 flex gap-2.5 w-full"
                    id={order.id}
                    onClick={orderExpandHandler}
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ color: "#4361EE", pointerEvents: "none" }}
                    />
                  </motion.button>
                </div>
              </div>
              <AnimatePresence>
                {expandedOrder == order.id && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-5 pt-10"
                  >
                    {order.products.map((product) => (
                      <Order key={product.id} product={product} />
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MyOrdersComp;
