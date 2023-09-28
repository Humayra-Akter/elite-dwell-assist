import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/CartSlices";

const BookingMaid = ({ bookMaid }) => {
  const {
    id,
    img,
    email,
    name,
    phone,
    experience,
    availability,
    location,
    gender,
    address,
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
        <div class="modal-box max-w-2xl w-screen">
          <label
            for="booking-maid"
            class="btn btn-sm btn-circle btn-ghost bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="card bg-transparent">
            <figure>
              <img
                className="w-24 h-24 rounded-full absolute top-0 left-5"
                src={img}
                alt="maid"
              />
              <h2 className="card-title">
                <strong className="text-blue-900">{name}</strong> for your Home
              </h2>
            </figure>
            <div class="card-body relative top-16">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p>
                    <strong className="text-blue-800 underline">
                      Location :
                    </strong>
                    <br />
                    {location.join(", ")}
                  </p>
                  <p className="pt-2">
                    <strong className="text-blue-800 underline">
                      Availability:
                    </strong>
                    <ul>
                      {availability?.map((daySlot, index) => (
                        <li key={index}>
                          <strong>{daySlot}</strong>
                        </li>
                      ))}
                    </ul>
                  </p>
                  <div className="pt-3">
                    <strong className="text-blue-800 underline">
                      Task with Salary:
                    </strong>
                    {task && salary ? (
                      <ul>
                        {task.map((taskName, index) => (
                          <li key={index}>
                            <strong className="capitalize">{taskName}: </strong>
                            {salary[index]}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      "Salary information not available"
                    )}
                  </div>
                </div>
                <div>
                  <p className="pt-2">
                    <strong className="text-blue-800 underline">Email:</strong>{" "}
                    {email}
                  </p>
                  <p className="pt-2">
                    <strong className="text-blue-800 underline">Phone:</strong>{" "}
                    {phone}
                  </p>
                  <p className="pt-2">
                    <strong className="text-blue-800 underline">
                      Address:
                    </strong>{" "}
                    {address}
                  </p>
                  <p className="pt-2">
                    <strong className="text-blue-800 underline">
                      Date of Birth :
                    </strong>{" "}
                    {dob}
                  </p>
                  <p className="pt-2">
                    <strong className="text-blue-800 underline">
                      Experience :
                    </strong>{" "}
                    {experience}
                  </p>
                  <p className="pt-2">
                    <strong className="text-blue-800 underline">
                      Education :
                    </strong>{" "}
                    {education}
                  </p>
                  <p className="pt-2">
                    <strong className="text-blue-800 underline">
                      Gender :
                    </strong>{" "}
                    {gender}
                  </p>
                  {/* <p className="pt-2">
                    <strong className="text-blue-800 underline">
                      Salary :
                    </strong>{" "}
                    {salary.join(", ")}
                  </p> */}
                </div>
              </div>
            </div>
            <div class="flex items-end justify-end">
              <button
                for="booking-maid"
                class="btn btn-sm text-white  font-bold w-1/3 btn-primary"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingMaid;
