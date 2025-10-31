import React, { useContext, useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import ProductContext from "../context/ProductContext";
import SingleProductText from "./SingleProductText";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function SingleProduct() {
  const { products } = useContext(ProductContext);
  const [singleProduct, setSingleProduct] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/product/get/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [params.id]);
  return (
    <div className="flex justify-center pb-[80px] pt-[50px]">
      <Loader loading={loading} />
      <div className="flex w-[90%] max-w-[1750px] gap-1 justify-center p-3 border rounded-md flex-col md:flex-row">
        <ProductImage images={singleProduct?.images} />
        <SingleProductText product={singleProduct} />
      </div>
    </div>
  );
}

export default SingleProduct;
