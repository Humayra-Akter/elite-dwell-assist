import React, { useState } from "react";
import DriverPerMonth from "./DriverPerMonth";
import { Outlet } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const DriverSearchSegment = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSalary, setSelectedSalary] = useState([10000, 30000]);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSalaryChange = (value) => {
    setSelectedSalary(value);
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input
          id="Driver-month-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="Driver-month-drawer"
            className="btn btn-secondary btn-sm absolute top-0 right-0 mt-2  drawer-button lg:hidden"
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
            <p className="mt-20 mb-3 text-primary font-bold text-lg">
              Search by location:
            </p>
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

            <p className="mt-14 mb-3 text-primary font-bold text-lg">
              Search by salary:
            </p>
            <Slider
              min={10000}
              max={30000}
              value={selectedSalary}
              onChange={handleSalaryChange}
              step={1000}
              marks={{
                10000: "10000",
                15000: "15000",
                20000: "20000",
                25000: "25000",
                30000: "30000",
              }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DriverSearchSegment;
