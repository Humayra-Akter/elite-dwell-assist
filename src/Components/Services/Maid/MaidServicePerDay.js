import React, { useState } from "react";
import banner1 from "../../../images/maid/1.jpg";
import banner2 from "../../../images/maid/2.jpeg";
import banner3 from "../../../images/maid/3.jpeg";
import banner4 from "../../../images/maid/4.jpg";
import btn from "../../../images/bg.jpg";

const MaidServicePerDay = ({ selectedTimeSlot }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleServiceSelect = (service) => {
    const updatedServices = [...selectedServices];

    const serviceIndex = updatedServices.indexOf(service);

    if (serviceIndex !== -1) {
      updatedServices.splice(serviceIndex, 1);
    } else {
      updatedServices.push(service);
    }

    setSelectedServices(updatedServices);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const isBookButtonDisabled = selectedServices.length === 0;

  return (
    <div className="ml-10 mt-20">
      {/* Sweeping */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={banner1} alt="Sweeping Icon" className="w-8 h-8" />
            <label className="text-lg font-medium">Sweeping</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="sweeping"
              className="form-checkbox h-6 w-6 text-primary"
              onChange={() => handleServiceSelect("Sweeping")}
            />
            <label
              htmlFor="sweeping"
              className="text-lg font-medium text-primary"
            >
              BDT 150
            </label>
          </div>
        </div>
      </div>{" "}
      {/* Washing_dishes */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={banner1} alt="Washing_dishes Icon" className="w-8 h-8" />
            <label className="text-lg font-medium">Washing Dishes</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="washing_dishes"
              className="form-checkbox h-6 w-6 text-primary"
              onChange={() => handleServiceSelect("Washing_dishes")}
            />
            <label
              htmlFor="washing_dishes"
              className="text-lg font-medium text-primary"
            >
              BDT 100
            </label>
          </div>
        </div>
      </div>
      {/* Mopping */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={banner2} alt="Mopping Icon" className="w-8 h-8" />
            <label className="text-lg font-medium">Mopping</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="mopping"
              className="form-checkbox h-6 w-6 text-primary"
              onChange={() => handleServiceSelect("Mopping")}
            />
            <label
              htmlFor="mopping"
              className="text-lg font-medium text-primary"
            >
              BDT 200
            </label>
          </div>
        </div>
      </div>
      {/* Cooking */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={banner3} alt="Cooking Icon" className="w-8 h-8" />
            <label className="text-lg font-medium">Cooking</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="cooking"
              className="form-checkbox h-6 w-6 text-primary"
              onChange={() => handleServiceSelect("Cooking")}
            />
            <label
              htmlFor="cooking"
              className="text-lg font-medium text-primary"
            >
              BDT 120
            </label>
          </div>
        </div>
      </div>
      {/* Washing Clothes */}
      <div className="bg-white w-80 p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={banner4} alt="Washing Clothes Icon" className="w-8 h-8" />
            <label className="text-lg font-medium">Washing Clothes</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="washing-clothes"
              className="form-checkbox h-6 w-6 text-primary"
              onChange={() => handleServiceSelect("Washing Clothes")}
            />
            <label
              htmlFor="washing-clothes"
              className="text-lg font-medium text-primary"
            >
              BDT 100
            </label>
          </div>
        </div>
      </div>
      {/* Display selected services and date */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-9 mb-4">
        <h2 className="text-lg font-bold text-primary">Selected Services:</h2>
        <p className="mt-4">
          {selectedDate && (
            <span>Selected Date: {selectedDate.toDateString()}</span>
          )}
          {selectedDate && selectedTimeSlot && (
            <span>, Time Slot: {selectedTimeSlot}</span>
          )}
        </p>
        {selectedServices.length === 0 ? (
          <p className="text-red-500">Select at least one service</p>
        ) : (
          <ul>
            {selectedServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        )}

        {selectedDate && (
          <p className="mt-4">Selected Date: {selectedDate.toDateString()}</p>
        )}
      </div>
    </div>
  );
};

export default MaidServicePerDay;
