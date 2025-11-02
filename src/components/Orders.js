import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Orders() {
  const { user } = useContext(ProductContext);
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  
  useEffect(()=>{
if (!orders?.length) {
      fetch(`${process.env.REACT_APP_API_URL}/user/order`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
          } else {
            throw "We're having a server error, please try again";
          }
        })
        .then((data) => setOrders(data))
        .catch((err) => console.log(err));
    }
  }, [])
  return (
    <div className="w-full flex flex-col gap-5">
      {orders.length ? (
        <>
          {orders.map((value) => {
            return (
              <div className="w-full border rounded-md p-3">
                <div className="flex justify-between p-3 border-b ">
                  <section>
                    <h2 className="font-bold text-20">Order ID#: {value?.orderId}</h2>
                    <p className="flex gap-3 text-[14px] text-gray-500">
                      <span>{JSON.parse(value?.products[0])?.length} products,</span>
                      <span>{user?.name},</span>
                      <span>{value?.date.slice(0, 15)}</span>
                    </p>
                  </section>
                  <section>
                    <CiMenuKebab size={20} />
                  </section>
                </div>
                <div className="p-3 flex gap-6 border-b">
                  <div className="flex flex-col text-gray-500">
                    <p>Status:</p>
                    <p>Delivery date:</p>
                    <p>Delivery to:</p>
                    <p className="font-bold">Total:</p>
                  </div>
                  <div className="flex flex-col text-gray-700">
                    <p className="text-orange-400">{value?.status}</p>
                    <p>{value?.deliveryDate}</p>
                    <p>{JSON.parse(value?.location).street}, {JSON.parse(value?.location).city}, {JSON.parse(value?.location).country} </p>
                    <p className="font-bold">&#8358;{value?.total?.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {JSON.parse(value?.products[0])?.map((v) => {
                    return (
                      <div className="flex p-2 justify-between flex-2 w-[45%] min-w-[300px]">
                        <div className="flex gap-2">
                          <img
                            src={v.images[0]}
                            alt="product"
                            className="w-[100px] rounded-md  h-[100px]"
                          />
                          <span>
                            <p className="font-bold">{v.name}</p>
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
                            <p>&#8358;{v.price.toLocaleString()}</p>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="w-full border rounded-md p-3 flex flex-col items-center gap-3">
          <p className="font-bold">You have not placed any order</p>
          <a href="/shop">
            <button className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-[100px] hover:bg-transparent hover:text-blue-500">
              Shop now
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Orders;
