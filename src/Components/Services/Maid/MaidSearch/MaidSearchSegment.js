import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MaidSearchSegment = () => {
  const dispatch = useDispatch();
  const { location, salaryRange, availability } = useSelector(
    (state) => state.search
  );

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState(0);
  const [selectedAvailability, setSelectedAvailability] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSalaryRangeChange = (e) => {
    setSelectedSalaryRange(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setSelectedAvailability(e.target.value);
  };

  return (
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        
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

          <p className="mt-20">Search by task salary</p>
          <input
            type="range"
            min={0}
            max={5000} // Set the max salary range as per your requirement
            value={selectedSalaryRange}
            onChange={handleSalaryRangeChange}
            className="range range-primary"
          />
          <p className="mt-20 mb-3 text-md font-medium text-primary">
            Search by availability
          </p>


          {/* shokal */}
          <div className="bg-white px-12 py-2  rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="shokal"
                  value="08.00 AM - 11.00 AM"
                  className="form-checkbox h-6 w-6 text-primary"
                />
                <label
                  htmlFor="shokal"
                  className="text-sm font-medium text-primary"
                >
                  08.00 AM - 11.00 AM
                </label>
              </div>
            </div>
          </div>

          {/* dupur */}
          <div className="bg-white px-12 py-2  rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="dupur"
                  value=" 02.00 PM - 05.00 PM"
                  className="form-checkbox h-6 w-6 text-primary"
                />
                <label
                  htmlFor="dupur"
                  className="text-sm font-medium text-primary"
                >
                  11.00 AM - 02.00 PM
                </label>
              </div>
            </div>
          </div>
          {/* bikal */}
          <div className="bg-white px-12 py-2  rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="bikal"
                  value=" 02.00 PM - 05.00 PM"
                  className="form-checkbox h-6 w-6 text-primary"
                />
                <label
                  htmlFor="bikal"
                  className="text-sm font-medium text-primary"
                >
                  02.00 PM - 05.00 PM
                </label>
              </div>
            </div>
          </div>
          {/* raat */}
          <div className="bg-white px-12 py-2 rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="raat"
                  value="05.00 PM - 08.00 PM"
                  className="form-checkbox h-6 w-6 text-primary"
                />
                <label
                  htmlFor="raat"
                  className="text-sm font-medium text-primary"
                >
                  05.00 PM - 08.00 PM
                </label>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MaidSearchSegment;
