import React from "react";

function Loader({ loading }) {
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center bg-[#00000083] fixed top-0 left-0 h-full w-full">
          <div className="flex justify-center items-center bg-white p-2 rounded-md w-[70px] h-[70px]">
            {" "}
            <div className="loader"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
