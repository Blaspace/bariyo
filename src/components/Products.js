import React, { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import ProductContext from "../context/ProductContext";

function Products({ products }) {
  const { setCartItems } = useContext(ProductContext);

  const handleAddToCart = (product) => {
    const existingItems = localStorage.getItem("cartItems");
    if (existingItems) {
      const list = JSON.parse(existingItems);
      product.num = 1;
      const newItems = [product, ...list];
      const string = JSON.stringify(newItems);
      localStorage.setItem("cartItems", string);
      setCartItems(newItems);
    } else {
      product.num = 1;
      const newItems = [product];
      const string = JSON.stringify(newItems);
      localStorage.setItem("cartItems", string);
      setCartItems(newItems);
    }
  };

  return (
    <div className="w-full flex justify-center mb-4">
      <div className="flex flex-wrap w-[90%] max-w-[1750px] justify-between gap-1">
        {products.map((value) => {
          return (
            <section
              className="w-[22%] min-w-[200px] mb-8 flex flex-col"
              key={value.images[0]}
            >
              <img
                src={value?.images[0]}
                className="w-full object-cover rounded-lg h-[300px]"
                alt="product"
              />
              <p className="text-[16px] text-gray-600 ">{value?.name}</p>
              <span className="flex gap-1 text-orange-400">
                <IoIosStar size={16} />
                <IoIosStar size={16} />
                <IoIosStar size={16} />
                <IoIosStarOutline size={16} className="text-gray-600" />
                <p className="text-[13px] text-gray-400 ml-3">(65 peaple)</p>
              </span>
              <span className="text-blue-500 text-[16px] font-bold">
                ${value?.price}
              </span>
              <button
                className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-full hover:bg-transparent hover:text-blue-500"
                onClick={() => handleAddToCart(value)}
              >
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
