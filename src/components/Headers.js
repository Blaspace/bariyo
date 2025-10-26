import React from "react";

function Headers({text, p}) {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className=" w-[90%] max-w-[1750px] ">
        <h1 className="font-bold text-[35px]">{text}</h1>
        <p className="text-[14px] text-gray-500">{p}</p>
      </div>
    </div>
  );
}

export default Headers;
