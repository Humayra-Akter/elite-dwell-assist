import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Reviews = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/maid?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const matchingUser = data.find(
              (userData) => userData.email === user.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
            }
          }
        });
    }
  }, [user]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  useEffect(() => {
    if (loggedUser._id) {
      fetch(`http://localhost:5000/reviews?maidId=${loggedUser._id}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        });
    }
  }, [loggedUser._id]);

  console.log(reviews);

  return (
    <div className="reviews-container">
      <h2 className="text-3xl text-primary font-bold">My Reviews</h2>
      <div className="reviews">
        {reviews
          .filter((review) => review.maidId === loggedUser._id)
          .map((review) => (
            <div
              key={review._id}
              className="review-card bg-white p-4 rounded shadow-md my-4"
            >
              <p className="font-bold">Customer Email: {review?.userEmail}</p>
              <div className="rating flex items-center">
                <p>Rating: {review.rating}</p>
                <div className="stars ml-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`star ${
                        index < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="review-text">Review Text: {review.reviewText}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
