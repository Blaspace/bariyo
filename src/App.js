import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Signup from "./pages/Signup";
import Signup2 from "./pages/Signup2";
import Login from "./pages/Login";
import Signup3 from "./pages/Signup3";
import Verify from "./pages/EmailVerification";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/signup3" element={<Signup3 />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
}

export default App;
