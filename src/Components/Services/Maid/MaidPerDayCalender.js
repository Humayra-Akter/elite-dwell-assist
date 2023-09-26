import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import banner4 from "../../../images/bg.jpg";

const MaidPerDayCalender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTimeSlot) {
      // Do something with the selected date and time slot
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      console.log("Selected Date:", formattedDate);
      console.log("Selected Time Slot:", selectedTimeSlot);
    } else {
      // Handle validation or show an error message
      console.error("Please select a date and time slot.");
    }
  };

  return (
    <div className="ml-16">
      <div>
        <div className="time-slot-container pt-28">
          <strong className="text-lg font-bold text-center text-blue-900">
            Select a Time Slot :
          </strong>
          <select value={selectedTimeSlot} onChange={handleTimeSlotSelect}>
            <option value="">Select</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div>
          <h1 className="text-lg font-bold text-blue-900 text-center px-7 pt-11">
            Select a Date and Time Slot
          </h1>
          <div className="calendar-container">
            <DayPicker selected={selectedDate} onDayClick={handleDateSelect} />
          </div>
        </div>
      </div>
      <button
        
        onClick={handleBooking}
        className="btn w-2/3 btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
        type="submit"
      >
        Book
      </button>
    </div>
  );
};

export default MaidPerDayCalender;
