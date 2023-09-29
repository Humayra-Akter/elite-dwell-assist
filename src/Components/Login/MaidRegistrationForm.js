import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import bengaliLabels from "../../bengaliText";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const MaidRegistrationForm = () => {
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState({});
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [password, setPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function calculateTotalCost(selectedExpertise) {
    return selectedExpertise.reduce((total, expertise) => {
      return total + expertiseSalaries[expertise.value];
    }, 0);
  }

  const openSuccessModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the success modal
  const closeSuccessModal = () => {
    setIsModalOpen(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      console.error("File size exceeds the limit.");
      return;
    }
    setSelectedImage(file);
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
    { value: 1, label: "1 year" },
    { value: 2, label: "2 year" },
    { value: 3, label: "3 year" },
    { value: 4, label: "4 year" },
    { value: 5, label: "5 year" },
    { value: 6, label: "6 year" },
    { value: 7, label: "7 year" },
    { value: 8, label: "8 year" },
    { value: 9, label: "9 year" },
    { value: 10, label: "more than 10 year" },
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
    const experience = selectedExperience[0]?.label;
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

    // maid object
    const maid = {
      name,
      email,
      pass: userPassword,
      phone: contact,
      img: selectedImage,
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
        openSuccessModal(); // Open the success modal
        setTimeout(() => {
          closeSuccessModal(); // Close the success modal
        }, 3000);
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
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label>
                    {errors.name?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
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
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  <label>
                    {errors.email?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 pt-5 gap-3">
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
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                  <label>
                    {errors.address?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* contact field */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Contact/ {bengaliLabels.contact}
                    </span>
                  </label>
                  <input
                    type="digit"
                    placeholder="Your Contact number"
                    name="contact"
                    className="input input-sm input-bordered w-full "
                    {...register("contact", {
                      required: {
                        value: true,
                        message: "contact is required",
                      },
                      pattern: {
                        value: /[0-9]*/,
                        message: " Your Contact number should have digits only",
                      },
                      minLength: {
                        value: 11,
                        message: "Provide a valid contact",
                      },
                      maxLength: {
                        value: 11,
                        message: "Provide a valid contact",
                      },
                    })}
                  />
                  <label>
                    {errors.contact?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.contact.message}
                      </span>
                    )}
                    {errors.contact?.type === "pattern" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.contact.message}
                      </span>
                    )}
                    {errors.contact?.type === "minLength" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.contact.message}
                      </span>
                    )}
                    {errors.contact?.type === "maxLength" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.contact.message}
                      </span>
                    )}
                  </label>
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
                {/* nid_no */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      NID_no
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="eg: 1234567890111"
                    name="nid"
                    className="input input-sm input-bordered w-full "
                    {...register("nid", {
                      required: {
                        value: true,
                        message: "nid is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid nid",
                      },
                    })}
                  />
                  <label>
                    {errors.nid?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.nid.message}
                      </span>
                    )}
                    {errors.nid?.type === "pattern" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.nid.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* dob */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Date of Birth/{bengaliLabels.dob}
                    </span>
                  </label>{" "}
                  <input
                    type="text"
                    placeholder="mm-dd-yyyy"
                    name="dob"
                    className="input input-sm input-bordered w-full "
                    {...register("dob", {
                      required: {
                        value: true,
                        message: "DOB is required",
                      },
                      pattern: {
                        value:
                          /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/,
                        message: "Follow mm-dd-yyyy format",
                      },
                    })}
                  />
                  <label>
                    {errors.dob?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.dob.message}
                      </span>
                    )}
                    {errors.dob?.type === "pattern" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.dob.message}
                      </span>
                    )}
                  </label>
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
                  placeholder="Password"
                  name="password"
                  className="input input-sm input-bordered w-full "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters longer",
                    },
                  })}
                />
                <label>
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn btn-sm text-xs w-full border-blue-500 text-white font-bold bg-primary"
                type="submit"
                value="REGISTER"
              ></input>
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
      {/* Success Modal
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeSuccessModal}
        contentLabel="Success Modal"
        // Add modal styles here (e.g., setting width, height, etc.)
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "500px", // Set the width as needed
            height: "200px", // Set the height as needed
            margin: "auto", // Center the modal
          },
        }}
      >
        <h1
          className="text-3xl font-black text-primary text-center px-7"
          style={{ fontFamily: "arial" }}
        >
          Success!
        </h1>

        <p className="text-lg italic font-bold text-blue-600 text-center py-5">
          Data inserted successfully.
        </p>
        <button
          className="btn btn-sm text-xs w-1/3 mt-5 ml-40 border-blue-500 text-white font-bold bg-primary"
          // onClick={closeSuccessModal}
        >
          <Link to="/">Close</Link>
        </button>
      </Modal> */}
    </div>
  );
};

export default MaidRegistrationForm;
