import React, { useContext, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import ProductContext from "../context/ProductContext";
import { CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import DropdownMenu from "./DropdownMenu";

function Nav() {
  const { cartItems } = useContext(ProductContext);
  const [drop, setDrop] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    const str = localStorage.getItem("token");
    setToken(str);
  }, []);
  return (
    <>
      <nav className="h-[70px] flex justify-center items-center shadow-sm bg-white">
        <div className="w-[90%] max-w-[1750px] flex justify-between items-center">
          <a href="/">
            <p className="font-bold">Logo</p>
          </a>
          <section className="w-1/2 border border-[lightgrey] h-[35px] rounded-md p-1 hidden justify-between md:flex">
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
          <ul className="hidden gap-[40px] items-center text-[14px] md:flex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop/all">All Products</a>
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
          <ul className="flex gap-[40px] items-center text-[14px] md:hidden">
            <a href="/cart" className="relative">
              <span className="absolute top-0 right-[-3px] bg-gray-200 h-[17px] flex justify-center items-center w-[17px] rounded-full text-[12px]">
                {cartItems?.length}
              </span>
              <PiShoppingCartSimpleThin size={30} />
            </a>
            <li onClick={() => setDrop(!drop)}>
              <IoIosMenu size={35} />
            </li>
          </ul>
        </div>
      </nav>
      <DropdownMenu drop={drop} setDrop={setDrop} />
    </>
  );
}

export default Nav;
