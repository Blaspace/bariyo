import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Reviews({ reviews }) {
  return (
    <div className="flex flex-col p-2 justify-center items-center pt-[40px]">
      {reviews.map((value) => {
        return (
          <div className="flex gap-2 p-2" key={value._id}>
            <FaUserCircle size={40} className="text-gray-500" />
            <section className="flex flex-col text-gray-600 w-[80%] border-b pb-5">
              <p>
                <b>{value?.userName}</b>
              </p>
              <div>
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <span
                      key={starValue}
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        color: starValue <= value?.rate ? "#FFD700" : "#CCCCCC",
                      }}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
              <p className="text-[14px]">{value?.message}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
