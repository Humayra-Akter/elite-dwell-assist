import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";

const DriverPerMonthCard = ({ driver, setBookDriver }) => {
  const { img, name, location, salary } = driver;
  console.log(driver);
  const [bookedDrivers, setBookedDrivers] = useState([]);
  const availabilityOptions = [
    { label: "08.00 AM - 11.00 AM", value: "sokal" },
    { label: "11.00 AM - 02.00 PM", value: "dupur" },
    { label: "02.00 PM - 05.00 PM", value: "bikal" },
    { label: "05.00 PM - 08.00 PM", value: "raat" },
  ];
  const [user, loading, error] = useAuthState(auth);

  const handleKnowMoreClick = () => {
    if (!bookedDrivers.includes(driver)) {
      setBookedDrivers([...bookedDrivers, driver]);
      setBookDriver(driver);
    }
  };

  return (
    <div>
      <div className="w-80 h-72 rounded-3xl border-2 pb-[16.67%] text-black relative bg-slate-100 m-4 hover:scale-105 cursor-grab transition-all duration-300 ease-in-out">
        <div>
          <figure className="absolute top-3 left-3 right-0 h-full">
            <img src={img} alt="Driver" className="h-32 w-32 rounded-full" />
          </figure>
          <div className="p-7 text-right text-black font-bold ">
            <h2 className="text-xl font-bold">{name}</h2>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-black">
          <p>
            <strong className="text-indigo-800 underline">
              Preferred Location:
            </strong>
            {Array.isArray(location)
              ? location
                  .map(
                    (loc) => loc.trim()[0].toUpperCase() + loc.trim().slice(1)
                  )
                  .join(", ")
              : location}
          </p>
          <p className="pt-2">
            <strong className="text-indigo-800 underline">Salary :</strong>{" "}
            {salary}
          </p>
          <div className="mt-4">
            <label
              htmlFor="booking-Driver"
              onClick={handleKnowMoreClick}
              className="px-4 btn-md mt-3 bg-secondary text-white font-bold rounded-full hover:bg-opacity-80 transition duration-300"
            >
              Know More
            </label>

            {user ? (
              <p></p>
            ) : (
              <p>
                <Link
                  to="/login"
                  className="text-red-500 text-xs font-bold rounded-full hover:bg-opacity-80 transition duration-300 px-2 btn-sm mt-1"
                >
                  Login for details
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverPerMonthCard;
