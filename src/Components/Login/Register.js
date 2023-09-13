import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner4 from "../../images/bg.jpg";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState(""); // State to track the selected role

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value); // Update the selected role when the dropdown value changes
  };

  return (
    <div className=" py-16">
      <div
        style={{
          margin: "0px ",
          width: "100%",
          justifyItems: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          padding: "70px 300px",
          textAlign: "center",
        }}
        // className="mx-auto w-[2000px]"
      >
        <div className="card max-w-screen-lg bg-transparent border-purple-300 border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "algerian" }}
              className="text-center text-2xl text-blue-700 font-extrabold"
            >
              Register
            </h1>
            {/* <form onSubmit={handleFormSubmit}> */}
            <form>
              <div className="form-control pt-5 w-full">
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
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full "
                  required
                />
              </div>
              {/* contact field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Contact
                  </span>
                </label>
                <input
                  type="contact"
                  placeholder="Your Contact number"
                  //   value={contact}
                  //   onChange={(e) => setContact(e.target.value)}
                  className="input input-bordered w-full "
                  required
                />
              </div>
              {/* register as */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Register as
                  </span>
                </label>
                <div className="input input-bordered w-full ">
                  <select className="select" onChange={handleRoleChange}>
                    <option disabled selected>
                      Choose your Role
                    </option>
                    <option value="Customer">Customer</option>
                    <option value="Maid">Maid</option>
                    <option value="Driver">Driver</option>
                    <option value="Babysitter">Babysitter</option>
                  </select>
                </div>
              </div>

              {/* Conditional rendering of additional fields based on selected role */}
              {selectedRole === "Customer" && (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered w-full "
                    required
                  />
                </div>
              )}
              {selectedRole === "Maid" && (
                <div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Time Slot
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Maid-specific field"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Experience
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Experience in month"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                </div>
              )}

              {selectedRole === "Driver" && (
                <div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Time Slot
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Preferred time slot"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Experience
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Experience in month"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Vehicle type
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Select vehicle type"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Driving license no
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="License no"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                </div>
              )}
              {selectedRole === "Babysitter" && (
                <div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Time Slot
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Preferred time slot"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Experience
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Experience in month"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-700 font-bold text-md">
                        Age group
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Preferred age group"
                      className="input input-bordered w-full "
                      required
                    />
                  </div>
                </div>
              )}
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
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <button
                style={{
                  background: `url(${banner4})`,
                  backgroundSize: "cover",
                }}
                className="btn w-full btn-sm border-purple-500 text-purple-950 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
                type="submit"
              >
                Go ahead
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

export default Register;
