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
import HandleGetProducts from "./components/HandleGetProducts";
import HandleGetUser from "./components/HandleGetUser";

function App() {
  //js5618171_db_user
  //G9EB8QOHVTUziUcz
  //mongodb+srv://js5618171_db_user:G9EB8QOHVTUziUcz@cluster0.bklitvf.mongodb.net/
  return (
    <Routes>
      <Route element={<HandleGetProducts />}>
        <Route element={<HandleGetUser />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/signup3" element={<Signup3 />} />
          <Route path="/verify" element={<Verify />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
