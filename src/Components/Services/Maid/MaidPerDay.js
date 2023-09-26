import React, { useState } from "react";
import MaidPerDayCalender from "./MaidPerDayCalender";
import MaidPerDayAddress from "./MaidPerDayAddress";
import MaidServicePerDay from "./MaidServicePerDay";
import Footer from "../../Shared/Footer";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const MaidPerDay = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isBookButtonDisabled, setIsBookButtonDisabled] = useState(true);

  const handleServiceSelect = (service) => {
    const updatedServices = [...selectedServices];
    if (updatedServices.includes(service)) {
      updatedServices.splice(updatedServices.indexOf(service), 1);
    } else {
      updatedServices.push(service);
    }
    setSelectedServices(updatedServices);
    setIsBookButtonDisabled(updatedServices.length === 0);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTimeSlot && selectedServices.length > 0) {
      // Do something with the selected date, time slot, and services
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      console.log("Selected Date:", formattedDate);
      console.log("Selected Time Slot:", selectedTimeSlot);
      console.log("Selected Services:", selectedServices);
    } else {
      // Handle validation or show an error message
      console.error(
        "Please select a date, time slot, and at least one service."
      );
    }
  };

  const displaySelectedInfo = () => {
    let info = "Selected Date: ";
    if (selectedDate) {
      info += selectedDate.toDateString();
    }

    if (selectedServices.length > 0) {
      info += " | Selected Services: " + selectedServices.join(", ");
    }

    if (selectedTimeSlot) {
      info += " | Selected Time Slot: " + selectedTimeSlot;
    }

    return info;
  };

  return (
    <div>
      <h1
        className="text-2xl py-7 text-center font-black text-purple-950 px-7"
        style={{ fontFamily: "arial" }}
      >
        MAID PER DAY
      </h1>
      <div className="bg-white p-4 mt-7 mx-96 rounded-lg shadow-md mb-4">
        <p className="text-lg text-center text-primary font-semibold">
          {displaySelectedInfo()}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-7">
        <div className="flex">
          <MaidPerDayCalender
            selectedDate={selectedDate}
            setSelectedDate={handleDateSelect}
            selectedTimeSlot={selectedTimeSlot}
            setSelectedTimeSlot={handleTimeSlotSelect}
          />
          <MaidServicePerDay
            selectedServices={selectedServices}
            handleServiceSelect={handleServiceSelect}
          />
        </div>
        <div>
          <MaidPerDayAddress selectedServices={selectedServices} />
        </div>
      </div>
      {/* <button
        onClick={handleBooking}
        className={`btn w-1/3 btn-sm border-blue-500 text-white text-xs font-bold bg-primary ${
          isBookButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="submit"
        disabled={isBookButtonDisabled}
      >
        Book
      </button> */}
      <Footer />
    </div>
  );
};

export default MaidPerDay;
