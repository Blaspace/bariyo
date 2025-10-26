import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import Loader from "../components/Loader";

function Login() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      setLoading(true);
      const loginInfo = {
        password,
        email,
      };
      fetch("http://localhost:5000/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 401) {
            throw "Wrong email/password, please try again ";
          } else {
            throw "We're having a server error, please try again";
          }
        })
        .then((data) => {
          localStorage.setItem("token", data.accessToken);
          navigate("/");
        })
        .catch((err) => setMessage(err))
        .finally(() => setLoading(false));
    } else {
      setMessage("All fields are required required");
    }
  };

  return (
    <>
      <Loader loading={loading} />
      <Popup message={message} setMessage={setMessage} />
      <div className="flex h-screen w-full justify-stretch">
        <section
          className="flex-1 h-full bg-center bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply"
          style={{
            backgroundImage: `url(${require("../public/banner.jpg")})`,
          }}
        ></section>
        <section className="flex-1 h-full flex justify-center items-center">
          <form
            className="w-[70%] flex flex-col"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="font-bold text-center text-[30px]">
              Welcome to Bariyo, please signup:
            </h2>

            <br />
            <labal className="text-gray-500">Email</labal>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />

            <br />
            <labal className="text-gray-500">Password</labal>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-[85%] border rounded-md h-65px p-1 border-gray-500"
            />
            <p className="text-gray-600 text-[14px] mt-1">
              don't have an accout:{" "}
              <a href="/signup" className="text-blue-500">
                Signup
              </a>
            </p>
            <br />
            <button className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-[85%] hover:bg-transparent hover:text-blue-500">
              Login
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
