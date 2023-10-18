import React, { useState } from "react";

import MaidPerMonth from "./MaidPerMonth";

const MaidSearchSegment = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  const handleAvailabilityChange = (e) => {
    setSelectedAvailability(e.target.value);
  };

  const handleTaskChange = (e) => {
    setSelectedTask(e.target.value);
  };

  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <MaidPerMonth
            selectedLocation={selectedLocation}
            selectedTask={selectedTask}
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
              value={selectedAvailability}
              onChange={handleAvailabilityChange}
              className="select select-bordered select-primary"
            >
              <option value="">Select Availability</option>
              <option value="sokal"> 08.00 AM - 11.00 AM</option>
              <option value="dupur">11.00 AM - 02.00 PM</option>
              <option value="bikal">02.00 PM - 05.00 PM</option>
              <option value="raat"> 05.00 PM - 08.00 PM</option>
            </select>

            <p className="mt-20"> Search by task</p>
            <select
              value={selectedTask}
              onChange={handleTaskChange}
              className="select select-bordered select-primary"
            >
              <option value="">Select Task</option>
              <option value="mopping">Mopping</option>
              <option value="cooking">Cooking</option>
              <option value="cloth_washing">Cloth Washing</option>
              <option value="sweeping">Sweeping</option>
              <option value="dish_washing">Dish Washing</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MaidSearchSegment;
