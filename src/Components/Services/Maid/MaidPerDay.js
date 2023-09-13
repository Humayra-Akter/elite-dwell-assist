import React from "react";
import MaidPerDayCalender from "./MaidPerDayCalender";
import MaidPerDayAddress from "./MaidPerDayAddress";
import MaidServicePerDay from "./MaidServicePerDay";

const MaidPerDay = () => {
  return (
    <div>
      <h1
        className="text-2xl py-16 text-center font-black text-purple-950  px-7"
        style={{ fontFamily: "algerian" }}
      >
        MAID PER DAY
      </h1>
      <MaidPerDayCalender></MaidPerDayCalender>
      <MaidPerDayAddress></MaidPerDayAddress>
      <MaidServicePerDay></MaidServicePerDay>
    </div>
  );
};

export default MaidPerDay;
