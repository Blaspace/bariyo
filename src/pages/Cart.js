import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Products from "../components/Products";
import ProductContext from "../context/ProductContext";
import Headers from "../components/Headers";
import CartItems from "../components/CartItems";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { products, user, setUser } = useContext(ProductContext);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );
    const navigate = useNavigate()


  useEffect(() => {
    if (!user) {
      fetch(`${process.env.REACT_APP_API_URL}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
          } else {
            throw "We're having a server error, please try again";
          }
        })
        .then((data) => setUser(data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <Nav />
      <Headers
        text={"Your cart"}
        p={`${items.length} Products in your cart`}
      />
      <CartItems />
      <Headers text={"Customers also bought these"} />
      <Products products={products} />
      <Footer />
    </>
  );
}

export default Cart;
