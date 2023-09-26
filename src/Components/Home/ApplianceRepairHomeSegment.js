import React from "react";
import banner1 from "../../images/oven.jpg";
import banner2 from "../../images/tv.jpg";
import banner3 from "../../images/refrigaretor.jpg";
import banner4 from "../../images/washingmachine.jpg";

const ApplianceRepairHomeSegment = () => {
  return (
    <div className="px-20 pb-20">
      <div className="grid grid-cols-5 gap-4">
        <div className="card  w-64 border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-blue-300 to-blue-50 hover:shadow-lg">
          <figure class="px-3 pt-3">
            <img src={banner1} alt="Babysitter" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-blue-900 font-bold">Oven Services</h2>
            <div class="card-actions pt-7">
              <button className="btn btn-sm border-blue-500 text-white text-xs font-bold bg-primary ">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="card w-64 border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-blue-300 to-blue-50 hover:shadow-lg">
          <figure class="px-3 pt-3">
            <img src={banner2} alt="Babysitter" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-blue-900 font-bold">TV Services</h2>

            <div class="card-actions pt-7">
              <button className="btn btn-sm border-blue-500 text-white text-xs font-bold bg-primary ">
                Know More
              </button>
            </div>
          </div>
        </div>

        <div className="card w-64 border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-blue-300 to-blue-50 hover:shadow-lg">
          <figure class="px-3 pt-3">
            <img src={banner3} alt="Babysitter" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-blue-900 font-bold">
              Refrigerator Services
            </h2>

            <div class="card-actions pt-7">
              <button className="btn btn-sm border-blue-500 text-white text-xs font-bold bg-primary ">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="card w-64 border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-blue-300 to-blue-50 hover:shadow-lg">
          <figure class="px-3 pt-3">
            <img src={banner4} alt="Babysitter" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-blue-900 font-bold">
              Washing Machine Services
            </h2>

            <div class="card-actions pt-7">
              <button className="btn btn-sm border-blue-500 text-white text-xs font-bold bg-primary ">
                Know More
              </button>
            </div>
          </div>
        </div>
        <h1
          style={{ fontFamily: "arial" }}
          className="text-3xl font-bold text-blue-950 text-center pb-12"
        >
          Appliance Repair
        </h1>
      </div>
    </div>
  );
};

export default ApplianceRepairHomeSegment;
