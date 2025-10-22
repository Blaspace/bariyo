import React, { useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Products from "../components/Products";
import ProductContext from "../context/ProductContext";
import Headers from "../components/Headers";
import CartItems from "../components/CartItems";

function Cart() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <Nav />
      <Headers
        text={"Your cart"}
        p={`${products.length} Products in your cart`}
      />
      <CartItems />
      <Headers text={"Customers also bought these"} />
      <Products products={products.slice(0, 12)} />
      <Footer />
    </>
  );
}

export default Cart;
