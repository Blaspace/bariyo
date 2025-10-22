import React, { useContext } from "react";
import Nav from "../components/Nav";
import Products from "../components/Products";
import Footer from "../components/Footer";
import ProductContext from "../context/ProductContext";
import Headers from "../components/Headers";
import Filter from "../components/Filter";

function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <Nav />
      <br/>
      <Headers text={"All Product"} />
      <Filter/>
      <Products products={products} />
      <Footer />
    </>
  );
}

export default Shop;
