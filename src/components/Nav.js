import React, { useContext, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import ProductContext from "../context/ProductContext";
import { CiUser } from "react-icons/ci";

function Nav() {
  const { cartItems } = useContext(ProductContext);
  const [token, setToken] = useState("");
  useEffect(() => {
    const str = localStorage.getItem("token");
    setToken(str);
  }, []);
  return (
    <nav className="h-[70px] flex justify-center items-center shadow-sm bg-white">
      <div className="w-[90%] max-w-[1750px] flex justify-between items-center">
        <p className="font-bold">Logo</p>
        <section className="w-1/2 border border-[lightgrey] h-[35px] rounded-md p-1 flex justify-between">
          <input
            type="text"
            placeholder="Search Products"
            className="h-full w-[90%] focus:border-none focus:outline-none"
          />
          <b className="h-full border border-[lightgrey]"></b>
          <span className="h-full w-[10%] flex justify-center items-center text-[grey] hover:text-black">
            <MdSearch size={20} />
          </span>
        </section>
        <ul className="flex gap-[40px] items-center text-[14px]">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">All Products</a>
          </li>
          <a href="/cart" className="relative">
            <span className="absolute top-0 right-[-3px] bg-gray-200 h-[17px] flex justify-center items-center w-[17px] rounded-full text-[12px]">
              {cartItems?.length}
            </span>
            <PiShoppingCartSimpleThin size={30} />
          </a>
          {token?.length ? (
            <a href="/profile">
              <CiUser size={25} />
            </a>
          ) : (
            <a href="/signup">
              <button className="h-[35px] w-[100px] bg-blue-500 rounded-md text-[#ffffff] text-[14px]">
                Sighn Up
              </button>
            </a>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
