// SearchSlider.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTimeSlotFilter } from "../../../../redux/slices/searchSlice";

const SearchSlider = () => {
  const dispatch = useDispatch();
  const timeSlotFilters = useSelector((state) => state.search.timeSlotFilters);

  const handleTimeSlotToggle = (timeSlot) => {
    dispatch(toggleTimeSlotFilter({ timeSlot }));
  };

  return (
    <div>
      <h3>Filter by Time Slot</h3>
      <label>
        <input
          type="checkbox"
          checked={timeSlotFilters["08.00 AM - 11.00 AM"]}
          onChange={() => handleTimeSlotToggle("08.00 AM - 11.00 AM")}
        />
        08.00 AM - 11.00 AM
      </label>
      <label>
        <input
          type="checkbox"
          checked={timeSlotFilters["11.00 AM - 02.00 PM"]}
          onChange={() => handleTimeSlotToggle("11.00 AM - 02.00 PM")}
        />
        11.00 AM - 02.00 PM
      </label>

      <label>
        <input
          type="checkbox"
          checked={timeSlotFilters["02.00 PM - 05.00 PM"]}
          onChange={() => handleTimeSlotToggle("02.00 PM - 05.00 PM")}
        />
        02.00 PM - 05.00 PM
      </label>
      <label>
        <input
          type="checkbox"
          checked={timeSlotFilters["05.00 PM - 08.00 PM"]}
          onChange={() => handleTimeSlotToggle("05.00 PM - 08.00 PM")}
        />
        05.00 PM - 08.00 PM
      </label>
    </div>
  );
};

export default SearchSlider;
