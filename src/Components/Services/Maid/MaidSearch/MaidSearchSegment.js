import React, { useState } from "react";
import MaidPerMonth from "../MaidPerMonth";

const MaidSearchSegment = () => {
  return (
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <MaidPerMonth />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-blue-100 text-base-content">
          <p className="mt-20">Search by location</p>
          <select className="select select-bordered select-primary">
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

          <div>
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search here"
              autoComplete="off"
              className="p-3 mt-16 border border-gray-400 text-sm rounded-lg outline-none w-full"
            />
          </div>

          <p className="mt-20">Search by task salary</p>
          <input
            type="range"
            min={0}
            max={5000} // Set the max salary range as per your requirement
            className="range range-primary"
          />

          <p className="mt-20">Search by availability</p>
          <select className="select select-bordered select-primary">
            <option value="">Select Availability</option>
            <option value="08.00 AM - 11.00 AM">08.00 AM - 11.00 AM</option>
            <option value="02.00 PM - 05.00 PM">02.00 PM - 05.00 PM</option>
            <option value="05.00 PM - 08.00 PM">05.00 PM - 08.00 PM</option>
            {/* Add more options as needed */}
          </select>
        </ul>
      </div>
    </div>
  );
};

export default MaidSearchSegment;
