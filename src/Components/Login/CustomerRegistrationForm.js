import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner4 from "../../images/bg.jpg";
import { MultiSelect } from "react-multi-select-component";

const CustomerRegistrationForm = () => {
  return (
    <div className=" py-16">
      <div className="mx-auto max-w-4xl">
        <div className="card bg-transparent border-purple-300 border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "arial" }}
              className="text-center text-2xl text-blue-700 font-extrabold"
            >
              Register as <strong>CUSTOMER</strong>
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
                  type="text"
                  placeholder="Your Contact number"
                  //   value={contact}
                  //   onChange={(e) => setContact(e.target.value)}
                  className="input input-bordered w-full "
                  required
                />
              </div>
              {/* Gender field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-left text-blue-700 font-bold text-xs">
                    Gender
                  </span>
                </label>
                <div className="input text-left w-full ">
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
              {/* address */}
              <div>
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your address"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* dob */}
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-md">
                      Date of Birth
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your dob"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* )} */}
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

export default CustomerRegistrationForm;
