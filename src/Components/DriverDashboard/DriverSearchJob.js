import React, { useEffect, useState } from "react";

const DriverSearchJob = () => {
  const [dayBookings, setDayBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/driverSearchPost")
      .then((res) => res.json())
      .then((data) => {
        setDayBookings(data);
      });
  }, []);

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
              <button className="btn btn-sm rounded-full absolute w-1/8 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-green-600">
                Interested
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverSearchJob;