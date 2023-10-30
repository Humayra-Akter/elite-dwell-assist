import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DriverPost = () => {
  const [user] = useAuthState(auth);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [budget, setBudget] = useState("");
  const userRole = localStorage.getItem("userRole");
  const [licenseType, setLicenseType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");

  const {
    register,
    handleSubmit,
    reset,
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

  const onSubmit = async (data) => {
    const bookingData = {
      userName: user?.displayName,
      userEmail: user?.email,
      contact: data.contact,
      address: data.address,
      budget: data.budget,
      additionalPreferences: data.additionalPreferences,
      licenseType: data.licenseType,
      vehicleType: data.vehicleType,
      vehicleModel: data.vehicleModel,
      preferredLanguage: data.preferredLanguage,
      experience: data.experience,
      availability: data.availability,
      isBackgroundChecked: data.isBackgroundChecked,
      isReferencesAvailable: data.isReferencesAvailable,
      selectedServices,
    };
    try {
      await fetch("http://localhost:5000/driverSearchPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success(
            "You have successfully posted your driver search requirement"
          );
          reset();
        });
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };

  return (
    <div className="card-body bg-transparent border-2 shadow-md">
      <h1
        style={{ fontFamily: "arial" }}
        className="text-center text-2xl text-primary font-extrabold"
      >
        Find a Driver for Your Needs
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 pt-5 gap-3">
          <div>
            <div className="bg-blue-100 p-4 rounded-md mt-3">
              <div className="form-control w-full mb-3">
                <label className="text-primary font-bold text-md">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  value={user?.email}
                  name="email"
                  className="input input-sm input-bordered w-full"
                  onChange={(e) => setEmail(e.target.value)}
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
              </div>
              {/* Add more fields for the left column as needed */}
            </div>
            <div className="bg-blue-100 p-4 rounded-md">
              {/* Left Column - Blue Background */}
              <div className="form-control w-full">
                <label className="text-primary font-bold text-md">
                  License Type
                </label>
                <select
                  value={licenseType}
                  onChange={(e) => setLicenseType(e.target.value)}
                  className="input input-sm input-bordered w-full"
                  {...register("licenseType", {
                    required: {
                      value: true,
                      message: "License Type is required",
                    },
                  })}
                >
                  <option value="">Select License Type</option>
                  <option value="Class A">Class A</option>
                  <option value="Class B">Class B</option>
                  <option value="Class C">Class C</option>
                </select>
              </div>
              {/* Add more fields for the left column as needed */}
            </div>
            <div className="bg-blue-100 p-4 rounded-md">
              {/* Left Column - Blue Background */}
              <div className="form-control w-full">
                <label className="text-primary font-bold text-md">
                  Vehicle Model
                </label>
                <input
                  type="text"
                  placeholder="Vehicle Model (e.g., Toyota Camry)"
                  name="vehicleModel"
                  className="input input-sm input-bordered w-full"
                  onChange={(e) => setVehicleModel(e.target.value)}
                  {...register("vehicleModel", {
                    required: {
                      value: true,
                      message: "Vehicle Model is required",
                    },
                  })}
                />
              </div>
              {/* Add more fields for the left column as needed */}
            </div>
            <div className="bg-blue-100 p-4 rounded-md">
              {/* Left Column - Blue Background */}
              <div className="form-control w-full mb-3">
                <label className="text-primary font-bold text-md">
                  Experience (Years)
                </label>
                <input
                  type="number"
                  placeholder="Years of Experience"
                  name="experience"
                  className="input input-sm input-bordered w-full"
                  onChange={(e) => setExperience(e.target.value)}
                  {...register("experience", {
                    required: {
                      value: true,
                      message: "Experience is required",
                    },
                  })}
                />
              </div>
              {/* Add more fields for the left column as needed */}
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded-md">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Contact
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Contact number"
                  name="contact"
                  onChange={(e) => setContact(e.target.value)}
                  className="input input-sm input-bordered w-full"
                  {...register("contact", {
                    required: {
                      value: true,
                      message: "Contact is required",
                    },
                    pattern: {
                      value: /[0-9]*/,
                      message: "Your Contact number should have digits only",
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
              </div>
              {/* Add more fields for the right column as needed */}
            </div>
            <div className="bg-white p-4 rounded-md">
              {/* Right Column - White Background */}
              <div className="form-control w-full">
                <label className="text-primary font-bold text-md">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className="input input-sm input-bordered w-full"
                  onChange={(e) => setAddress(e.target.value)}
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Addresse is required",
                    },
                  })}
                />
              </div>
              {/* Add more fields for the right column as needed */}
            </div>
            <div className="bg-white p-4 rounded-md">
              {/* Right Column - White Background */}
              <div className="form-control w-full">
                <label className="text-primary font-bold text-md">
                  Availability
                </label>
                <input
                  type="text"
                  placeholder="Availability (e.g., Weekdays, Weekends)"
                  name="availability"
                  className="input input-sm input-bordered w-full"
                  onChange={(e) => setAvailability(e.target.value)}
                  {...register("availability", {
                    required: {
                      value: true,
                      message: "Availability is required",
                    },
                  })}
                />
              </div>
              {/* Add more fields for the right column as needed */}
            </div>
            <div className="bg-white p-4 rounded-md">
              {/* Left Column - Blue Background */}
              <div className="form-control w-full">
                <label className="text-primary font-bold text-md">Budget</label>
                <input
                  type="number"
                  placeholder="Your Preferred Budget"
                  name="budget"
                  className="input input-sm input-bordered w-full"
                  onChange={(e) => setBudget(e.target.value)}
                  {...register("budget", {
                    required: {
                      value: true,
                      message: "Budget is required",
                    },
                  })}
                />
              </div>
              {/* Add more fields for the left column as needed */}
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <input
            className="btn mt-5 btn-sm text-xs w-1/4 border-blue-500 text-white font-bold bg-primary"
            value="Request for a Driver"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default DriverPost;
