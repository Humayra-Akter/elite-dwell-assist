import React, { useState } from "react";
import CustomerRegistrationForm from "./CustomerRegistrationForm";
import MaidRegistrationForm from "./MaidRegistrationForm";
import DriverRegistrationForm from "./DriverRegistrationForm";
import BabysitterRegistrationForm from "./BabysitterRegistrationForm";
import banner1 from "../../images/maid.jpg";
import banner2 from "../../images/babysitter.jpg";
import banner3 from "../../images/driver.jpg";
import banner4 from "../../images/tv.jpg";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div>
      <div className=" px-20">
        <h1
          style={{ fontFamily: "algerian" }}
          className="text-3xl font-bold text-purple-950 text-center pb-20"
        >
          Select your role:
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <div
              className={`card w-80 bg-transparent border-2 shadow-xl ${
                selectedRole === "customer" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("customer")}
            >
              <figure class="px-3 pt-3">
                <img src={banner1} alt="Customer" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">Customer</h2>
              </div>
            </div>
          </div>
          <div className="py-24">
            <div
              className={`card w-80 bg-transparent border-2 shadow-xl ${
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
              className={`card w-80 bg-transparent border-2 shadow-xl ${
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
          <div className="py-24">
            <div
              className={`card w-80 bg-transparent border-2 shadow-xl ${
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
      
      {selectedRole === "customer" && <CustomerRegistrationForm />}
      {selectedRole === "maid" && <MaidRegistrationForm />}
      {selectedRole === "driver" && <DriverRegistrationForm />}
      {selectedRole === "babysitter" && <BabysitterRegistrationForm />}
    </div>
  );
};

export default Register;
