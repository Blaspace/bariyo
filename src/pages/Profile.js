import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Headers from "../components/Headers";
import ProductContext from "../context/ProductContext";
import Orders from "../components/Orders";
import UserOrder from "../components/UserOrder";

function Profile() {
  const { user, setUser } = useContext(ProductContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      fetch("http://localhost:5000/user", {
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
      <Headers text={"Your Account"} p={`${user?.name}, ${user?.email}`} />
      <UserOrder />
      <Footer />
    </>
  );
}

export default Profile;
