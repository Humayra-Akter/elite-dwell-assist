import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const BabysitterRow = ({ booking, babysitterId, userEmail }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  console.log(babysitterId);
  useEffect(() => {
    checkIfUserHasAlreadyReviewed(userEmail, babysitterId);
  }, [userEmail, babysitterId]);

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

  const [hasAlreadyReviewed, setHasAlreadyReviewed] = useState(false);

  const checkIfUserHasAlreadyReviewed = async (userEmail, babysitterId) => {
    const userReviews = await getUserReviews(userEmail);
    const alreadyReviewed = userReviews.some(
      (review) => review.babysitterId === babysitterId
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
          babysitterId,
          rating,
          reviewText,
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
              checkIfUserHasAlreadyReviewed(userEmail, babysitterId);
            });
        } catch (error) {
          console.error("Error submitting review:", error);
        }
      }
    }
  };

  return (
    <tr>
      <td className="capitalize">{booking?.babysitterName}</td>
      <td>{booking?.babysitterEmail}</td>
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

export default BabysitterRow;