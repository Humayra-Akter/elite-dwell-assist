import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MaidSearchJob = () => {
  const [dayBookings, setDayBookings] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [user] = useAuthState(auth);
  const [bookedOptions, setBookedOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/maidSearchPost")
      .then((res) => res.json())
      .then((data) => {
        setDayBookings(data);
      });
  }, []);

  const handleBooking = (booking) => {
    if (!bookingSuccess) {
      setBookingSuccess(true);
      const bookingData = {
        maidName: user?.displayName,
        maidEmail: user?.email,
        customerEmail: booking.userEmail,
        bookingInfo: booking,
      };
      console.log(bookingData);

      fetch("http://localhost:5000/customerBooked", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Booking created successfully") {
            toast.success(`Request sent to${bookingData.name}`);
            setBookedOptions([...bookedOptions, booking._id]);
          }
        })
        .catch((error) => {
          toast.error("Failed to create booking");
        });
    }
  };

  return (
    <div>
      <h2 className="text-xl pl-5 uppercase text-blue-900 font-bold">
        Search job
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {dayBookings.map((booking) => (
          <div
            key={booking._id}
            className="card border-2 my-6 shadow-xl transform transition-transform hover:scale-95 hover:bg-gradient-to-t from-blue-200 to-blue-50 hover:shadow-lg"
          >
            <div className="card-title pt-7 pb-5 bg-blue-50">
              <p className="font-sm ml-6">
                Request from:
                <span className="uppercase text-primary font-bold">
                  {booking.userName}
                </span>
              </p>{" "}
              <button
                onClick={() => handleBooking(booking)}
                className={`  btn btn-sm rounded-full absolute w-1/8 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-green-600  w-1/4 btn-primary ${
                  bookingSuccess ? "disabled" : ""
                }`}
                disabled={bookingSuccess}
              >
                {bookingSuccess ? "Request sent" : "Interested"}
              </button>
            </div>
            <div className="card-body">
              <h2 className="font-medium">
                Customer Email :{" "}
                <span className="font-bold"> {booking.userEmail}</span>
              </h2>
              <p className="font-medium">
                Contact:{" "}
                <span className="uppercase font-extrabold">
                  {booking.contact}
                </span>
              </p>
              <p className="font-medium">
                Address:{" "}
                <span className="uppercase font-extrabold">
                  {booking.address}
                </span>
              </p>
              <p className="font-medium">
                Budget:{" "}
                <span className="uppercase text-primary font-extrabold">
                  {booking.budget}
                </span>
              </p>
              <p className="font-medium">
                Additional Preferences:{" "}
                <span className="uppercase font-extrabold">
                  {booking.additionalPreferences}
                </span>
              </p>{" "}
              <p className="font-medium">
                Preferred Time Slot:{" "}
                <span className="uppercase font-extrabold">
                  {booking.timeSlot}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaidSearchJob;
