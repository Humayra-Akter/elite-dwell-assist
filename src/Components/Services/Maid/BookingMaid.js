import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { addNotification } from "../../../redux/slices/notificationsSlice";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - dob.getFullYear();

  if (
    currentDate.getMonth() < dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
}
const BookingMaid = ({ bookMaid, user }) => {
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
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const dispatch = useDispatch();
  const [notificationIdCounter, setNotificationIdCounter] = useState(1);
  const [gUser, loading, error] = useAuthState(auth);

  // Function to close the success modal
  const closeSuccessModal = () => {
    setBookingSuccess(false);
  };

  const handleBooking = () => {
    if (!bookingSuccess) {
      setBookingSuccess(true);

      const bookingData = {
        maidId: bookMaid.id,
        customerName: gUser?.displayName || "",
        maidName: bookMaid.name,
        maidEmail: bookMaid.email,
        customerEmail: gUser?.email || "",
        availability: bookMaid.availability,
      };
      console.log(bookMaid);

      fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.success);
          if (data.message === "Booking created successfully") {
            toast.success(`Booking created successfully for ${bookMaid.name}`);
          }
        })
        .catch((error) => {
          toast.error("Failed to create booking");
        });

      const newNotification = {
        id: notificationIdCounter,
        message: `You have a new booking from ${bookMaid.name}`,
      };
      dispatch(addNotification(newNotification));
      setNotificationIdCounter(notificationIdCounter + 1);
    }
  };

  const age = calculateAge(dob);

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
              <div className="grid grid-cols-2 gap-0">
                <div>
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
                  <p>
                    <strong className="text-blue-800 underline">
                      Preferred Location:
                    </strong>

                    {location ? location.join(", ") : "N/A"}
                  </p>
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
                    <strong className="text-blue-800 underline">Age:</strong>{" "}
                    {age}
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
                </div>
              </div>
              <div class="flex items-end justify-end">
                <button
                  htmlFor="booking-maid"
                  onClick={handleBooking}
                  className={`btn btn-sm text-white  font-bold w-1/4 btn-primary ${
                    bookingSuccess ? "disabled" : ""
                  }`}
                  disabled={bookingSuccess}
                >
                  {bookingSuccess ? "Booked" : "Book"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Success Modal */}
        <Modal
          isOpen={bookingSuccess}
          contentLabel="Success Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "400px",
              height: "200px",
              margin: "auto",
            },
          }}
        >
          <h1
            className="text-2xl font-bold text-primary text-center py-2 px-7"
            style={{ fontFamily: "arial" }}
          >
            Booking sent to{" "}
            <span className="text-2xl italic uppercase font-black text-primary text-center pl-2 py-5">
              {bookMaid.name}
            </span>
            !
          </h1>

          <button
            onClick={closeSuccessModal}
            className="btn btn-sm text-xs w-1/4 ml-32 mt-10 border-blue-500
              text-white font-bold bg-primary"
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default BookingMaid;
