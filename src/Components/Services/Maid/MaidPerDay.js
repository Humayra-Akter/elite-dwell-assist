import React from "react";
import MaidPerDayCalender from "./MaidPerDayCalender";
import MaidPerDayAddress from "./MaidPerDayAddress";
import MaidServicePerDay from "./MaidServicePerDay";

const MaidPerDay = () => {
  return (
    <div>
      <h1
        className="text-2xl py-16 text-center font-black text-purple-950  px-7"
        style={{ fontFamily: "arial" }}
      >
        MAID PER DAY
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <MaidPerDayCalender></MaidPerDayCalender>
        </div>
        <div>
          <MaidServicePerDay></MaidServicePerDay>
        </div>
        <div>
          <MaidPerDayAddress></MaidPerDayAddress>
        </div>
      </div>
    </div>
  );
};

export default MaidPerDay;
