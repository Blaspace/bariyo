import React, { useContext } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Category from "../components/Category";
import Products from "../components/Products";
import Footer from "../components/Footer";
import ProductContext from "../context/ProductContext";
import Headers from "../components/Headers";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Nav />
      <Header />
      <Category />
      <Headers text={"Featured Products"} />
      <Products products={products} />
      <div className="w-full flex justify-center mb-10">
        <div className=" w-[90%] max-w-[1750px] flex justify-center">
          <a href="/shop/all">
          <button className="h-[40px] border border-blue-500 bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-[120px] hover:bg-transparent hover:text-blue-500">
            See More
          </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
