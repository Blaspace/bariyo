import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import Loader from "../components/Loader";

function Verify() {
  const [code, setCode] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code) {
      const user = localStorage.getItem("signupInfo");
      const email = JSON.parse(user);

      setLoading(true);
      fetch(`${process.env.REACT_APP_API_URL}/code/verify`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, email: email.email }),
      })
        .then((res) => {
          if (res.ok) {
            res.json();
          } else if (res.status === 401) {
            setMessage(
              "the verification code you sent was invalid please try agein"
            );
          }
        })
        .then((data) => {
          localStorage.setItem("token", JSON.stringify(data.accessToken));
          navigate("/");
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      setMessage("All fields are required required");
    }
  };

  return (
    <>
      <Popup message={message} setMessage={setMessage} />
      <Loader loading={loading} />
      <div className="flex h-screen w-full justify-stretch">
        <section
          className="flex-1 h-full bg-center bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply hidden md:block"
          style={{
            backgroundImage: `url(${require("../public/banner.jpg")})`,
          }}
        ></section>
        <section className="flex-1 h-full max-h-full flex justify-center items-center overflow-y-scroll pb-[50px] pt-[50px]">
          <form
            className="w-[70%] flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="font-bold text-center text-[20px] md:text-[30px]">
              Check your email for a verification code
            </h2>
            <br />

            <labal className="text-gray-500">Code</labal>
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setCode(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <br />
            <button className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-[85%] hover:bg-transparent hover:text-blue-500">
              Verify
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Verify;
