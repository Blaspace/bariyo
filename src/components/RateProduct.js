import { useState } from "react";

export default function ProductRatingPopup({ isOpen, setIsOpen }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (rating === 0) return;
    setIsOpen(false);
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
  );
}
