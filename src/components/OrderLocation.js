import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";

function OrderLocation({ setLocation }) {
  const { user } = useContext(ProductContext);
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [postalCode, setPostalCode] = useState();

  useEffect(() => {
    if (user) {
      setCity(user?.address[0]?.city);
      setState(user?.address[0]?.state);
      setStreet(user?.address[0]?.street);
      setCountry(user?.address[0]?.country);
      setPostalCode(user?.address[0]?.postalCode);
    }
  }, [user]);

  useEffect(() => {
    setLocation({ street, city, state, country, postalCode });
    console.log(user);
  }, [street, city, state, country, postalCode]);

  return (
    <div className="pt-8">
      <form className="flex flex-col gap-3">
        <h2 className="text-center font-bold text-[20px]">
          Enter Delivery Location
        </h2>
        <span className="flex flex-col gap-1">
          <label>Street</label>
          <input
            type="text"
            placeholder="street"
            className="border border-gray-500 rounded-md p-2"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </span>
        <span className="flex flex-col gap-1">
          <label>City</label>
          <input
            type="text"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-500 rounded-md p-2"
          />
        </span>
        <span className="flex flex-col gap-1">
          <label>State</label>
          <input
            type="text"
            placeholder="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border border-gray-500 rounded-md p-2"
          />
        </span>
        <span className="flex flex-col gap-1">
          <label>Country</label>
          <input
            type="text"
            placeholder="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-500 rounded-md p-2"
          />
        </span>
        <span className="flex flex-col gap-1">
          <label>Postal Code</label>
          <input
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="border border-gray-500 rounded-md p-2"
          />
        </span>
        <br />
      </form>
    </div>
  );
}

export default OrderLocation;
