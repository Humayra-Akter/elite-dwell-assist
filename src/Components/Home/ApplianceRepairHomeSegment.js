import React from "react";
import banner1 from "../../images/oven.jpg";
import banner2 from "../../images/tv.jpg";
import banner3 from "../../images/refrigaretor.jpg";
import banner4 from "../../images/washingmachine.jpg";

const ApplianceRepairHomeSegment = () => {
  return (
    <div className=" px-20">
      <h1
        style={{ fontFamily: "algerian" }}
        className="text-3xl font-bold text-purple-950 text-center pb-20"
      >
        Appliance Repair
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div class="card w-80 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <figure class="px-3 pt-3">
              <img src={banner1} alt="Babysitter" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-purple-900 font-bold">
                Oven Services
              </h2>
              <div class="card-actions pt-7">
                <button className="btn btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24">
          <div class="card w-80 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <figure class="px-3 pt-3">
              <img src={banner2} alt="Babysitter" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-purple-900 font-bold">TV Services</h2>

              <div class="card-actions pt-7">
                <button className="btn btn-sm text-xs  border-purple-500 text-purple-800 font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-80 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <figure class="px-3 pt-3">
              <img src={banner3} alt="Babysitter" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-purple-900 font-bold">
                Refrigerator Services
              </h2>

              <div class="card-actions pt-7">
                <button className="btn btn-sm text-xs  border-purple-500 text-purple-800 font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24">
          <div class="card w-80 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <figure class="px-3 pt-3">
              <img src={banner4} alt="Babysitter" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-purple-900 font-bold">
                Washing Machine Services
              </h2>

              <div class="card-actions pt-7">
                <button className="btn btn-sm text-xs  border-purple-500 text-purple-800 font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplianceRepairHomeSegment;
