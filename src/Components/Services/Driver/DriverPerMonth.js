import React, { useEffect, useState } from "react";
import BookingDriver from "./BookingDriver";
import DriverPerMonthCard from "./DriverPerMonthCard";
import Footer from "../../Shared/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ScrollToTop from "../../Shared/ScrollToTop";

const DriverPerMonth = ({
  selectedLocation,
  selectedTask,
  selectedAvailability,
}) => {
  const [drivers, setDrivers] = useState([]);
  const [bookDriver, setBookDriver] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("http://localhost:5000/driver")
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data);
      });
  }, []);

  const userRole = localStorage.getItem("userRole");

  const filteredDrivers = drivers.filter((Driver) => {
    const includesLocation = Driver.location.includes(
      selectedLocation.toLowerCase()
    );
    if (!selectedLocation) {
      return true;
    }
    return includesLocation;
  });

  // const filteredDriversByTask = Drivers.filter((Driver) => {
  //   const includesTask = Driver.task.includes(selectedTask.toLowerCase());
  //   if (!selectedTask) {
  //     return true;
  //   }
  //   return includesTask;
  // });
  // const filteredDriversByAvailability = Drivers.filter((Driver) => {
  //   const includesAvailability =
  //     Driver.availability.includes(selectedAvailability);
  //   if (!selectedAvailability) {
  //     return true;
  //   }
  //   return includesAvailability;
  // });

  // const filteredDrivers = [
  //   ...new Set([
  //     ...filteredDriversByLocation,
  //     ...filteredDriversByTask,
  //     ...filteredDriversByAvailability,
  //   ]),
  // ];

  return (
    <div>
      <h1
        className="text-3xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Your Car's Best Friend
      </h1>
      {/* General Drivers */}
      <div>
        {userRole !== "customer" && (
          <p className="text-red-500 text-xs text-center mt-1">
            You do not have permission to access this page.
          </p>
        )}
        <ScrollToTop />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-11">
          {filteredDrivers.map((driver) => (
            <DriverPerMonthCard
              key={driver.id}
              driver={driver}
              setBookDriver={setBookDriver}
              user={user}
            ></DriverPerMonthCard>
          ))}
        </div>
      </div>
      {userRole === "customer" ? (
        bookDriver && <BookingDriver bookDriver={bookDriver}></BookingDriver>
      ) : (
        <div></div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default DriverPerMonth;
