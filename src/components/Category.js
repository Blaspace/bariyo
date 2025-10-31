import React from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  const filter = [
    {
      image: require("../public/women.png"),
      name: "Women Fashion",
    },
    {
      image: require("../public/kids.png"),
      name: "Kids Fashion",
    },
    {
      image: require("../public/gadjet.png"),
      name: "Gardgets",
    },
    {
      image: require("../public/cat.png"),
      name: "Electronics",
    },
    {
      image: require("../public/home.png"),
      name: "Home Appliances",
    },
    {
      image: require("../public/cat.png"),
      name: "Computer",
    },
    {
      image: require("../public/jewl.png"),
      name: "Jewelry",
    },
    {
      image: require("../public/fabric.png"),
      name: "Fabrics",
    },
    {
      image: require("../public/clothes.png"),
      name: "Clothing",
    },
    {
      image: require("../public/cosmetic.png"),
      name: "Cosmetics/Beauty",
    },
    {
      image: require("../public/int.png"),
      name: "Interior",
    },
    {
      image: require("../public/soler.png"),
      name: "Solar Energy",
    },
    {
      image: require("../public/hair.png"),
      name: "Hair",
    },
    {
      image: require("../public/bag.png"),
      name: "Women Bags",
    },
    {
      image: require("../public/cat1.png"),
      name: "Men Shoes",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-5 pb-[30px]">
      <div className="w-[90%] max-w-[1750px] flex gap-9 justify-between items-center border-b pt-[20px] pb-[20px] overflow-x-scroll">
        {filter.map((value) => {
          return (
            <section
              className="w-[15%] min-w-[100px] md:min-w-[150px]"
              onClick={() => navigate(`/shop/${value.name}`)}
            >
              <img
                src={value?.image}
                alt="Gadget"
                className="w-full rounded-full"
              />
              <p className="text-center text-[14px]">{value?.name}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
