import React from "react";
import Sidebar from "./Sidebar";
import Orders from "./Orders";

function UserOrder() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[90%] max-w-[1750px] gap-4">
        <Orders />
      </div>
    </div>
  );
}

export default UserOrder;
