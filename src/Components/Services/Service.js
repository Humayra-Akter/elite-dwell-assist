import React from "react";
import banner2 from "../../images/babysitter.jpg";
import banner3 from "../../images/driver.jpg";
import banner1 from "../../images/maid.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: "algerian" }}
        className="text-3xl font-bold text-purple-950 text-center "
      >
        OUR SERVICE TYPES
      </h1>
      <div className="py-28">
        <h1
          style={{ fontFamily: "algerian" }}
          className="text-2xl font-bold text-purple-700 text-center pb-20"
        >
          Maid Services
        </h1>
        <div className="grid grid-cols-2 gap-4 px-80">
          <div>
            <div class="card w-96 h-56 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
              {/* <figure class="px-10 pt-10">
              <img src={banner1} alt="Babysitter" class="rounded-xl" />
            </figure> */}
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">
                  Maid per day
                </h2>
                <p>Your Home, Our Care: Where Cleanliness Meets Excellence!</p>
                <div class="card-actions pt-9">
                  <Link to="/maidPerDay">
                    <button className="btn btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="card w-96 h-56 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
              {/* <figure class="px-10 pt-10">
              <img src={banner2} alt="Babysitter" class="rounded-xl" />
            </figure> */}
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">
                  Maid per month!
                </h2>
                <p>Caring for Little Ones, Your Trusted Sitter!</p>
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
        </div>
      </div>
      <div>
        <h1
          style={{ fontFamily: "algerian" }}
          className="text-2xl font-bold text-purple-700 text-center pb-20"
        >
          Babysitter Services
        </h1>
        <div className="flex justify-center items-center">
          <div class="card w-96 h-56 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
            {/* <figure class="px-10 pt-10">
              <img src={banner2} alt="Babysitter" class="rounded-xl" />
            </figure> */}
            <div class="card-body items-center text-center">
              <h2 class="card-title text-purple-900 font-bold">
                Babysitter per month!
              </h2>
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
      </div>
      <div className="py-28">
        <h1
          style={{ fontFamily: "algerian" }}
          className="text-2xl font-bold text-purple-700 text-center pb-20"
        >
          Driver Services
        </h1>
        <div className="grid grid-cols-2 gap-4 px-80">
          <div>
            <div class="card w-96 h-56 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
              {/* <figure class="px-10 pt-10">
              <img src={banner1} alt="Babysitter" class="rounded-xl" />
            </figure> */}
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">
                  Van/Truck per day
                </h2>
                <p>Your Home, Our Care: Where Cleanliness Meets Excellence!</p>
                <div class="card-actions pt-9">
                  <Link to="/vanTruckPerDay">
                    <button className="btn btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="card w-96 h-56 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent hover:shadow-lg">
              {/* <figure class="px-10 pt-10">
              <img src={banner2} alt="Babysitter" class="rounded-xl" />
            </figure> */}
              <div class="card-body items-center text-center">
                <h2 class="card-title text-purple-900 font-bold">
                  Car driver per month!
                </h2>
                <p>Caring for Little Ones, Your Trusted Sitter!</p>
                <div class="card-actions pt-9">
                  <Link to="/carDriverPerMonth">
                    <button className="btn btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
