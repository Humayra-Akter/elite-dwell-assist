import React from "react";
import banner2 from "../../images/babysitter.jpg";
import banner3 from "../../images/driver.jpg";
import banner1 from "../../images/maid.jpg";
import { Link } from "react-router-dom";

const ServiceSegment = () => {
  return (
    <div className=" px-20 py-24">
      <h1
        style={{ fontFamily: "algerian" }}
        className="text-3xl font-bold text-purple-950 text-center pb-10"
      >
        Services
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div class="card w-96 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <figure class="px-10 pt-10">
              <img src={banner1} alt="Babysitter" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-purple-900 font-bold">Maid</h2>
              <p>Your Home, Our Care: Where Cleanliness Meets Excellence!</p>
              <div class="card-actions pt-9">
                <Link to="/maidPerMonth">
                  <button className="btn btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24">
          <div class="card w-96 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <figure class="px-10 pt-10">
              <img src={banner2} alt="Babysitter" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-purple-900 font-bold">Babysitter!</h2>
              <p>Caring for Little Ones, Your Trusted Sitter!</p>
              <div class="card-actions pt-9">
                <Link to="/babysitter">
                  <button className="btn btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            <figure class="px-10 pt-10">
              <img src={banner3} alt="Babysitter" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-purple-900 font-bold">Driver</h2>
              <p>Steering You Towards Safe and Reliable Transportation.</p>
              <div class="card-actions pt-9">
                <Link to="/driverPerMonth">
                  <button className="btn btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-t from-primary from-10% via-secondary via-30% to-90% to-accent">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSegment;
