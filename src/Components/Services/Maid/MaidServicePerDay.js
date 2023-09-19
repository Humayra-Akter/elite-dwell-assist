import React from "react";
import banner1 from "../../../images/maid/1.jpg";
import banner2 from "../../../images/maid/2.jpeg";
import banner3 from "../../../images/maid/3.jpeg";
import banner4 from "../../../images/maid/4.jpg";
import btn from "../../../images/bg.jpg";

const MaidServicePerDay = () => {
  return (
    <div>
      {/* Sweeping */}
      <div className="card justify-end w-full card-side bg-transparent shadow-xl py-5">
        <figure>
          <img
            className="rounded-full h-32 w-32"
            src={banner1}
            alt="Sweeping"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sweeping</h2>
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
      {/* Mopping */}
      <div className="card justify-end w-full card-side bg-transparent shadow-xl py-5">
        <figure>
          <img className="rounded-full h-32 w-32" src={banner2} alt="Mopping" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mopping</h2>
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
      {/* Cooking */}
      <div className="card justify-end w-full card-side bg-transparent shadow-xl py-5">
        <figure>
          <img className="rounded-full h-32 w-32" src={banner3} alt="Cooking" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cooking</h2>
          <h2>1000 bdt</h2>
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
      {/* Washing Clothes */}
      <div className="card justify-end w-full card-side bg-transparent shadow-xl py-5">
        <figure>
          <img className="rounded-full h-32 w-32" src={banner4} alt="Washing" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Washing Clothes</h2>
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

export default MaidServicePerDay;
