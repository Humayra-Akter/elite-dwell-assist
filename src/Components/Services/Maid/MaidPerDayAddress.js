import React from "react";
import banner4 from "../../../images/bg.jpg";

const MaidPerDayAddress = () => {
  return (
    <div className="mx-20 pb-40">
      <div className="card w-1/3 bg-transparent border-4 rounded-3xl border-purple-200 text-primary-content mb-28">
        <div className="card-body">
          <h2 className="card-title">Contact Person</h2>
          <p>Expert will contact with the following person.</p>
        </div>
      </div>
      <div className="card w-1/3 bg-transparent border-4 rounded-3xl border-purple-200 text-primary-content">
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
        <div>
          <button
            style={{
              background: `url(${banner4})`,
              backgroundSize: "cover",
            }}
            className="btn ml-28 w-1/2 btn-sm border-purple-500 text-purple-950 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
            type="submit"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaidPerDayAddress;
