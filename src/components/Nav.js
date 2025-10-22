import React from "react";
import { MdSearch } from "react-icons/md";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

function Nav() {
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
          <a href="/cart"><PiShoppingCartSimpleThin size={25} /></a>
          <button className="h-[35px] w-[100px] bg-blue-500 rounded-md text-[#ffffff] text-[14px]">
            Sighn Up
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
