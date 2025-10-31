import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";
import ProductContext from "../context/ProductContext";

function HandleGetProducts() {
  const [loader, setLoading] = useState(false);
  const { setProducts, products } = useContext(ProductContext);

  useEffect(() => {
    if (!products.length) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API_URL}/product/get`)
        .then((res) => res.json())
        .then((data) => setProducts(data?.products))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <Loader loading={loader} />
      <Outlet />
    </>
  );
}

export default HandleGetProducts;
