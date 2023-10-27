import React, { useState } from "react";

import DriverPerMonth from "./DriverPerMonth";
import { Outlet } from "react-router-dom";

const DriverSearchSegment = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSalary = (e) => {
    selectedSalary(e.target.value);
  };

  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="Driver-month-drawer" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="Driver-month-drawer"
            class="btn btn-primary btn-sm absolute top-0 right-0 mt-2  drawer-button lg:hidden"
          >
            Open Search Option
          </label>
          <DriverPerMonth
            selectedLocation={selectedLocation}
            selectedSalary={selectedSalary}
          />
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="Driver-month-drawer"
            className="drawer-overlay"
          ></label>
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
              <option value="Uttora">Uttora</option>
              <option value="Gulshan">Gulshan</option>
              <option value="Mohammadpur">Mohammadpur</option>
              <option value="Banani">Banani</option>
              <option value="Motijheel">Motijheel</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DriverSearchSegment;
