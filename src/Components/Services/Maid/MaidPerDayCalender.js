import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const MaidPerDayCalender = ({
  selectedDate,
  setSelectedDate,
  selectedTimeSlot,
  setSelectedTimeSlot,
}) => {
  const handleTimeSlotSelect = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };


  return (
    <div className="ml-12">
      <div>
        <div className="time-slot-container pt-20">
          <strong className="text-lg mx-5 font-bold text-center text-primary">
            Select a Time Slot :
          </strong>
          <select
            className="input input-bordered input-sm"
            value={selectedTimeSlot}
            onChange={handleTimeSlotSelect}
          >
            <option value="">Select</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div>
          <h1 className="text-lg font-bold text-primary mx-5 pt-11">
            Select a Date and Time Slot
          </h1>
          <div className="calendar-container">
            <DayPicker selected={selectedDate} onDayClick={handleDateSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidPerDayCalender;
