import React from "react";

function Category() {
  return (
    <div className="flex flex-col items-center justify-center pt-5 pb-[30px]">
      <div className="w-[90%] max-w-[1750px] flex justify-between items-center border-b pb-[80px]">
        <section className="w-[15%] ">
          <img
            src={require("../public/cat.png")}
            alt="Gadget"
            className="w-full rounded-full"
          />
          <p className="text-center text-[14px]">Gadgets</p>
        </section>
        <section className="w-[15%] ">
          <img
            src={require("../public/cat1.png")}
            alt="Gadget"
            className="w-full rounded-full"
          />
          <p className="text-center text-[14px]">Shoes</p>
        </section>
        <section className="w-[15%] ">
          <img
            src={require("../public/cat2.png")}
            alt="Gadget"
            className="w-full rounded-full"
          />
          <p className="text-center text-[14px]">Bags</p>
        </section>
        <section className="w-[15%] ">
          <img
            src={require("../public/cat3.png")}
            alt="Gadget"
            className="w-full rounded-full"
          />
          <p className="text-center text-[14px]">Accesories</p>
        </section>
        <section className="w-[15%]">
          <img
            src={require("../public/cat4.png")}
            alt="Gadget"
            className="w-full rounded-full"
          />
          <p className="text-center text-[14px]">Mens Wear</p>
        </section>
      </div>
    </div>
  );
}

export default Category;
