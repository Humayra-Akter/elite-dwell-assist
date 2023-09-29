import React, { useEffect, useState } from "react";
import MaidPerMonth from "../MaidPerMonth";
import LocationDropdown from "./LocationDropdown";
import SearchSlider from "./SearchSlider";

const MaidSearchSegment = () => {
  const [maids, setMaids] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        setMaids(data);
      });
  }, []);

  const locations = [
    "All",
    "Dhanmondi",
    "Mirpur",
    "Savar",
    "Uttara",
    "Gulshan",
    "Mohammadpur",
    "Banani",
    "Motijheel",
  ];

  const minSalary = 0;
  const maxSalary = 5000;

  const availabilityOptions = [
    "08.00 AM - 11.00 AM",
    "02.00 PM - 05.00 PM",
    "05.00 PM - 08.00 PM",
  ];

  return (
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <MaidPerMonth />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-slate-100 text-base-content">
          <p className="mt-20">Search by Location</p>
          <LocationDropdown locations={locations} />

          <p className="mt-20">Search by Task Salary</p>
          <p className="mt-20">Search by Availability</p>
          <SearchSlider></SearchSlider>
        </ul>
      </div>
    </div>
  );
};

export default MaidSearchSegment;
