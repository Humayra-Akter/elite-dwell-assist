import React from "react";
import banner1 from "../../../images/driver/1.jpg";
import banner2 from "../../../images/driver/2.jpeg";
import btn from "../../../images/bg.jpg";

const DriverServicePerDay = () => {
  return (
    <div>
      {/* van */}
      <div className="card justify-end w-full card-side bg-transparent shadow-xl py-5">
        <figure>
          <img
            className="rounded-full h-32 w-32"
            src={banner1}
            alt="Sweeping"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Van</h2>
          <div className="card-actions justify-end">
            <button
              style={{
                background: `url(${btn})`,
                backgroundSize: "cover",
              }}
              className="btn w-1/3 btn-sm border-purple-500 text-purple-950 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
              type="submit"
            >
              BOOK
            </button>
          </div>
        </div>
      </div>
      {/* Truck */}
      <div className="card justify-end w-full card-side bg-transparent shadow-xl py-5">
        <figure>
          <img className="rounded-full h-32 w-32" src={banner2} alt="Mopping" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Truck</h2>
          <div className="card-actions justify-end">
            <button
              style={{
                background: `url(${btn})`,
                backgroundSize: "cover",
              }}
              className="btn w-1/3 btn-sm border-purple-500 text-purple-950 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
              type="submit"
            >
              BOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverServicePerDay;
