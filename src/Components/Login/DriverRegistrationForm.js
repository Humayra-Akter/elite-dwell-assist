import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner4 from "../../images/bg.jpg";
import { MultiSelect } from "react-multi-select-component";

const DriverRegistrationForm = () => {
  //   const [selectedRole, setSelectedRole] = useState("");
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState({});
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const handleVehicleTypeChange = (selectedOptions) => {
    setSelectedVehicleType(selectedOptions);

    // Initialize selected salaries for the newly selected vehicleType
    const newSelectedSalaries = {};
    selectedOptions.forEach((vehicleType) => {
      newSelectedSalaries[vehicleType.value] =
        vehicleTypeSalaries[vehicleType.value][0];
    });
    setSelectedSalaries(newSelectedSalaries);
  };

  const handleSalaryChange = (vehicleType, salary) => {
    setSelectedSalaries((prevSelectedSalaries) => ({
      ...prevSelectedSalaries,
      [vehicleType]: salary,
    }));
  };

  const handleExperienceChange = (selectedOptions) => {
    setSelectedExperience(selectedOptions);
  };

  const handleLocation = (selectedOptions) => {
    setSelectedLocation(selectedOptions);
  };

  const handleAvailability = (selectedOptions) => {
    setSelectedAvailability(selectedOptions);
  };

  const locationOptions = [
    {
      label: "dhanmondi",
      value: "dhanmondi",
    },
    { label: "mirpur", value: "mirpur" },
    { label: "savar", value: "savar" },
    { label: "uttora", value: "uttora" },
    { label: "gulshan", value: "gulshan" },
    { label: "mohammadpur", value: "mohammadpur" },
    { label: "banani", value: "banani" },
    { label: "motijheel", value: "motijheel" },
  ];

  const availabilityOptions = [
    { label: "08.00 AM - 11.00 AM", value: "08.00 AM - 11.00 AM" },
    { label: "11.00 AM - 02.00 PM", value: "11.00 AM - 02.00 PM" },
    { label: "02.00 PM - 05.00 PM", value: "02.00 PM - 05.00 PM" },
    { label: "05.00 PM - 08.00 PM", value: "05.00 PM - 08.00 PM" },
  ];

  const experienceOptions = [
    { value: 1, label: "1 year" },
    { value: 2, label: "2 year" },
    { value: 3, label: "3 year" },
    { value: 4, label: "4 year" },
    { value: 5, label: "5 year" },
    { value: 6, label: "6 year" },
    { value: 7, label: "7 year" },
    { value: 8, label: "8 year" },
    { value: 9, label: "more than 9 year" },
  ];

  const vehicleTypeOptions = [
    { value: "car", label: "Car" },
    { value: "van", label: "Van" },
    { value: "truck", label: "Truck" },
  ];

  const vehicleTypeSalaries = {
    car: [10000, 15000, 2000],
    van: [200, 400, 500],
    truck: [300, 500, 700],
  };
  return (
    <div className=" py-16">
      <div className="mx-auto max-w-4xl">
        <div className="card bg-transparent border-purple-300 border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "arial" }}
              className="text-center text-2xl text-blue-700 font-extrabold"
            >
              Register as <strong>DRIVER</strong>
            </h1>

            {/* <form onSubmit={handleFormSubmit}> */}
            <form>
              <div className="form-control pt-5 w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  //   value={name}
                  //   onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* email field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full "
                  required
                />
              </div>
              {/* contact field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Contact
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Contact number"
                  //   value={contact}
                  //   onChange={(e) => setContact(e.target.value)}
                  className="input input-bordered w-full "
                  required
                />
              </div>
              {/* Gender field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-left text-blue-700 font-bold text-xs">
                    Gender
                  </span>
                </label>
                <div className="input text-left w-full ">
                  <select className="select" required>
                    <option disabled selected>
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* {selectedRole === "Babysitter" && ( */}
              <div>
                {/* Education field */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-left text-blue-700 font-bold text-xs">
                      Education
                    </span>
                  </label>
                  <div className="input text-left w-full ">
                    <select className="select" required>
                      <option disabled selected>
                        Select your education
                      </option>
                      <option value="male">SSC pass</option>
                      <option value="female">JSC pass</option>
                    </select>
                  </div>
                </div>
                {/* Experience dropdown */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Experience
                    </span>
                  </label>
                  <MultiSelect
                    options={experienceOptions}
                    value={selectedExperience}
                    onChange={handleExperienceChange}
                    labelledBy={"Select"}
                    overrideStrings={{
                      selectSomeItems: "Select experiences",
                    }}
                  />
                </div>
                {/*vehicleType*/}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Vehicle Type
                    </span>
                  </label>
                  <MultiSelect
                    options={vehicleTypeOptions}
                    value={selectedVehicleType}
                    onChange={handleVehicleTypeChange}
                    labelledBy="Select vehicleType"
                  />
                </div>
                <div className="form-control w-full">
                  {selectedVehicleType.map((vehicleType) => (
                    <div key={vehicleType.value} className="py-2">
                      <label className="label">
                        <span className="label-text text-blue-700 font-bold text-md">
                          {vehicleType.label} Salary
                        </span>
                      </label>
                      <select
                        value={selectedSalaries[vehicleType.value]}
                        onChange={(e) =>
                          handleSalaryChange(vehicleType.value, e.target.value)
                        }
                        className="input input-bordered w-full"
                      >
                        {vehicleType.value === "car"
                          ? vehicleTypeSalaries[vehicleType.value].map(
                              (salary) => (
                                <option key={salary} value={salary}>
                                  {salary} bdt per month
                                </option>
                              )
                            )
                          : vehicleTypeSalaries[vehicleType.value].map(
                              (salary) => (
                                <option key={salary} value={salary}>
                                  {salary} bdt per km/h
                                </option>
                              )
                            )}
                      </select>
                    </div>
                  ))}
                </div>
                {/* Conditionally render the "availability" field for van/truck */}
                {selectedVehicleType.some((vehicleType) =>
                  ["van", "truck"].includes(vehicleType.value)
                ) && (
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Availability
                      </span>
                    </label>
                    <MultiSelect
                      options={availabilityOptions}
                      value={selectedAvailability}
                      onChange={handleAvailability}
                      labelledBy={"Select availability"}
                      overrideStrings={{
                        selectSomeItems: "Select availability",
                      }}
                    />
                  </div>
                )}

                {/* location */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Location
                    </span>
                  </label>
                  <MultiSelect
                    options={locationOptions}
                    value={selectedLocation}
                    onChange={handleLocation}
                    labelledBy={"Select location"}
                    overrideStrings={{
                      selectSomeItems: "Select preferred location",
                    }}
                  />
                </div>

                {/* nid_no */}
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      NID_no
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="eg : 1234567890111"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* Driving license */}
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Driving license no
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="eg : DD-123456789"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* address */}
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your address"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* dob */}
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Date of Birth
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your dob"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* )} */}
              {/* password field */}
              <div className="form-control w-full pb-11">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  //   value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <button
                style={{
                  background: `url(${banner4})`,
                  backgroundSize: "cover",
                }}
                className="btn w-full btn-sm border-purple-500 text-purple-950 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
                type="submit"
              >
                Go ahead
              </button>
              {/* {loading && <div>Loading...</div>} */}
            </form>
            <p className="text-center">
              <small className="font-semibold">
                Already have an account at elite-dwell-assist?
                <Link className="text-blue-700" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverRegistrationForm;
