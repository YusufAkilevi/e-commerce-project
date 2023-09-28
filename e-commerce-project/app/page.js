import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <h1>HomePage</h1>;
}
