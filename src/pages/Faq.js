import React from "react";
import Headers from "../components/Headers";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Faq() {
  const faqs = [
    {
      q: "How long does it take to process a return on Bariyo?",
      a: " it Takes 1-7 business days.",
    },
    {
      q: "How do I initiate a return on Bariyo?",
      a: `STEP 1:  Login to your Bariyo account and click on ORDERS \n STEP 2: Click on the Order of the item (s) you want to return \n STEP 3: Select the item(s) you want to return and give details and reason for return. \n STEP 4: Select pickup station \nSTEP 5: Review your information and submit your return request`,
    },
    {
      q: "What if I received a damaged item?",
      a: " If you received a damaged or defective item, you can initiate a return by going to  ORDERS in your Bariyo account ",
    },
    {
      q: "Do I have to pay for delivery fees when returning a product?",
      a: "You do not need to pay for delivery fee when returning any item to Bariyo.",
    },
  ];

  return (
    <div>
      <Nav />
      <br />
      <br />
      <Headers text={"Frequently asked quesion (FAQ)"} />
      <div className="w-full flex justify-center mb-10">
        <div className=" w-[90%] max-w-[1750px] border rounded-md">
          {faqs.map((value) => {
            return (
              <div className="border-b p-5">
                <div>
                  <h2 className="text-[20px] font-bold mb-2">
                    Quesion: {value.q}
                  </h2>
                </div>
                <div>
                  <p className="whitespace-pre-line">{value.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
