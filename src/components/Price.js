import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { PaystackButton } from "react-paystack";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";

function Price({ items }) {
  const [itemsCost, setItemsCost] = useState(0);
  const [message, setMessage] = useState();
  const { user } = useContext(ProductContext);
  const navigate = useNavigate();
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const metadata = {
    name: user?.name,
    phone: user?.phone,
    email: user?.email,
    userId: user?._id,
    location: user?.address[0],
    products: [...items],
  };

  const componentProps = {
    email: user?.email,
    amount: itemsCost * 100,
    metadata,
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      setMessage("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  useEffect(() => {
    let i = 0;
    items?.forEach((element) => {
      i += element.price * element.num;
    });

    setItemsCost(i);
  }, [items]);

  return (
    <>
      <Popup message={message} setMessage={setMessage} />
      <div className="md:w-[350px]  border rounded-md p-3 flex flex-col gap-2 max-h-[220px] sticky top-2">
        <span className="w-full flex justify-between">
          <p className="text-[14px] text-gray-400">{items?.length} Items:</p>{" "}
          <p>&#8358;{itemsCost}</p>
        </span>
        <span className="w-full flex justify-between">
          <p className="text-[14px] text-gray-400">Delivery cost:</p>{" "}
          <p>&#8358;0</p>
        </span>
        <span className="w-full flex justify-between pb-1 border-b">
          <p className="text-[14px] text-gray-400">Tax:</p>{" "}
          <p>&#8358;{(itemsCost * 1.5) % +100}</p>
        </span>
        <span className="w-full flex justify-between pb-1 ">
          <p className="text-[20px]">Total:</p>{" "}
          <p className="text-[20px]">&#8358;{itemsCost}</p>
        </span>
        {user ? (
          <PaystackButton
            className="h-[35px] border border-blue-500 bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-full hover:bg-transparent hover:text-blue-500"
            {...componentProps}
          />
        ) : (
          <button
            className="h-[35px] border border-blue-500 bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-full hover:bg-transparent hover:text-blue-500"
            onClick={() => navigate("/login")}
          >
            Pay Now
          </button>
        )}
      </div>
    </>
  );
}

export default Price;
