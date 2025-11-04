import React, { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";

function LoadmoreButton() {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const handleGetMoreProduct = () => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_API_URL}/product/get?page=${
        products?.currentPage + 1
      }?category=${params.category}`
    )
      .then((res) => res.json())
      .then((data) => {
        const product = [...products?.products, ...data.products];
        data.products = product;

        setProducts(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {products?.currentPage < products?.totalPages && (
            <button
              className="h-[30px] border border-blue-500 w-[120px]  bg-blue-500 rounded-md text-[#ffffff] text-[14px] flex gap-1 justify-center items-center  hover:bg-transparent hover:text-blue-500"
              onClick={() => handleGetMoreProduct()}
            >
              See More
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default LoadmoreButton;
