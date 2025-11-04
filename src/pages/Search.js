import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function Search() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/search?q=${params.search}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [params]);
  return (
    <>
      <Loader loading={loading} />
      <Nav />
      <Products products={product} />
      <Footer />
    </>
  );
}

export default Search;
