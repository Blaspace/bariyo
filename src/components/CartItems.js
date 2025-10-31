import React, { useContext, useEffect, useState } from "react";
import Price from "./Price";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import ProductContext from "../context/ProductContext";

function CartItems() {
  const { cartItems, setCartItems } = useContext(ProductContext);

  const handleRemoveItems = (img) => {
    const newArr = cartItems.filter((value) => value.images[0] !== img[0]);
    const string = JSON.stringify(newArr);
    localStorage.setItem("cartItems", string);
    setCartItems(newArr);
  };

  const handleIncrease = (img) => {
    const newArr = [];
    for (let i = 0; i < cartItems.length; i++) {
      let value = cartItems[i];
      if (value.images[0] === img[0]) {
        cartItems[i].num = cartItems[i].num + 1;
        newArr.push(value);
      } else {
        newArr.push(value);
      }
    }
    const string = JSON.stringify(newArr);
    localStorage.setItem("cartItems", string);
    setCartItems(newArr);
  };

  const handleDecrease = (img) => {
    const newArr = [];
    for (let i = 0; i < cartItems.length; i++) {
      let value = cartItems[i];
      if (value.images[0] === img[0] && value.num > 1) {
        value.num -= 1;
        newArr.push(value);
      } else {
        newArr.push(value);
      }
    }
    const string = JSON.stringify(newArr);
    localStorage.setItem("cartItems", string);
    setCartItems(newArr);
  };

  return (
    <div className="w-full flex justify-center mb-10">
      <div className=" w-[90%] max-w-[1750px] flex flex-col justify-between gap-5 md:flex-row">
        <div className="border flex-1 rounded-md p-3">
          {cartItems?.length ? (
            <>
              {cartItems?.map((value) => {
                return (
                  <div className="flex p-2 border-b justify-between ">
                    <div className="flex gap-2 flex-col md:flex-row">
                      <img
                        src={value?.images[0]}
                        alt="product"
                        className="w-[100px] rounded-md  h-[100px]"
                      />
                      <span>
                        <p className="font-bold text-[14px]">{value?.name}</p>
                        <span className="flex gap-1 text-orange-400">
                          <IoIosStar size={16} />
                          <IoIosStar size={16} />
                          <IoIosStar size={16} />
                          <IoIosStarOutline
                            size={16}
                            className="text-gray-600"
                          />
                          <p className="text-[13px] text-gray-400 ml-3">
                            (65 peaple)
                          </p>
                        </span>
                        <p>&#8358;{(value?.price * value.num).toLocaleString()}</p>
                      </span>
                    </div>
                    <section className="flex flex-col gap-5 items-end">
                      <span className="w-[100px] h-[35px] border rounded-md flex justify-between">
                        <button
                          onClick={() => handleIncrease(value?.images)}
                          className="p-3 text-[25px] bg-gray-100 flex justify-center items-center"
                        >
                          +
                        </button>
                        {value?.num}
                        <button
                          onClick={() => handleDecrease(value?.images)}
                          className="p-3 text-[25px] bg-gray-100 flex justify-center items-center"
                        >
                          -
                        </button>
                      </span>
                      <FaRegTrashAlt
                        size={20}
                        color="red"
                        onClick={() => handleRemoveItems(value?.images)}
                      />
                    </section>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="h-full w-full flex justify-center items-center">
              <p className="text-[20px] font-bold">Your cart is empty</p>
            </div>
          )}
        </div>
        <Price items={cartItems} />
      </div>
    </div>
  );
}

export default CartItems;
