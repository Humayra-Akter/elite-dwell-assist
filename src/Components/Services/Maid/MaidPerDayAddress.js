import React, { useState } from "react";
import { toast } from "react-toastify";

const MaidPerDayAddress = ({ selectedServices }) => {
  const [house, setHouse] = useState("");
  const [road, setRoad] = useState("");
  const [block, setBlock] = useState("");
  const [sector, setSector] = useState("");
  const [area, setArea] = useState("");

  const notify = () => {
    console.log("selectedServices:", selectedServices);
    if (selectedServices) {
      toast.success("Thanks for your order!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Please select at least one service.");
    }
  };

  return (
    <div className="mx-20 pt-12 pb-20">
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
                  value={house}
                  onChange={(e) => setHouse(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
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
                    value={road}
                    onChange={(e) => setRoad(e.target.value)}
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
                    value={block}
                    onChange={(e) => setBlock(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
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
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                  />
                </div>
                {/* area field */}
                <div className="form-control pt-5  w-full">
                  <label className="label">
                    <span className="label-text text-left text-blue-700 font-bold text-xs">
                      Area
                    </span>
                  </label>
                  <div className="input input-bordered text-left w-full ">
                    <select
                      className="select"
                      required
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    >
                      <option disabled value="">
                        Select your Area
                      </option>
                      <option value="mirpur">Mirpur</option>
                      <option value="mohammadpur">Mohammadpur</option>
                      <option value="gulshan">Gulshan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="pl-36 pt-9">
                <input
                  className="btn w-2/3 btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
                  onClick={notify}
                  type="button"
                  value="Book"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidPerDayAddress;
