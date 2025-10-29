import React from "react";
import { MdSearch } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function DropdownMenu({ drop, setDrop }) {
  return (
    <div
      className={`${
        drop ? "w-[90%]" : "w-0"
      } overflow-hidden fixed h-screen z-20  bg-black text-white top-0 left-0 transition-all`}
    >
      <br />
      <br />
      <ul className="flex relative list-none flex-col gap-2 p-2">
        <IoMdClose
          onClick={() => setDrop(false)}
          size={30}
          color="#ffffff"
          className="text-white absolute right-5 top-[-40px]"
        />
        <li className="p-2">
          <a href="/">Home</a>
        </li>
        <li className="p-2">
          <a href="/shop">All Products</a>
        </li>
        <li className="p-2">
          <a href="/profile">Orders</a>
        </li>
      </ul>
      <br />
      <section className="flex gap-2 p-2">
        <a href="/signup">
          <button className="h-[35px] w-[100px] bg-blue-500 rounded-md text-[#ffffff] text-[14px]">
            Sighn Up
          </button>
        </a>
        <a href="/login">
          <button className="h-[35px] w-[100px] bg-blue-500 rounded-md text-[#ffffff] text-[14px]">
            Login
          </button>
        </a>
      </section>
    </div>
  );
}

export default DropdownMenu;
