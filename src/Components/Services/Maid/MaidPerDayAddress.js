import React from "react";

const MaidPerDayAddress = () => {
  return (
    <div className="mx-20 pt-12 pb-40">
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
                <div className="input input-bordered text-left w-full ">
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
              <div className="pl-36 pt-9">
                <input
                  className="btn w-2/3 btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
                  type="submit"
                  value="Book"
                >
                </input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidPerDayAddress;
