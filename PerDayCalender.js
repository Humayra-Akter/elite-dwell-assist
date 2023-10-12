/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const PerDayCalender = ({
  selectedDate,
  setSelectedDate,
}) => {

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="ml-12">
      <div>
        <div>
          <div className="calendar-container">
            <DayPicker selected={selectedDate} onDayClick={handleDateSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerDayCalender;
