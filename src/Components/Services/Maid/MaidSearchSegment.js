import React, { useState } from "react";

import MaidPerMonth from "./MaidPerMonth";

const MaidSearchSegment = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState(0);
  const [selectedAvailability, setSelectedAvailability] = useState("");

  const handleLocationChange = (e) => {
    setSelectedAvailability(e.target.value);
  };
  const handleAvailabilityChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSalaryRangeChange = (e) => {
    setSelectedSalaryRange(e.target.value);
  };

  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <MaidPerMonth
            selectedLocation={selectedLocation}
            selectedSalaryRange={selectedSalaryRange}
            selectedAvailability={selectedAvailability}
          />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-100 text-base-content">
            <p className="mt-20">Search by location</p>
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="select select-bordered select-primary"
            >
              <option value="">Select Location</option>
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="Mirpur">Mirpur</option>
              <option value="Savar">Savar</option>
              <option value="Uttara">Uttara</option>
              <option value="Gulshan">Gulshan</option>
              <option value="Mohammadpur">Mohammadpur</option>
              <option value="Banani">Banani</option>
              <option value="Motijheel">Motijheel</option>
            </select>

            <p className="mt-20"> Search by availability</p>
            <select
              value={selectedLocation}
              onChange={handleAvailabilityChange}
              className="select select-bordered select-primary"
            >
              <option value="">Select Availability</option>
              <option value="08.00 AM-11.00 AM"> 08.00 AM - 11.00 AM</option>
              <option value="11.00 AM-02.00 PM">11.00 AM - 02.00 PM</option>
              <option value="02.00 PM-05.00 PM">02.00 PM - 05.00 PM</option>
              <option value="05.00 PM-08.00 PM"> 05.00 PM - 08.00 PM</option>
            </select>

            <p className="mt-20">Search by task salary</p>
            <input
              type="range"
              min={400}
              max={2000}
              step={100}
              value={selectedSalaryRange}
              onChange={(e) => {
                // Define your allowed salary values
                const allowedValues = [
                  400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
                  1500, 1600, 1700, 1800, 1900, 2000,
                ];

                // Find the nearest allowed value to the current value
                const nearestValue = allowedValues.reduce((prev, curr) =>
                  Math.abs(curr - e.target.value) <
                  Math.abs(prev - e.target.value)
                    ? curr
                    : prev
                );

                setSelectedSalaryRange(nearestValue);
              }}
              className="range range-primary"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MaidSearchSegment;
