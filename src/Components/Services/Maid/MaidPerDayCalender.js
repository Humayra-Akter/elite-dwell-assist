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
    <div className="mx-16 ">
      <div className="flex  gap-5">
        <div className="time-slot-container pt-28">
          <strong className="text-lg font-bold text-justify text-purple-900">
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
          <h1 className="text-lg font-bold text-purple-900 text-center px-7 pt-11">
            Select a Date and Time Slot
          </h1>
          <div className="calendar-container">
            <DayPicker selected={selectedDate} onDayClick={handleDateSelect} />
          </div>
        </div>
      </div>
      <button
        style={{
          background: `url(${banner4})`,
          backgroundSize: "cover",
          margin: "10px 30px",
          marginBottom: "100px",
        }}
        onClick={handleBooking}
        className="btn w-1/3 btn-sm border-purple-500 text-purple-950 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
        type="submit"
      >
        Book
      </button>
    </div>
  );
};

export default MaidPerDayCalender;
