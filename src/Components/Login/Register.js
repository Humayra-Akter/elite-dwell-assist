import React, { useState, useEffect } from "react";
import MaidRegistrationForm from "./MaidRegistrationForm";
import DriverRegistrationForm from "./DriverRegistrationForm";
import BabysitterRegistrationForm from "./BabysitterRegistrationForm";
import img1 from "../../images/icons/maid.png";
import img2 from "../../images/icons/motherhood.png";
import img3 from "../../images/icons/driver.png";
import Footer from "../Shared/Footer";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };
  return (
    <div className="bg-slate-200 100vh">
      <div className="pb-12 pt-16 flex items-center justify-center">
        <div
          className={`w-11/12  bg-transparent flex overflow-hidden transition-transform ease-in-out transform ${
            selectedRole ? "translate-x-10" : "translate-x-1/3"
          }`}
        >
          <div className="w-1/4 bg-primary text-white p-8">
            <h1 className="text-4xl font-semibold mb-4">Register Now</h1>
            <p className="text-lg mb-8">Choose your role:</p>
            <div className="space-y-4">
              <div
                className={`cursor-pointer p-4 rounded-full ${
                  selectedRole === "maid"
                    ? "bg-sky-300 text-black text-center font-extrabold flex gap-5"
                    : "border-2 text-center flex gap-5 font-extrabold"
                }`}
                onClick={() => handleRoleSelect("maid")}
              >
                <img className="w-8 ml-16" src={img1} alt="" />
                Maid
              </div>

              <div
                className={`cursor-pointer p-4 rounded-full ${
                  selectedRole === "babysitter"
                    ? "bg-sky-300 text-black text-center font-extrabold flex gap-5"
                    : "border-2 text-center flex gap-5 font-extrabold"
                }`}
                onClick={() => handleRoleSelect("babysitter")}
              >
                <img className="w-8 ml-12" src={img2} alt="" />
                Babysitter
              </div>
              <div
                className={`cursor-pointer p-4 rounded-full ${
                  selectedRole === "driver"
                    ? "bg-sky-300 text-black text-center font-extrabold flex gap-5"
                    : "border-2 text-center flex gap-5 font-extrabold"
                }`}
                onClick={() => handleRoleSelect("driver")}
              >
                <img className="w-8 ml-16" src={img3} alt="" />
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
      <Footer></Footer>
    </div>
  );
};

export default Register;
