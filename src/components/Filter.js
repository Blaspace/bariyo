import React, { useContext, useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import Loader from "./Loader";

function Filter() {
  const { setProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState();
  const category = [
    "Women Fashion",
    "Kids Fashion",
    "Gadgets",
    "Electronics",
    "Home Appliances",
    "Computers",
    "Jewelry",
    "Fabrics",
    "Clothing",
    "Cosmetics & Beauty",
    "Interior",
    "Solar Energy",
    "Hair",
    "Women Bags",
    "Men Shoes",
  ];

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_API_URL}/product/get?category=${params.category}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data?.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [params]);

  return (
    <>
      <Loader loading={loading} />
      <div className="w-full flex justify-center mb-10">
        <div className=" w-[90%] max-w-[1750px] flex justify-between">
          <ul className="flex items-center gap-5">
            <span className="border rounded-full w-[200px] p-1 text-gray-500">
              <select
                className="focus:outline-none w-full bg-transparent"
                onChange={(e) => navigate(`/shop/${e.target.value}`)}
              >
                <option value={"all"}>All</option>
                {category.map((value) => {
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Filter;
