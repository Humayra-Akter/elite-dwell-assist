import React, { useEffect, useState } from "react";
import BookingDriver from "./BookingDriver";
import DriverPerMonthCard from "./DriverPerMonthCard";

const DriverPerMonth = () => {
  const [drivers, setDrivers] = useState([]);
  const [bookDriver, setBookDriver] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        const driverData = data.driver;
        setDrivers(driverData);
      });
  }, []);

  return (
    <div>
      <h1
        className="text-2xl pt-20 text-center font-black text-purple-950  px-7"
        style={{ fontFamily: "algerian" }}
      >
        driver
      </h1>
      <div className="grid grid-cols-3 gap-5 p-11">
        {drivers.map((driver) => (
          <DriverPerMonthCard
            key={driver.driver_id}
            driver={driver}
            setBookDriver={setBookDriver}
          ></DriverPerMonthCard>
        ))}
      </div>
      {bookDriver && <BookingDriver bookDriver={bookDriver}></BookingDriver>}
    </div>
  );
};

export default DriverPerMonth;
