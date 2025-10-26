import React, { useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductContext from "../context/ProductContext";
import SingleProducts from "../components/SingleProduct";
import Products from "../components/Products";
import Headers from "../components/Headers";

function SingleProduct() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <Nav />
      <SingleProducts />
      <Headers text={"More products"} />
      <Products products={products.slice(0, 12)} />
      <Footer />
    </>
  );
}

export default SingleProduct;
