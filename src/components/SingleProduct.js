import React, { useContext, useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import ProductContext from "../context/ProductContext";
import SingleProductText from "./SingleProductText";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Reviews from "./Reviews";

function SingleProduct() {
  const { products } = useContext(ProductContext);
  const [singleProduct, setSingleProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState([]);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/product/get/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [params.id]);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/review`)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [params.id]);

  return (
    <div className="flex justify-center pb-[80px] pt-[50px]">
      <Loader loading={loading} />
      <div className="flex w-[90%] flex-col max-w-[1750px] gap-1 justify-center p-3 border rounded-md">
        <div className="flex flex-col md:flex-row w-full justify-center">
          <ProductImage images={singleProduct?.images} />
          <SingleProductText product={singleProduct} />
        </div>
        <Reviews reviews={review} />
      </div>
    </div>
  );
}

export default SingleProduct;
