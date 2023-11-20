import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DriverReview = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        try {
          const response = await fetch(
            `http://localhost:5000/driver?email=${user.email}`
          );
          const data = await response.json();

          if (data.length > 0) {
            const matchingUser = data.find(
              (userData) => userData.email === user.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
            }
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };
    fetchUser();
  }, [user]);

  useEffect(() => {
    const fetchReviews = async () => {
      if (loggedUser && loggedUser.email) {
        try {
          const response = await fetch(`http://localhost:5000/reviews`);
          const data = await response.json();

          if (Array.isArray(data)) {
            const userReviews = data.filter(
              (review) => review.info === loggedUser.email
            );

            setReviews(userReviews);
          } else {
            console.error("Invalid data received:", data);
          }
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      }
    };
    fetchReviews();
  }, [loggedUser]);

  console.log(reviews);
  return (
    <div className="reviews-container">
      <h2 className="text-3xl text-primary font-bold">My Reviews</h2>
      <div className="reviews">
        {reviews.map((review) => (
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

export default DriverReview;