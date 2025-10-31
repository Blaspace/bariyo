import React, { useContext, useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import ProductContext from "../context/ProductContext";
import Popup from "./Popup";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function Products({ products }) {
  const { setCartItems } = useContext(ProductContext);
  const [message, setMessage] = useState();

  const handleAddToCart = (product) => {
    const existingItems = localStorage.getItem("cartItems");
    const items = JSON.parse(existingItems);

    if (existingItems) {
      const list = JSON.parse(existingItems);
      const item = list.filter(
        (value) => value.images[0] === product.images[0]
      );
      if (!item.length) {
        product.num = 1;
        const newItems = [product, ...list];
        const string = JSON.stringify(newItems);
        localStorage.setItem("cartItems", string);
        setCartItems(newItems);
        setMessage("Product successfully added to cart");
      } else {
        setMessage(`This Product has already added to your cart`);
      }
    } else {
      product.num = 1;
      const newItems = [product];
      const string = JSON.stringify(newItems);
      localStorage.setItem("cartItems", string);
      setCartItems(newItems);
    }
  };

  return (
    <>
      <Popup message={message} setMessage={setMessage} />
      <div className="w-full flex justify-center mb-4">
        <div className="flex flex-wrap w-[95%] md:w-[90%] max-w-[1750px] justify-between gap-1">
          {products?.map((value) => {
            return (
              <section
                className="w-[49%] shadow-md mb-2 md:mb-8 flex flex-col md:min-w-[200px] rounded-md p-1 border md:w-[22%]"
                key={value?.name}
              >
                <a className="w-full" href={`/product/${value?._id}`}>
                  <img
                    src={value?.images[0]}
                    className="w-full object-cover rounded-lg h-[150px] md:h-[200px]"
                    alt="product"
                  />
                </a>
                <p className="text-[14px] text-gray-600 ">{value?.name}</p>
                <span className="flex gap-1 text-orange-400">
                  <IoIosStar size={16} />
                  <IoIosStar size={16} />
                  <IoIosStar size={16} />
                  <IoIosStarOutline size={16} className="text-gray-600" />
                  <p className="text-[13px] text-gray-400 ml-3">(65 peaple)</p>
                </span>
                <span className="text-blue-500 text-[16px] font-bold">
                  &#8358;{value?.price.toLocaleString()}
                </span>
                <button
                  className="h-[30px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[14px] flex gap-1 justify-center items-center w-full hover:bg-transparent hover:text-blue-500"
                  onClick={() => handleAddToCart(value)}
                >
                  <MdAddShoppingCart size={20} /> Add to cart
                </button>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
