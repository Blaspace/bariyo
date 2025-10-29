import React from "react";
import { BiSort } from "react-icons/bi";

function Filter() {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className=" w-[90%] max-w-[1750px] flex justify-between">
        <ul className="flex items-center gap-5">
          <span className="border rounded-full w-[200px] p-1 text-gray-500">
            <select className="focus:outline-none w-full bg-transparent">
              <option>Category</option>
              <option>SHoes</option>
              <option>Bags</option>
              <option>Mens wear</option>
              <option>Gadget</option>
            </select>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
