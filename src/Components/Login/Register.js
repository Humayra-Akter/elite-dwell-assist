import React, { useState, useEffect } from "react";
import CustomerRegistrationForm from "./CustomerRegistrationForm";
import MaidRegistrationForm from "./MaidRegistrationForm";
import DriverRegistrationForm from "./DriverRegistrationForm";
import BabysitterRegistrationForm from "./BabysitterRegistrationForm";
import banner1 from "../../images/maid.jpg";
import banner2 from "../../images/babysitter.jpg";
import banner3 from "../../images/driver.jpg";
import banner4 from "../../images/tv.jpg";

const Register = () => {
  // Load the selected role from local storage on initial render
  const initialSelectedRole = localStorage.getItem("selectedRole") || "";
  const [selectedRole, setSelectedRole] = useState(initialSelectedRole);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  // Store the selected role in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedRole", selectedRole);
  }, [selectedRole]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="px-20">
        <h1
          style={{ fontFamily: "abadi" }}
          className="text-3xl font-bold text-purple-950 text-left py-20"
        >
          Select your role:
        </h1>

        <div className="">
          <div>
            <div
              className={`card w-48 bg-transparent border-2 shadow-xl ${
                selectedRole === "customer" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("customer")}
            >
              <figure class="px-3 pt-3">
                <img src={banner1} alt="Customer" class="rounded-full" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">Customer</h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`card w-48 bg-transparent border-2 shadow-xl ${
                selectedRole === "maid" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("maid")}
            >
              <figure class="px-3 pt-3">
                <img src={banner2} alt="Maid" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">Maid</h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`card w-48 bg-transparent border-2 shadow-xl ${
                selectedRole === "driver" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("driver")}
            >
              <figure class="px-3 pt-3">
                <img src={banner3} alt="Driver" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">Driver</h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`card w-48 bg-transparent border-2 shadow-xl ${
                selectedRole === "babysitter" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("babysitter")}
            >
              <figure class="px-3 pt-3">
                <img src={banner4} alt="Babysitter" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">Babysitter</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3">
        {selectedRole === "customer" && <CustomerRegistrationForm />}
        {selectedRole === "maid" && <MaidRegistrationForm />}
        {selectedRole === "driver" && <DriverRegistrationForm />}
        {selectedRole === "babysitter" && <BabysitterRegistrationForm />}
      </div>
    </div>
  );
};

export default Register;
