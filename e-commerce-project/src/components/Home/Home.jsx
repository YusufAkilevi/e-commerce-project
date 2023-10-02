import { useEffect, useState } from "react";
import ProductList from "../Products/ProductList";
import Loading from "../UI/Loading";
import { useFetch } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  return <ProductList />;
};
export default Home;
