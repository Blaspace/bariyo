import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";

function Price({ items }) {
  const [itemsCost, setItemsCost] = useState(0);

  useEffect(() => {
    let i = 0;
    items?.forEach((element) => {
      i += element.price;
    });

    setItemsCost(i);
  }, [items]);

  return (
    <div className="w-[350px] bg-gray-100 rounded-md p-3 flex flex-col gap-2 max-h-[220px] sticky top-2">
      <span className="w-full flex justify-between">
        <p className="text-[14px] text-gray-400">{items?.length} Items:</p>{" "}
        <p>${itemsCost}</p>
      </span>
      <span className="w-full flex justify-between">
        <p className="text-[14px] text-gray-400">Delivery cost:</p> <p>$0</p>
      </span>
      <span className="w-full flex justify-between pb-1 border-b">
        <p className="text-[14px] text-gray-400">Tax:</p> <p>$0</p>
      </span>
      <span className="w-full flex justify-between pb-1 ">
        <p className="text-[20px]">Total:</p>{" "}
        <p className="text-[20px]">${itemsCost}</p>
      </span>
      <button className="h-[35px] border border-blue-500 bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-full hover:bg-transparent hover:text-blue-500">
        Checkout
      </button>
    </div>
  );
}

export default Price;
