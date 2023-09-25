import React from "react";
import banner4 from "../../../images/bg.jpg";

const MaidPerDayAddress = () => {
  return (
    <div className="mx-20p-8 pb-40">
      <div>
        <div className="card w-full bg-transparent border-4 rounded-3xl border-blue-200 text-blue-800">
          <div className="card-body">
            <h2 className="card-title">Address</h2>
            <p>Expert will arrive at the address given below</p>
            <form>
              <div className="form-control pt-5 w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-xs">
                    House
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your address"
                  className="input input-bordered input-xs w-full"
                  required
                />
              </div>
              <div className="form-control pt-5 w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-xs">
                    Road no
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Road no"
                  className="input input-bordered input-xs w-full"
                  required
                />
              </div>
              <div className="form-control pt-5 w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-xs">
                    Block
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Block no"
                  className="input input-bordered input-xs w-full"
                  required
                />
              </div>
              <div className="form-control pt-5 w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-xs">
                    Sector
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Sector no"
                  className="input input-bordered input-xs w-full"
                  required
                />
              </div>
              {/* Gender field */}
              <div className="form-control pt-5  w-full">
                <label className="label">
                  <span className="label-text text-left text-blue-700 font-bold text-xs">
                    Area
                  </span>
                </label>
                <div className="input text-left  w-full ">
                  <select className="select" required>
                    <option disabled selected>
                      Select your Area
                    </option>
                    <option value="mirpur">Mirpur</option>
                    <option value="mohammadpur">Mohammadpur</option>
                    <option value="gulshan">Gulshan</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="justify-center items-center px-7 pb-7">
            <button
              className="btn w-full btn-sm border-blue-500 text-blue-950 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
              type="submit"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidPerDayAddress;
