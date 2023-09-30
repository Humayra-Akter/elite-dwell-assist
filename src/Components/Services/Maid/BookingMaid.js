import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import io from "socket.io-client";
import { addNotification } from "../../../redux/slices/notificationsSlice";

const socket = io("http://localhost:5000");

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
  const [maid, setMaid] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [notificationIdCounter, setNotificationIdCounter] = useState(1);
  // Function to close the success modal
  const closeSuccessModal = () => {
    setBookingSuccess(false);
  };

  // const handleBooking = async () => {
  //   if (!bookingSuccess && customer) {
  //     try {
  //       // Make a POST request to your server to create the booking
  //       const response = await fetch("http://localhost:5000/booking", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ customer, maid }),
  //       });

  //       if (response.ok) {
  //         const bookingData = await response.json();

  //         const bookingId = bookingData._id;
  //         const maidResponse = await fetch(`http://localhost:5000/getMaidId/${bookingId}`);
  //         const maidData = await maidResponse.json();

  //         // Create a new notification with the maidId and customerId
  //         const newNotification = {
  //           id: /* Unique ID for the notification */,
  //           maidId: maidData.maidId,
  //           customerId: customer._id,
  //           message: `New booking from customer ${customer.name}`,
  //         };

  //         dispatch(addNotification(newNotification));
  //         setBookingSuccess(true);
  //       }
  //     } catch (error) {
  //       console.error("Error creating booking:", error);
  //     }
  //   }
  // };

  const handleBooking = () => {
    if (!bookingSuccess) {
      setBookingSuccess(true);
      // Notify the maid when a booking is successful
      socket.emit("notification", {
        to: bookMaid.id,
        message: `You have a new booking request from ${user?.displayName}`,
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
                      Location:
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
              width: "500px",
              height: "200px",
              margin: "auto",
            },
          }}
        >
          <h1
            className="text-3xl font-black text-primary text-center px-7"
            style={{ fontFamily: "arial" }}
          >
            Booking Successful!
          </h1>

          <p className="text-lg text-center py-5">
            Your booking has been notified to
            <span className="text-lg italic uppercase font-bold text-blue-600 text-center pl-2 py-5">
              {bookMaid.name}
            </span>
          </p>
          <button
            onClick={closeSuccessModal}
            className="btn btn-sm text-xs w-1/3 mt-5 ml-40 border-blue-500
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
