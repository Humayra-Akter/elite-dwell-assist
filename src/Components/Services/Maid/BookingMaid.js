import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/CartSlices";

const BookingMaid = ({ bookMaid }) => {
  const {
    id,
    img,
    name,
    experience,
    availability,
    location,
    gender,
    education,
    task,
    dob,
    salary,
  } = bookMaid;

  const dispatch = useDispatch();

  return (
    <div className=" bg-transparent">
      <input type="checkbox" id="booking-maid" class="modal-toggle" />
      <div class="modal ">
        <div class="modal-box w-screen max-w-4xl">
          <label
            for="booking-maid"
            class="btn btn-sm btn-circle btn-ghost bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="card card-side bg-transparent">
            <figure>
              <img className="w-80 h-72" src={img} alt="maid" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                <strong className="text-purple-900">{name}</strong>for your Home
              </h2>
              <p class="pt-4">
                <strong className="text-purple-800">Location :</strong>
                {location}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Availability:</strong>
                {availability ? (
                  Array.isArray(availability) ? (
                    <ul>
                      {availability.map((daySlot) => (
                        <li key={daySlot.day}>
                          <strong>{daySlot.day}:</strong>{" "}
                          {Array.isArray(daySlot.slots)
                            ? daySlot.slots.join(", ")
                            : "Slots data not available"}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Availability data is not in the expected format</p>
                  )
                ) : (
                  <p>Availability data not available</p>
                )}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Date of Birth :</strong>{" "}
                {dob}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Experience :</strong>
                {experience} months
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Education :</strong>{" "}
                {education}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Gender :</strong> {gender}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Salary :</strong> {salary}
              </p>
              <div class=" justify-end">
                <button
                  for="booking-maid"
                  class="btn font-bold w-full btn-md"
                  onClick={() => {
                    dispatch(
                      addToCart({ id, img, name, salary, task, qty: 1 })
                    );
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingMaid;
