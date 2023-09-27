import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner4 from "../../images/bg.jpg";
import { MultiSelect } from "react-multi-select-component";
import bengaliLabels from "../../bengaliText";

const MaidRegistrationForm = () => {
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState({});
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  function calculateTotalCost(selectedExpertise) {
    return selectedExpertise.reduce((total, expertise) => {
      return total + expertiseSalaries[expertise.value];
    }, 0);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

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

  const handleAddMaid = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const contact = event.target.contact.value;
    const gender = selectedGender[0]?.value;
    const experience = selectedExperience[0]?.label; // Assuming you want the label (e.g., "2 years") instead of the value
    const education = event.target.education.value;
    const availability = selectedAvailability.map((avail) => avail.value);
    const location = selectedLocation.map((loc) => loc.value);
    const nid = event.target.nid.value;
    const dob = event.target.dob.value;

    // Password field
    const userPassword = password;

    // Tasks (selectedExpertise)
    const tasks = selectedExpertise.map((task) => task.value);

    // Salary for each task
    const salaryForTasks = {};
    selectedExpertise.forEach((task) => {
      salaryForTasks[task.value] = selectedSalaries[task.value];
    });

    // Construct the maid object
    const maid = {
      name,
      email,
      pass: userPassword,
      phone: contact,
      img: "/images/maid/1.jpg", // Assuming this is a static value
      experience,
      task: tasks,
      salary: Object.values(salaryForTasks), // Extract salaries as an array
      availability,
      location,
      nid_no: nid,
      address,
      dob,
      gender,
      education,
    };

    // Send the maid data to the backend
    fetch("http://localhost:5000/maid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(maid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
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
            <form onSubmit={handleAddMaid}>
              <div className="grid grid-cols-2 pt-5 gap-3">
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
                    name="name"
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
                    name="email"
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
                    name="address"
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
                    name="contact"
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
                    name="gender"
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
                    name="experience"
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
                    <select className="select" name="education" required>
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
                  name="expertise"
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
                    name="availability"
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
                    name="location"
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
                    name="nid"
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
                    name="dob"
                    placeholder="mm-dd-yyyy"
                    className="input input-sm input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* Image upload field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Upload Image
                  </span>
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="input input-sm w-full"
                  onChange={handleImageChange}
                />
              </div>
              {/* Password field */}
              <div className="form-control w-full pb-11">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={handlePasswordChange}
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
