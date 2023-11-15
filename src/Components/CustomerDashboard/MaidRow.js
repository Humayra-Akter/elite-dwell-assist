import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MaidRow = ({ booking, maidId, userEmail }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  
  useEffect(() => {
    checkIfUserHasAlreadyReviewed(userEmail, maidId);
  }, [userEmail, maidId]);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const getUserReviews = async (userEmail) => {
    try {
      const response = await fetch(
        `http://localhost:5000/reviews?userEmail=${userEmail}`
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch user reviews");
      }
    } catch (error) {
      console.error("Error fetching user reviews:", error);
      return [];
    }
  };
  const info = booking.maidEmail;
  const [hasAlreadyReviewed, setHasAlreadyReviewed] = useState(false);

  const checkIfUserHasAlreadyReviewed = async (userEmail, maidId) => {
    const userReviews = await getUserReviews(userEmail);
    const alreadyReviewed = userReviews.some(
      (review) => review.maidId === maidId
    );
    setHasAlreadyReviewed(alreadyReviewed);
  };

  const submitReview = async () => {
    if (rating > 0 && reviewText) {
      if (hasAlreadyReviewed) {
        toast.error("You have already reviewed this maid.");
      } else {
        const review = {
          userEmail,
          maidId,
          rating,
          reviewText,
          info,
          reviewType: "maid",
        };
        console.log(review);
        try {
          fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Thanks for your review.", {
                position: toast.POSITION.TOP_CENTER,
              });
              checkIfUserHasAlreadyReviewed(userEmail, maidId);
            });
        } catch (error) {
          console.error("Error submitting review:", error);
        }
      }
    }
  };

  return (
    <tr>
      <td className="capitalize">{booking.maidName}</td>
      <td>{booking.maidEmail}</td>
      <td>
        {booking?.task && Array.isArray(booking.task) && (
          <ul>
            {booking.task?.map((service, index) => (
              <li className="capitalize text-left font-semibold" key={index}>
                {service}
              </li>
            ))}
          </ul>
        )}
      </td>
      <td>
        {booking?.createdDate
          ? new Date(booking?.createdDate).toLocaleString()
          : "Invalid Date"}
      </td>
      <td>
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="text-xl"
            onClick={() => handleRatingClick(index + 1)}
            style={{ cursor: "pointer", color: "green" }}
          >
            {index < rating ? "★" : "☆"}
          </span>
        ))}
        <textarea
          className="input input-bordered w-full my-3"
          placeholder="Write a review (max 100 characters)"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button
          className="btn btn-sm text-xs w-full border-blue-500 text-white font-bold bg-primary"
          onClick={submitReview}
        >
          Submit Review
        </button>
      </td>
    </tr>
  );
};

export default MaidRow;
