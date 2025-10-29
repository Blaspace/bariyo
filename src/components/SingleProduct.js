import React, { useContext, useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import ProductContext from "../context/ProductContext";
import SingleProductText from "./SingleProductText";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { products } = useContext(ProductContext);
  const [singleProduct, setSingleProduct] = useState();
  const params = useParams();
  useEffect(() => {
    const i = products.filter((v) => v.id === Number(params.id));
    setSingleProduct(i[0]);
    console.log(i);
  }, [params, products]);
  return (
    <div className="flex justify-center pb-[80px] pt-[50px]">
      <div className="flex w-[90%] max-w-[1750px] gap-1 justify-center flex-col md:flex-row">
        <ProductImage images={singleProduct?.images} />
        <SingleProductText product={singleProduct} />
      </div>
    </div>
  );
}

export default SingleProduct;
