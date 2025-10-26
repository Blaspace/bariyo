import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { TfiPowerOff } from "react-icons/tfi";

function Sidebar() {
  return (
    <div className="w-[20%] ">
      <ul className="flex flex-col w-full gap-3">
        <li className="p-2 rounded-md flex gap-2 font-bold text-[14px] text-gray-600 border">
          <FiShoppingBag size={20} className="text-blue-500" />
          Orders
        </li>
        <li className="p-2 rounded-md flex gap-2 font-bold text-[14px] text-gray-600 border">
          <CiCreditCard1 size={20} className="text-blue-500"/>
          Payment
        </li>
        <li className="p-2 rounded-md flex gap-2 font-bold text-[14px] text-gray-600 border">
          <TfiPowerOff size={20} className="text-red-500"/> Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
