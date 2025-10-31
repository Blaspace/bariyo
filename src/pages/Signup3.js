import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import Loader from "../components/Loader";

function Signup3() {
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirm) {

      const data = localStorage.getItem("signupInfo");
      const info = JSON.parse(data);
      const payload = {
        password,
        email: info.email,
        name: info.name,
        phone: info.phone,
        address: {
          city: info.city,
          state: info.state,
          country: info.country,
          postalCode: info.postalCode,
          street: info.street,
        },
      };
      setLoading(true);
      fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (res.ok) {
            res.json();
          } else if (res.status === 409) {
            throw "a user with this email already exist";
          } else {
            throw "We're having a server error, please try again";
          }
        })
        .then((data) => console.log(data))
        .catch((err) => setMessage(err))
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <Loader loading={loading} />
      <Popup message={message} setMessage={setMessage} />
      <div className="flex h-screen w-full justify-stretch">
        <section
          className="flex-1 h-full bg-center bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply hidden md:block"
          style={{
            backgroundImage: `url(${require("../public/banner.jpg")})`,
          }}
        ></section>
        <section className="flex-1 h-full max-h-full flex justify-center items-center overflow-y-scroll md:pb-[50px] md:pt-[50px]">
          <form
            className="md:w-[70%] w-[90%] flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="font-bold text-center text-[20px] md:text-[30px]">
              Welcome to Bariyo, please set you password:
            </h2>
            <br />
            <label className="text-gray-500">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <label className="text-gray-500">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConfirm(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <p className="text-gray-600 text-[14px] mt-1">
              <input type="checkbox" /> Agree to terms of service
            </p>
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

export default Signup3;
