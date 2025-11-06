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
            At Bariyo Stores, we believe shopping should be simple, affordable,
            and exciting. We are your one-stop destination for quality products
            from everyday essentials to the latest tech gadgets, all offered at
            unbeatable prices. Driven by a passion for excellence, Bariyo Stores
            is committed to giving customers a reliable shopping experience
            built on trust, value, and satisfaction. Whether you’re shopping
            online or in-store, our goal is to make every purchase worth your
            while. We don’t just sell products , we deliver convenience, style,
            and innovation right to your doorstep. With Bariyo Stores, you’re
            not just buying; you’re joining a community that values quality and
            affordability. Bariyo Stores — Shop Smart. Live Better.
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
            Reliable Delivery: From our Kuje office to your doorstep swiftly and
            safely.
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
