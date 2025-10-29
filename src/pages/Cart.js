import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Products from "../components/Products";
import ProductContext from "../context/ProductContext";
import Headers from "../components/Headers";
import CartItems from "../components/CartItems";

function Cart() {
  const { products } = useContext(ProductContext);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );
  return (
    <>
      <Nav />
      <Headers
        text={"Your cart"}
        p={`${items.length} Products in your cart`}
      />
      <CartItems />
      <Headers text={"Customers also bought these"} />
      <Products products={products.slice(0, 12)} />
      <Footer />
    </>
  );
}

export default Cart;
