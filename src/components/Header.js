import React from "react";
import img from "../public/h.jpg";

function Header() {
  return (
    <header className="w-full h-[90vh] flex justify-center items-center">
      <div
        className="h-[90%] w-[90%] max-w-[1750px] rounded-lg items-center flex flex-col bg-gray-400 bg-blend-multiply justify-center p-5 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="text-[60px] text-[#ffffff] font-bold text-center">
          Shop Smart
          <br /> Dress Better, Live Bold
        </h1>
      </div>
    </header>
  );
}

export default Header;
