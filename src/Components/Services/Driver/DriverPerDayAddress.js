import React from "react";
import banner4 from "../../../images/bg.jpg";
import banner1 from "../../../images/driver/1.jpg";
import banner2 from "../../../images/driver/2.jpeg";
import banner3 from "../../../images/driver/3.jpeg";
import banner5 from "../../../images/driver/5.jpg";

const DriverPerDayAddress = () => {
  return (
    <div className="mx-20 pb-40">
      {/* <div className="card w-1/3 bg-transparent border-4 rounded-3xl border-blue-200 text-primary-content mb-28">
        <div className="card-body">
          <h2 className="card-title">Contact Person</h2>
          <p>Expert will contact with the following person.</p>
        </div>
      </div> */}
      <div className="grid grid-cols-2 gap-7">
        <div>
          <div className="flex">
            <img
              className="w-96 rounded-3xl pt-24 border-8 border-transparent"
              src={banner1}
              alt=""
            ></img>

            <img
              className="w-96 border-8 rounded-3xl border-transparent"
              src={banner2}
              alt=""
            ></img>
          </div>
          <div className="flex">
            <img
              className="w-96 rounded-3xl border-8 border-transparent"
              src={banner3}
              alt=""
            ></img>
            <img
              className="w-72 rounded-3xl border-8 border-transparent pb-24"
              src={banner5}
              alt=""
            ></img>
          </div>
        </div>
        <div className="card w-full bg-transparent border-4 rounded-3xl border-blue-200 text-primary-content">
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
              className="btn ml-44 w-1/2 btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
              type="submit"
            >
              Book
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default DriverPerDayAddress;
