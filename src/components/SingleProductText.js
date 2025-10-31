import React, { useContext, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import ProductContext from "../context/ProductContext";
import Popup from "./Popup";

function SingleProductText({ product }) {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const [message, setMessage] = useState();

  const handleAddToCart = (product) => {
    const existingItems = localStorage.getItem("cartItems");
    const items = JSON.stringify(existingItems);

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
        setMessage("This product has been added to your cart");
      } else {
        setMessage("This Product has already added to your cart");
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
      <div className="flex flex-col gap-3 md:w-[40%] p-3">
        <h1 className="md:text-[35px] text-[20px] border-b">{product?.name}</h1>
        <p>{product?.description}</p>
        <div>
          <p>&#8358;{product?.price.toLocaleString()}</p>
          <small>{product?.inStock} In stock</small>
        </div>
        <button
          className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-full hover:bg-transparent hover:text-blue-500"
          onClick={() => handleAddToCart(product)}
        >
          <MdAddShoppingCart size={20} /> Add to cart
        </button>
      </div>
    </>
  );
}

export default SingleProductText;
