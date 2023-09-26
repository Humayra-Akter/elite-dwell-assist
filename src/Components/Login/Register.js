import React, { useState, useEffect } from "react";
import MaidRegistrationForm from "./MaidRegistrationForm";
import DriverRegistrationForm from "./DriverRegistrationForm";
import BabysitterRegistrationForm from "./BabysitterRegistrationForm";
import img from "../../images/serviceBG.jpg";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };
  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
      }}
      className="pt-16 flex items-center justify-center"
    >
      <div
        className={`w-11/12  bg-transparent rounded-2xl flex overflow-hidden transition-transform ease-in-out transform ${
          selectedRole ? "translate-x-10" : "translate-x-96"
        }`}
      >
        <div className="w-1/4 bg-primary text-white p-8">
          <h1 className="text-4xl font-semibold mb-4">Register Now</h1>
          <p className="text-lg mb-8">Choose your role:</p>
          <div className="space-y-4">
            <div
              className={`cursor-pointer p-4 rounded-full ${
                selectedRole === "maid"
                  ? "bg-fuchsia-400 text-white text-center font-extrabold"
                  : "border-2 text-center font-extrabold"
              }`}
              onClick={() => handleRoleSelect("maid")}
            >
              Maid
            </div>
            <div
              className={`cursor-pointer p-4 rounded-full ${
                selectedRole === "babysitter"
                  ? "bg-fuchsia-400 text-white text-center font-extrabold"
                  : " border-2 text-center font-extrabold"
              }`}
              onClick={() => handleRoleSelect("babysitter")}
            >
              Babysitter
            </div>
            <div
              className={`cursor-pointer p-4 rounded-full ${
                selectedRole === "driver"
                  ? "bg-fuchsia-400 text-white text-center font-extrabold"
                  : " border-2 text-center font-extrabold"
              }`}
              onClick={() => handleRoleSelect("driver")}
            >
              Driver
            </div>
          </div>
        </div>
        <div className="w-2/3 p-8">
          {selectedRole === "maid" && <MaidRegistrationForm />}
          {selectedRole === "driver" && <DriverRegistrationForm />}
          {selectedRole === "babysitter" && <BabysitterRegistrationForm />}
        </div>
      </div>
    </div>
  );
};

export default Register;
