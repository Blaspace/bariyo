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

  /*
  About Us

Welcome to Bariyo Online Store — your trusted destination for quality products at affordable prices.
We are a proudly Nigerian e-commerce platform based in Kuje, Abuja, committed to bringing convenience, variety, and value to shoppers across the country.

At Bariyo.com.ng, we believe online shopping should be simple, reliable, and enjoyable. Our platform offers a wide range of products across different categories — from fashion, electronics, and home essentials to beauty products, groceries, and more. Whether you’re shopping for yourself, your home, or your business, Bariyo provides a seamless experience from browsing to delivery.

 Our Mission

To make online shopping accessible and dependable for every Nigerian by providing top-quality products, prompt delivery, and excellent customer service.

 Our Vision

To become one of Nigeria’s most trusted and customer-centric online marketplaces, empowering individuals and businesses to buy and sell with confidence.

 Why Choose Bariyo

 Wide Product Range: Everything you need in one place.
  Fast & Reliable Delivery: From our Kuje office to your doorstep — swiftly and safely.
 Affordable Prices: Enjoy great deals and discounts every day.
 Trusted Sellers: We work with verified suppliers and vendors to ensure quality.
  Dedicated Support: Our customer service team is always ready to help.

At Bariyo, we are more than an online store — we are a community that connects buyers and sellers, supports local businesses, and promotes a culture of trust and satisfaction in e-commerce.

Join thousands of happy customers today.
Shop smart. Shop easy. Shop Bariyo!
*/
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
