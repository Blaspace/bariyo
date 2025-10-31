import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";

function Signup() {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && name) {
      const signupInfo = {
        phone,
        email,
        name,
      };
      localStorage.setItem("signupInfo", JSON.stringify(signupInfo));
      navigate("/signup2");
    } else {
      setMessage("All fields are required required");
    }
  };

  return (
    <>
      <Popup message={message} setMessage={setMessage} />
      <div className="flex h-screen w-full justify-stretch">
        <section
          className="flex-1 h-full bg-center bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply hidden md:block"
          style={{
            backgroundImage: `url(${require("../public/banner.jpg")})`,
          }}
        ></section>
        <section className="flex-1 h-full flex justify-center items-center">
          <form
            className="md:w-[70%] w-[90%] flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="font-bold text-center text-[20px] md:text-[30px]">
              Welcome to Bariyo, please signup:
            </h2>
            <br />
            <label className="text-gray-500">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <label className="text-gray-500">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <label className="text-gray-500">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <p className="text-gray-600 text-[14px] mt-1">
              Already have an accout:{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </p>
            <br />
            <button className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-[85%] hover:bg-transparent hover:text-blue-500">
              Continue
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Signup;
