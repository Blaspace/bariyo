import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";

function Signup2() {
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [postalCode, setCode] = useState();
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && state && country && postalCode && state && street) {
      const signupInfo = localStorage.getItem("signupInfo");
      const data = JSON.parse(signupInfo);
      const update = { ...data, city, state, country, postalCode, street };
      localStorage.setItem("signupInfo", JSON.stringify(update));
      navigate("/signup3");
    } else {
      setMessage("All fields are required required");
    }
  };

  return (
    <>
      <Popup message={message} setMessage={setMessage} />
      <div className="flex h-screen w-full justify-stretch">
        <section
          className="flex-1 h-full bg-center bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply"
          style={{
            backgroundImage: `url(${require("../public/banner.jpg")})`,
          }}
        ></section>
        <section className="flex-1 h-full max-h-full flex justify-center items-center overflow-y-scroll pb-[50px] pt-[50px]">
          <form
            className="w-[70%] flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="font-bold text-center text-[30px]">
              Enter your address
            </h2>
            <br />
            <labal className="text-gray-500">Country</labal>
            <input
              type="text"
              placeholder="Enter your country"
              onChange={(e) => setCountry(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <labal className="text-gray-500">State</labal>
            <input
              type="text"
              placeholder="Enter your State"
              onChange={(e) => setState(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <labal className="text-gray-500">City</labal>
            <input
              type="text"
              placeholder="Enter your City"
              onChange={(e) => setCity(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <labal className="text-gray-500">Street</labal>
            <input
              type="text"
              placeholder="Enter your street"
              onChange={(e) => setStreet(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <labal className="text-gray-500">Postal Code</labal>
            <input
              type="text"
              placeholder="Enter your postal code"
              onChange={(e) => setCode(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <button className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-[85%] hover:bg-transparent hover:text-blue-500">
              Signup
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Signup2;
