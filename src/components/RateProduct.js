import { useState } from "react";
import Loader from "./Loader";
import Popup from "./Popup";

export default function ProductRatingPopup({ isOpen, setIsOpen }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState();

  const handleSubmit = () => {
    if (rating !== 0) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API_URL}/rate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          rate: rating,
          message: comment,
          productId: isOpen,
        }),
      })
        .then((res) => res.json())
        .then((data) => setMsg("Than you for your feedback"))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
      setIsOpen(false);
    }
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <span
          key={starValue}
          onClick={() => setRating(starValue)}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            color: starValue <= rating ? "#FFD700" : "#CCCCCC",
          }}
        >
          ★
        </span>
      );
    });
  };

  return (
    <>
      <Popup message={msg} setMessage={setMsg} />
      <Loader loading={loading} />
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Rate this Product</h2>
            <div className="flex justify-center mb-4">{renderStars()}</div>
            <textarea
              className="w-full p-2 border rounded mb-4"
              placeholder="Leave a comment (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setIsOpen(null)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
