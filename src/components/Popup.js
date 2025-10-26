import React from "react";

function Popup({ message, setMessage }) {
  return (
    <>
      {message && (
        <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-[rgba(0,0,0,0.49)]">
          <section className=" bg-white rounded-md p-4 flex flex-col gap-2 max-w-[300px]">
            <p className="text-[16px]">{message}</p>
            <button
              className="h-[35px] border border-blue-500  bg-blue-500 rounded-md text-[#ffffff] text-[16px] flex gap-1 justify-center items-center w-[100px] hover:bg-transparent hover:text-blue-500"
              onClick={() => setMessage(null)}
            >
              Okay
            </button>
          </section>
        </div>
      )}
    </>
  );
}

export default Popup;
