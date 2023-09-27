import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner4 from "../../images/bg.jpg";
import { MultiSelect } from "react-multi-select-component";
import bengaliLabels from "../../bengaliText";

const MaidRegistrationForm = () => {
  //   const [selectedRole, setSelectedRole] = useState("");
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState({});
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  //   const handleRoleChange = (e) => {
  //     setSelectedRole(e.target.value);
  //   };

  function calculateTotalCost(selectedExpertise) {
    return selectedExpertise.reduce((total, expertise) => {
      return total + expertiseSalaries[expertise.value];
    }, 0);
  }

  const handleExpertiseChange = (selectedOptions) => {
    setSelectedExpertise(selectedOptions);

    // Initialize selected salaries for the newly selected expertise
    const newSelectedSalaries = {};
    selectedOptions.forEach((expertise) => {
      newSelectedSalaries[expertise.value] =
        expertiseSalaries[expertise.value][0];
    });
    setSelectedSalaries(newSelectedSalaries);
  };

  const handleSalaryChange = (expertise, salary) => {
    setSelectedSalaries((prevSelectedSalaries) => ({
      ...prevSelectedSalaries,
      [expertise]: salary,
    }));
  };

  const handleExperienceChange = (selectedOptions) => {
    setSelectedExperience(selectedOptions);
  };

  const handleGender = (selected) => {
    setSelectedGender([selected[selected.length - 1]]);
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

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const availabilityOptions = [
    { label: "08.00 AM - 11.00 AM", value: "08.00 AM - 11.00 AM" },
    { label: "11.00 AM - 02.00 PM", value: "11.00 AM - 02.00 PM" },
    { label: "02.00 PM - 05.00 PM", value: "02.00 PM - 05.00 PM" },
    { label: "05.00 PM - 08.00 PM", value: "05.00 PM - 08.00 PM" },
  ];

  const experienceOptions = [
    { value: 6, label: "6 months" },
    { value: 12, label: "12 months" },
    { value: 24, label: "24 months" },
    { value: 48, label: "48 months" },
    { value: 52, label: "52 months" },
    { value: 60, label: "60 months" },
    { value: 90, label: "90 months" },
    { value: 102, label: "102 months" },
    { value: 114, label: "other" },
  ];

  const expertiseOptions = [
    { value: "mopping", label: "Mopping" },
    { value: "cooking", label: "Cooking" },
    { value: "cloth_washing", label: "Cloth Washing" },
    { value: "sweeping", label: "Sweeping" },
    { value: "dish_washing", label: "Dish Washing" },
  ];

  const expertiseSalaries = {
    mopping: [1000, 1500, 1200],
    cooking: [2000, 1800, 2200],
    cloth_washing: [1500, 1400, 1600],
    sweeping: [500, 600, 550],
    dish_washing: [1500, 1600, 1550],
  };
  return (
    <div>
      <div className="mx-auto max-w-4xl">
        <div className="card bg-transparent border-blue-300 border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "arial" }}
              className="text-center text-2xl text-blue-700 font-extrabold"
            >
              Register as <strong>MAID</strong>
            </h1>
            <p className="text-center ">{bengaliLabels.maid}</p>

            {/* <form onSubmit={handleFormSubmit}> */}
            <form>
              <div className="grid grid-cols-2 pt-5 gap-3">
                {" "}
                {/* name field */}
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Name /{bengaliLabels.name}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    //   value={name}
                    //   onChange={(e) => setName(e.target.value)}
                    className="input input-sm input-bordered w-full"
                    required
                  />
                </div>
                {/* email field */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Email/{bengaliLabels.email}
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    //   value={email}
                    //   onChange={(e) => setEmail(e.target.value)}
                    className="input input-sm input-bordered w-full "
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 pt-5 gap-3">
                {" "}
                {/* address */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Address/{bengaliLabels.address}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your address"
                    className="input input-sm input-bordered w-full"
                    required
                  />
                </div>
                {/* contact field */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Contact/ {bengaliLabels.contact}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Contact number"
                    //   value={contact}
                    //   onChange={(e) => setContact(e.target.value)}
                    className="input input-sm input-bordered w-full "
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 pt-5 gap-3">
                {/* Gender field */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-left text-blue-700 font-bold text-xs">
                      Gender/{bengaliLabels.gender}
                    </span>
                  </label>
                  <MultiSelect
                    options={genderOptions}
                    value={selectedGender}
                    onChange={handleGender}
                    labelledBy={"Select"}
                  />
                </div>
                {/* Experience dropdown */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-sm">
                      Experience/{bengaliLabels.experience}
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
                {/* Education field */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-left text-blue-700 font-bold text-xs">
                      Education/{bengaliLabels.education}
                    </span>
                  </label>
                  <div className="input input-bordered input-sm text-left w-full">
                    <select className="select" required>
                      <option disabled defaultValue="">
                        Select your education
                      </option>
                      <option value="none">None/{bengaliLabels.none}</option>
                      <option value="ssc">SSC pass</option>
                      <option value="jsc">JSC pass</option>
                    </select>
                  </div>
                </div>
              </div>

              {/*expertise*/}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Expertise
                  </span>
                </label>
                <MultiSelect
                  options={expertiseOptions}
                  value={selectedExpertise}
                  onChange={handleExpertiseChange}
                  labelledBy="Select expertise"
                />
              </div>
              <div className="form-control w-full">
                {selectedExpertise.map((expertise) => (
                  <div key={expertise.value} className="py-2">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        {expertise.label} Salary
                      </span>
                    </label>
                    <select
                      value={selectedSalaries[expertise.value]}
                      onChange={(e) =>
                        handleSalaryChange(expertise.value, e.target.value)
                      }
                      className="input input-bordered w-full"
                    >
                      {expertiseSalaries[expertise.value].map((salary) => (
                        <option key={salary} value={salary}>
                          {salary} /-
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 pt-5 gap-3">
                {/* availability */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Availability/{bengaliLabels.availability}
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
                {/* location */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Location/{bengaliLabels.location}
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
              </div>
              <div className="grid grid-cols-2 pt-5 gap-3">
                {" "}
                {/* nid_no */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      NID_no
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="eg : 1234567890111"
                    className="input input-sm input-bordered w-full"
                    required
                  />
                </div>
                {/* dob */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Date of Birth/{bengaliLabels.dob}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your dob"
                    className="input input-sm input-bordered w-full"
                    required
                  />
                </div>
              </div>
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
                  className="input input-sm input-bordered w-full"
                  required
                />
              </div>
              <button
                className="btn btn-sm text-xs w-full border-blue-500 text-white font-bold bg-primary"
                type="submit"
              >
                REGISTER
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

export default MaidRegistrationForm;
