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
          style={{ fontFamily: "arial" }}
          className="text-2xl font-bold text-purple-950 text-left pt-20 pb-7"
        >
          Select your role:
        </h1>

        <div>
          <div className="shadow-md my-3 rounded-full transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <div
              className={`card card-side py-7 w-48 bg-transparent ${
                selectedRole === "customer" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("customer")}
            >
              {/* <figure className="px-3 pt-3"> */}
              <img
                src={banner1}
                alt="Customer"
                className="rounded-full w-28 h-28 px-3 pt-3"
              />
              {/* </figure> */}
              <div className="items-center pt-7">
                <h2 className="card-title text-purple-900 font-bold">
                  Customer
                </h2>
              </div>
            </div>
          </div>
          <div className="shadow-md my-3 rounded-full transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <div
              className={`card card-side py-7 w-36 bg-transparent ${
                selectedRole === "maid" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("maid")}
            >
              {/* <figure className="px-3 pt-3"> */}
              <img
                src={banner2}
                alt="Maid"
                className="rounded-full w-28 h-28 px-3 pt-3"
              />
              {/* </figure> */}
              <div className="items-center pt-7">
                <h2 className="card-title text-purple-900 font-bold">Maid</h2>
              </div>
            </div>
          </div>
          <div className="shadow-md my-3 rounded-full transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <div
              className={`card card-side py-7 w-36 bg-transparent  ${
                selectedRole === "driver" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("driver")}
            >
              {/* <figure className="px-3 pt-3"> */}
              <img
                src={banner3}
                alt="Driver"
                className="rounded-full w-28 h-28 px-3 pt-3"
              />
              {/* </figure> */}
              <div className="items-center pt-7">
                <h2 className="card-title text-purple-900 font-bold">Driver</h2>
              </div>
            </div>
          </div>
          <div className="shadow-md my-3 rounded-full transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <div
              className={`card card-side py-7 w-36 bg-transparent  ${
                selectedRole === "babysitter" ? "border-purple-950" : ""
              }`}
              onClick={() => handleRoleChange("babysitter")}
            >
              {/* <figure className="px-3 pt-3"> */}
              <img
                src={banner4}
                alt="Babysitter"
                className="rounded-full w-28 h-28 px-3 pt-3"
              />
              {/* </figure> */}
              <div className="items-center pt-7">
                <h2 className="card-title text-purple-900 font-bold">
                  Babysitter
                </h2>
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
