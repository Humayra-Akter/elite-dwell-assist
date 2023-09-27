import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner4 from "../../images/bg.jpg";
import { MultiSelect } from "react-multi-select-component";

const BabysitterRegistrationForm = () => {
  //   const [selectedRole, setSelectedRole] = useState("");
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedAgeGroupPreferences, setSelectedAgeGroupPreferences] =
    useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedCertifications, setSelectedCertifications] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  //   const handleRoleChange = (e) => {
  //     setSelectedRole(e.target.value);
  //   };

  const handleExperienceChange = (selected) => {
    setSelectedExperience([selected[selected.length - 1]]);
  };

  const handleLocation = (selectedOptions) => {
    setSelectedLocation(selectedOptions);
  };

  const handleCertifications = (selectedOptions) => {
    setSelectedCertifications(selectedOptions);
  };

  const handleAgeGroupPreferencesChange = (selectedOptions) => {
    setSelectedAgeGroupPreferences(selectedOptions);
  };

  const handleAvailability = (selectedOptions) => {
    setSelectedAvailability(selectedOptions);
  };

  const handleLanguageChange = (selected) => {
    setSelectedLanguages(selected);
  };

  const languageOptions = [
    { label: "English", value: "English" },
    { label: "Bengali", value: "Bengali" },
  ];

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
    { label: "morning", value: "morning" },
    { label: "afternoon", value: "afternoon" },
    { label: "evening", value: "evening" },
  ];

  const certificationOptions = [
    { label: "CPR", value: "CPR" },
    { label: "First Aid", value: "First Aid" },
  ];

  const experienceOptions = [
    { value: 6, label: "6 months" },
    { value: 12, label: "12 months" },
    { value: 24, label: "24 months" },
  ];

  const ageGroupPreferencesOptions = [
    { value: "infants", label: "Infants" },
    { value: "toddlers", label: "Toddlers" },
    { value: "school-age", label: "School-age" },
    // Add more options as needed
  ];

  return (
    <div>
      <div className="mx-auto max-w-4xl">
        <div className="card max-w-screen-lg bg-transparent border-blue-300 border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "arial" }}
              className="text-center text-2xl text-blue-700 font-extrabold"
            >
              Register as Babysitter
            </h1>
            {/* <form onSubmit={handleFormSubmit}> */}
            <form>
              <div className="grid grid-cols-2 gap-3 pt-5">
                {" "}
                {/* name field */}
                <div className="form-control w-full">
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
                    className="input input-sm input-bordered w-full"
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
                    className="input input-sm input-bordered w-full "
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-5">
                {" "}
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
                    className="input input-sm input-bordered w-full "
                    required
                  />
                </div>
                {/* address */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your address"
                    className="input input-sm input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-5">
                {/* Gender field */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-left text-blue-700 font-bold text-xs">
                      Gender
                    </span>
                  </label>
                  <div className="input input-bordered text-left w-full ">
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

                {/* Education field */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-left text-blue-700 font-bold text-xs">
                      Education
                    </span>
                  </label>
                  <div className="input input-bordered text-left w-full ">
                    <select className="select" required>
                      <option disabled selected>
                        Select your education
                      </option>
                      <option value="male">SSC pass</option>
                      <option value="female">HSC pass</option>
                      <option value="other">BSc pass</option>
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
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-5">
                {/* Age group preferences */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Age group preferences
                    </span>
                  </label>
                  <MultiSelect
                    options={ageGroupPreferencesOptions}
                    value={selectedAgeGroupPreferences}
                    onChange={handleAgeGroupPreferencesChange}
                    labelledBy={"Select"}
                    overrideStrings={{ selectSomeItems: "Select age groups" }}
                  />
                </div>
                {/* special_skills */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      special_skills
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your location"
                    className="input input-sm input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-5">
                {/* Language Spoken */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Languages Spoken
                    </span>
                  </label>
                  <MultiSelect
                    options={languageOptions}
                    value={selectedLanguages}
                    onChange={handleLanguageChange}
                    labelledBy={"Select language"}
                    overrideStrings={{ selectSomeItems: "Select language" }}
                    disableSearch={false}
                  />
                </div>
                {/* certifications */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Certifications
                    </span>
                  </label>
                  <MultiSelect
                    options={certificationOptions}
                    value={selectedCertifications}
                    onChange={handleCertifications}
                    labelledBy={"Select certifications"}
                    overrideStrings={{
                      selectSomeItems: "Select certifications",
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-5">
                {/* availability */}
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
              </div>
              <div className="grid grid-cols-2 gap-3 pt-5">
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
                    placeholder="Your nid_no"
                    className="input input-sm input-bordered w-full"
                    required
                  />
                </div>
                {/* dob */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Date of Birth
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
                className="btn w-full btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
                type="submit"
              >
                Register
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

export default BabysitterRegistrationForm;
