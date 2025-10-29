import React, { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import ProductContext from "../context/ProductContext";

function SingleProductText({ product }) {
  const { cartItems, setCartItems } = useContext(ProductContext);

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
      } else {
        alert("This Product has already added to your cart");
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
    <div className="flex flex-col gap-3 md:w-[40%] ">
      <h1 className="md:text-[35px] text-[20px] font-bold">{product?.name}</h1>
      <p>${product?.price}</p>
      <button
        className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-full hover:bg-transparent hover:text-blue-500"
        onClick={() => handleAddToCart(product)}
      >
        <MdAddShoppingCart size={20} /> Add to cart
      </button>
    </div>
  );
}

export default SingleProductText;
