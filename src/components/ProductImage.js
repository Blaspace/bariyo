import React from "react";

function ProductImage({ images }) {
  console.log(images);

  return (
    <div className="md:w-1/2 flex flex-col gap-3">
      {images && (
        <img src={images[0]} alt="product" className="rounded-md w-[85%]" />
      )}
      <section>
        {images?.length > 1 &&
          images?.map((value, i) => {
            return <>{i && <img src={value} alt="images" />}</>;
          })}
      </section>
    </div>
  );
}

export default ProductImage;
