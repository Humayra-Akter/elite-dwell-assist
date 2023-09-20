import React from "react";
import DriverPerDayCalendar from "./DriverPerDayCalendar";
import DriverServicePerDay from "./DriverServicePerDay";
import DriverPerDayAddress from "./DriverPerDayAddress";

const DriverPerDay = () => {
  return (
    <div>
      <h1
        className="text-2xl py-16 text-center font-black text-purple-950  px-7"
        style={{ fontFamily: "algerian" }}
      >
        Van/Truck PER DAY
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <DriverPerDayCalendar></DriverPerDayCalendar>
        </div>
        <div>
          <DriverServicePerDay></DriverServicePerDay>
        </div>
      </div>
      <DriverPerDayAddress></DriverPerDayAddress>
    </div>
  );
};

export default DriverPerDay;
