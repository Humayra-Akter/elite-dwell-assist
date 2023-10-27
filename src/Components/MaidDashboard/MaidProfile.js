import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MaidProfile = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMaid, setUpdatedMaid] = useState({});
  const [selectedSalary, setSelectedSalary] = useState(
    updatedMaid.salaryPerTask || ""
  );
  const locationOptions = [
    { label: "dhanmondi", value: "dhanmondi" },
    { label: "mirpur", value: "mirpur" },
    { label: "savar", value: "savar" },
    { label: "uttora", value: "uttora" },
    { label: "gulshan", value: "gulshan" },
    { label: "mohammadpur", value: "mohammadpur" },
    { label: "banani", value: "banani" },
    { label: "motijheel", value: "motijheel" },
  ];
  const expertiseOptions = [
    { value: "mopping", label: "Mopping" },
    { value: "cooking", label: "Cooking" },
    { value: "cloth_washing", label: "Cloth Washing" },
    { value: "sweeping", label: "Sweeping" },
    { value: "dish_washing", label: "Dish Washing" },
  ];
  const availabilityOptions = [
    { label: "08.00 AM - 11.00 AM", value: "sokal" },
    { label: "11.00 AM - 02.00 PM", value: "dupur" },
    { label: "02.00 PM - 05.00 PM", value: "bikal" },
    { label: "05.00 PM - 08.00 PM", value: "raat" },
  ];
  const expertiseSalaries = {
    mopping: [1000, 1500, 1200],
    cooking: [2000, 1800, 2200],
    cloth_washing: [1500, 1400, 1600],
    sweeping: [500, 600, 550],
    dish_washing: [1500, 1600, 1550],
  };

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/maid?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const matchingUser = data.find(
              (userData) => userData.email === user.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
              setUpdatedMaid({ ...matchingUser });
            }
          }
        });
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedMaid({ ...loggedUser });
  };

  const handleSaveChanges = () => {
    // Send a PUT request to update the maid information
    fetch(`http://localhost:5000/maid/${loggedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMaid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Handle success or error
        setIsEditing(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, options, selectedIndex, multiple } =
      e.target;
    if (type === "checkbox" && name === "location") {
      const updatedLocation = [...updatedMaid?.location];
      if (checked) {
        updatedLocation.push(value);
      } else {
        const index = updatedLocation.indexOf(value);
        if (index > -1) {
          updatedLocation.splice(index, 1);
        }
      }
      setUpdatedMaid({
        ...updatedMaid,
        location: updatedLocation,
      });
    } else if (type === "select-multiple" && name === "skills") {
      const selectedSkills = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setUpdatedMaid({
        ...updatedMaid,
        skills: selectedSkills,
      });
    } else {
      setUpdatedMaid({
        ...updatedMaid,
        [name]: value,
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-end">
          <h1 className="text-center text-2xl text-primary mr-36 font-bold">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={updatedMaid.name || ""}
                onChange={handleInputChange}
                className="input input-bordered font-bold text-primary"
              />
            ) : (
              loggedUser.name
            )}
          </h1>
          <img
            src={loggedUser.img}
            alt="user"
            className="w-32 h-32 rounded-md"
          />
        </div>
        <div className="col-span-2 mt-10">
          <strong className="text-blue-800 underline">Profile Details</strong>
          <p className="text-gray-600">
            <strong className="capitalize">Gender: </strong>
            {isEditing ? (
              <input
                type="text"
                name="gender"
                value={updatedMaid.gender || ""}
                onChange={handleInputChange}
                className="input input-bordered text-gray-600"
              />
            ) : (
              updatedMaid.gender
            )}{" "}
            | Date of Birth:{" "}
            {isEditing ? (
              <input
                type="text"
                name="dob"
                value={updatedMaid.dob || ""}
                onChange={handleInputChange}
                className="input input-bordered text-gray-600"
              />
            ) : (
              updatedMaid.dob
            )}
          </p>
          <p className="text-gray-600">
            <strong className="capitalize">Address:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={updatedMaid.address || ""}
                onChange={handleInputChange}
                className="input input-bordered text-gray-600"
              />
            ) : (
              updatedMaid.address
            )}
          </p>
          <p className="text-gray-600">
            <strong className="capitalize">NID:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="nid"
                value={updatedMaid.nid || ""}
                onChange={handleInputChange}
                className="input input-bordered text-gray-600"
              />
            ) : (
              updatedMaid.nid
            )}
          </p>
          <p className="text-gray-600">
            <strong className="capitalize">Experience: </strong>
            {isEditing ? (
              <input
                type="number"
                name="experience"
                value={updatedMaid.experience || ""}
                onChange={handleInputChange}
                className="input input-bordered text-gray-600"
              />
            ) : (
              updatedMaid.experience
            )}{" "}
            years
          </p>
          <p className="text-gray-600">
            <strong className="capitalize">Location: </strong>
            {isEditing ? (
              <select
                name="location"
                value={updatedMaid.location || []} // Ensure it's an array
                onChange={handleInputChange}
                className="input input-bordered text-gray-600"
                multiple
              >
                {locationOptions.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            ) : (
              <span>
                {Array.isArray(updatedMaid.location)
                  ? updatedMaid?.location
                  : typeof updatedMaid?.location === "string"
                  ? updatedMaid.location
                  : ""}
              </span>
            )}
          </p>
        </div>
        <hr className="my-4" />
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <strong className="text-blue-800 underline">Skills</strong>
            {isEditing ? (
              <select
                name="skills"
                value={updatedMaid.skills || []}
                onChange={handleInputChange}
                className="input input-bordered text-gray-600"
                multiple
              >
                {expertiseOptions.map((expertise) => (
                  <option key={expertise.value} value={expertise.value}>
                    {expertise.label}
                  </option>
                ))}
              </select>
            ) : updatedMaid.skills && updatedMaid.skills.length > 0 ? (
              updatedMaid.skills.join(", ")
            ) : (
              "No skills selected."
            )}
          </div>
          <div>
            <p className="pt-2">
              <strong className="text-blue-800 underline">Availability:</strong>
              {isEditing ? (
                <ul>
                  {availabilityOptions.map((option) => (
                    <li key={option.value}>
                      <label>
                        {option.label}
                        <input
                          type="checkbox"
                          name="availability"
                          value={option.value}
                          checked={(updatedMaid.availability || []).includes(
                            option.value
                          )}
                          onChange={handleInputChange}
                          className="ml-2"
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {Array.isArray(loggedUser.availability) &&
                  loggedUser.availability.length > 0 ? (
                    loggedUser.availability.map((selectedOption, index) => (
                      <li key={index}>
                        <strong>
                          {
                            availabilityOptions.find(
                              (option) => option.value === selectedOption
                            )?.label
                          }
                        </strong>
                      </li>
                    ))
                  ) : (
                    <li>No availability selected.</li>
                  )}
                </ul>
              )}
            </p>
          </div>
        </div>
        <p className="text-gray-600">
          <strong className="capitalize">Salary per Task: </strong>
          {isEditing ? (
            <select
              name="salaryPerTask"
              value={selectedSalary}
              onChange={(e) => setSelectedSalary(e.target.value)}
              className="input input-bordered text-gray-600"
            >
              {Object.keys(expertiseSalaries).map((expertise) => (
                <option key={expertise} value={expertise}>
                  {expertise}
                </option>
              ))}
            </select>
          ) : (
            selectedSalary
          )}
        </p>
        {isEditing ? (
          <div className="flex justify-end mt-4">
            <button
              className="bg-primary text-white font-semibold px-6 py-2 rounded-lg"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <button
              className="text-primary font-semibold px-6 py-2 ml-4"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="bg-primary text-white font-semibold px-6 py-2 rounded-lg mt-4"
            onClick={handleEditClick}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MaidProfile;
