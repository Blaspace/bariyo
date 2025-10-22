import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();
export function ProductProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      rating: 5,
      images: [require("../public/1.png")],
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      rating: 3,
      images: [require("../public/2.png")],
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/3.png")],
      rating: 4,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/4.png")],
      rating: 3,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/5.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/6.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/7.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/8.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/9.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/10.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/11.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/12.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/13.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/14.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/15.png")],
      rating: 5,
    },
    {
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/16.png")],
      rating: 5,
    },
    /*{
      name: "Latest London collections of Shoe",
      price: 20000,
      images: [require("../public/17.png")],
      rating: 5,
    },*/
  ];
   useEffect(() => {
    const string = localStorage.getItem("cartItems");
    const items = JSON.parse(string);
    setCartItems(items);
  }, [localStorage]);

  return (
    <ProductContext.Provider value={{ products, cartItems, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
