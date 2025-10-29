import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Orders() {
  const { user } = useContext(ProductContext);
  const product = [
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      rating: 5,
      images: [require("../public/1.png")],
      id: 1,
    },

    {
      name: "Latest London collections of Shoe",
      price: 20000,
      rating: 3,
      images: [require("../public/2.png")],
      id: 2,
    },

    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/3.png")],
      rating: 4,
      id: 3,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/4.png")],
      rating: 3,
      id: 4,
    },
  ];

  const orders = [
    {
      id: 123,
      status: "on the way",
      total: "usd 350",
      address: "new york, new way",
      date: "jan 12 2025",
      deliveryDate: "Jan 15 2025",
      product,
    },
    {
      id: 123,
      status: "on the way",
      total: "usd 350",
      address: "new york, new way",
      date: "jan 12 2025",
      deliveryDate: "Jan 15 2025",
      product,
    },
    {
      id: 123,
      status: "on the way",
      total: "usd 350",
      address: "new york, new way",
      date: "jan 12 2025",
      deliveryDate: "Jan 15 2025",
      product,
    },
  
    ];
  return (
    <div className="w-full flex flex-col gap-5">
      {orders.length ? (
        <>
          {orders.map((value) => {
            return (
              <div className="w-full border rounded-md p-3">
                <div className="flex justify-between p-3 border-b ">
                  <section>
                    <h2 className="font-bold text-20">Order #: {value?.id}</h2>
                    <p className="flex gap-3 text-[14px] text-gray-500">
                      <span>{value?.product?.length} products,</span>
                      <span>{user?.name},</span>
                      <span>{value?.date}</span>
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
                    <p>{value?.address}</p>
                    <p className="font-bold">{value?.total}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {value?.product?.map((v) => {
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
                            <p>${v.price}</p>
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
