import React, { useEffect, useState } from "react";

const AdminMaidPerDayBookings = () => {
  const [dayBookings, setDayBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/perDayMaidBookings")
      .then((res) => res.json())
      .then((data) => {
        setDayBookings(data);
      });
  }, []);

  console.log(dayBookings);
  return (
    <div>
      <h2 className="text-lg pl-5 text-blue-900 font-bold">
        Booking Notifications For Per Day Home Service
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {dayBookings.map((booking) => (
          <div
            key={booking._id}
            className="card border-2 my-6 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-blue-200 to-blue-50 hover:shadow-lg"
          >
            <div className="card-title py-7 bg-sky-100">
              <p className="font-sm  mx-auto  text-center">
                Booking from :
                <span className="uppercase text-primary font-bold">
                  {booking.userName}
                </span>
              </p>{" "}
            </div>
            <div className="card-body">
              <h2 className="font-medium">
                Customer Email :{" "}
                <span className="font-bold"> {booking.userEmail}</span>
              </h2>
              <p className="font-medium">
                Selected Date:{" "}
                <span className="uppercase font-extrabold">
                  {new Date(booking.selectedDate).toLocaleDateString()}
                </span>
              </p>
              <p className="font-medium">
                Selected Time Slot:{" "}
                <span className="uppercase font-extrabold">
                  {booking.selectedTimeSlot}
                </span>
              </p>
              <p className="font-medium">
                Selected Services:{" "}
                <span className="uppercase font-extrabold">
                  {booking.selectedServices.join(", ")}
                </span>
              </p>
              <p className="font-medium">
                Address:{" "}
                <span className="uppercase font-extrabold">
                  {`${booking.address.house}, ${booking.address.road}, ${booking.address.block}, ${booking.address.sector}, ${booking.address.area}`}
                </span>
              </p>
              <button className="btn btn-sm rounded-full absolute w-1/8 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-green-600">
                Acknowledge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMaidPerDayBookings;
