import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreatePostForMaid = ({ onSearch }) => {
  // Define state variables for form fields
  const [location, setLocation] = useState("");
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [availabilityMonth, setAvailabilityMonth] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [gender, setGender] = useState("");
  const [budget, setBudget] = useState("");
  const [additionalPreferences, setAdditionalPreferences] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleServiceChange = (e) => {
    const service = e.target.value;
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card-body bg-transparent border-2 shadow-md">
      <h1
        style={{ fontFamily: "arial" }}
        className="text-center text-2xl text-primary font-extrabold"
      >
        Discover Home Services Tailored to You
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 pt-5 gap-3">
          {/* Location */}
          <div className="form-control mt-3 w-full">
            <label className="text-primary font-bold text-md">Location</label>
            <input
              type="text"
              placeholder="Your Location"
              value={location}
              name="location"
              className="input input-sm input-bordered w-full"
              onChange={(e) => setLocation(e.target.value)}
              {...register("location", {
                required: {
                  value: true,
                  message: "Location is required",
                },
              })}
            />
            <label>
              {errors.location?.type === "required" && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.location.message}
                </span>
              )}
            </label>
          </div>
          {/* Availability Date */}
          <div className="form-control mt-3  w-full">
            <label className="text-primary font-bold text-md">
              Availability Date
            </label>
            <input
              type="date"
              value={availabilityDate}
              name="availabilityDate"
              className="input input-sm input-bordered w-full"
              onChange={(e) => setAvailabilityDate(e.target.value)}
              {...register("availabilityDate", {
                required: {
                  value: true,
                  message: "availabilityDate is required",
                },
              })}
            />
            <label>
              {errors.availabilityDate?.type === "required" && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.availabilityDate.message}
                </span>
              )}
            </label>
          </div>
          {/* Availability Date */}
          <div className="form-control mt-3  w-full">
            <label className="text-primary font-bold text-md">
              Availability Month
            </label>
            <input
              type="number"
              value={availabilityMonth}
              name="availabilityMonth"
              className="input input-sm input-bordered w-full"
              onChange={(e) => setAvailabilityMonth(e.target.value)}
              {...register("availabilityMonth", {
                required: {
                  value: true,
                  message: "availabilityMonth is required",
                },
                pattern: {
                  value: Number,
                  message: "Only number is accepted",
                },
              })}
            />
            <label>
              {errors.availabilityMonth?.type === "required" && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.availabilityMonth.message}
                </span>
              )}
            </label>
            <label>
              {errors.availabilityMonth?.type === "pattern" && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.availabilityMonth.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-5 gap-3">
          {/* Time Slot */}
          <div className="form-control mt-3  w-full">
            <label className="text-primary font-bold text-md">Time Slot</label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="input input-sm input-bordered w-full"
            >
              <option value="">Select Time Slot</option>
              <option value="morning">08.00 AM - 11.00 AM</option>
              <option value="afternoon">11.00 AM - 02.00 PM</option>
              <option value="evening"> 02.00 PM - 05.00 PM</option>
              <option value="night">05.00 PM - 08.00 PM</option>
            </select>
          </div>
          {/* Budget */}
          <div className="form-control mt-3  w-full">
            <label className="text-primary font-bold text-md">Budget</label>
            <input
              type="number"
              placeholder="Your Budget"
              value={budget}
              name="budget"
              className="input input-sm input-bordered w-full"
              onChange={(e) => setBudget(e.target.value)}
              {...register("budget", {
                required: {
                  value: true,
                  message: "budget is required",
                },
                pattern: {
                  value: /[0-9]*/,
                  message: "Provide a valid budget",
                },
              })}
            />
            <label>
              {errors.budget?.type === "pattern" && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.budget.message}
                </span>
              )}
            </label>
            <label>
              {errors.budget?.type === "required" && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.budget.message}
                </span>
              )}
            </label>
          </div>
          {/* Additional Preferences */}
          <div className="form-control mt-3  w-full">
            <label className="text-primary font-bold text-md">
              Additional Preferences
            </label>
            <input
              type="text"
              placeholder="Your Additional Preferences, if no, then write N/A"
              value={additionalPreferences}
              name="additionalPreferences"
              className="input input-sm input-bordered w-full"
              onChange={(e) => setAdditionalPreferences(e.target.value)}
              {...register("additionalPreferences", {
                required: {
                  value: true,
                  message: "additionalPreferences is required",
                },
              })}
            />
            <label>
              {errors.additionalPreferences?.type === "required" && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.additionalPreferences.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-5 gap-3">
          {/* Services Needed */}
          <div className="form-control mt-3  w-full">
            <label className="text-primary font-bold text-md">
              Services Needed
            </label>
            <label>
              <input
                type="checkbox"
                value="Mopping"
                checked={selectedServices.includes("Mopping")}
                onChange={handleServiceChange}
              />{" "}
              Mopping <br />
              <input
                type="checkbox"
                value="Cooking"
                checked={selectedServices.includes("Cooking")}
                onChange={handleServiceChange}
              />{" "}
              Cooking
              <br />
              <input
                type="checkbox"
                value="Sweeping"
                checked={selectedServices.includes("Sweeping")}
                onChange={handleServiceChange}
              />{" "}
              Sweeping
              <br />
              <input
                type="checkbox"
                value="Washing Dishes"
                checked={selectedServices.includes("Washing Dishes")}
                onChange={handleServiceChange}
              />{" "}
              Washing Dishes
              <br />
              <input
                type="checkbox"
                value="Washing Clothes"
                checked={selectedServices.includes("Washing Clothes")}
                onChange={handleServiceChange}
              />{" "}
              Washing Clothes
            </label>
          </div>
          {/* Maid's Gender */}
          <div className="form-control mt-3  w-full">
            <label className="text-primary font-bold text-md">
              Maid's Gender
            </label>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                value="noPreference"
                checked={gender === "noPreference"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              No Preference
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-end justify-end">
          <input
            className="btn mt-5 btn-sm text-xs w-1/4 border-blue-500 text-white font-bold bg-primary"
            value="Request for Home-service"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePostForMaid;
