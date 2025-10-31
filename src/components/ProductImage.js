import React, { useState } from "react";

function ProductImage({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="md:w-[40%] flex flex-col gap-3 p-3  rounded-md">
      {images && (
        <div className="w-full border rounded-md">
          <img
            src={images[index]}
            alt="product"
            className="rounded-md w-full h-[350px] object-cover"
          />
        </div>
      )}
      <section className="flex gap-1 overflow-x-scroll">
        {images?.length > 1 &&
          images?.map((value, i) => {
            return (
              <div
                onClick={() => setIndex(i)}
                className="h-[70px] w-[70px] min-w-[70px] border rounded-md"
              >
                {" "}
                <img
                  src={value}
                  alt="images"
                  className="h-full  w-full object-cover rounded-md"
                />
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default ProductImage;
