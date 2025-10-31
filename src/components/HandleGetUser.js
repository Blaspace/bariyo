import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";
import ProductContext from "../context/ProductContext";

function HandleGetUser() {
  const [loader, setLoading] = useState(false);
  const { user, setUser } = useContext(ProductContext);

  useEffect(() => {
    if (!user) {
      setLoading(true);
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
          } else {
            throw "We're having a server error, please try again";
          }
        })
        .then((data) => setUser(data))
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

export default HandleGetUser;
