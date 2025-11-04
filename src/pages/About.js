import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Headers from "../components/Headers";

function About() {
  return (
    <>
      <Nav />
      <div className="w-full flex justify-center mb-10">
        <div className=" w-[90%] max-w-[800px] ">
          <br />
          <br />
          <h1 className="font-bold text-[30px]">About Us</h1>
          <p>
            Welcome to Bariyo Online Store your trusted destination for
            quality products at affordable prices. We are a proudly Nigerian
            e-commerce platform based in Kuje, Abuja, committed to bringing
            convenience, variety, and value to shoppers across the country. At
            Bariyo.com.ng, we believe online shopping should be simple,
            reliable, and enjoyable. Our platform offers a wide range of
            products across different categories from fashion, electronics,
            and home essentials to beauty products, groceries, and more. Whether
            you’re shopping for yourself, your home, or your business, Bariyo
            provides a seamless experience from browsing to delivery.
          </p>
          <br />
          <h1 className="font-bold text-[30px]">Our Mission</h1>
          <p>
            To make online shopping accessible and dependable for every Nigerian
            by providing top-quality products, prompt delivery, and excellent
            customer service.
          </p>
          <br />
          <h1 className="font-bold text-[30px]">Our Vision</h1>
          <p>
            To make online shopping accessible and dependable for every Nigerian
            by providing top-quality products, prompt delivery, and excellent
            customer service.
          </p>
          <br />
          <h1 className="font-bold text-[30px]">Why Choose Bariyo</h1>

          <p>
            <b>Wide Product Range:</b> Everything you need in one place. Fast &
            Reliable Delivery: From our Kuje office to your doorstep swiftly
            and safely.
            <br />
            <b>Affordable Prices:</b> Enjoy great deals and discounts every day.
            <br />
            <b>Trusted Sellers:</b> We work with verified suppliers and vendors
            to ensure quality.
            <br />
            <b>Dedicated Support:</b> Our customer service team is always ready
            to help.
            <br />
            <br /> At Bariyo, we are more than an online store we are a
            community that connects buyers and sellers, supports local
            businesses, and promotes a culture of trust and satisfaction in
            e-commerce. Join thousands of happy customers today. Shop smart.
            Shop easy. Shop Bariyo!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
