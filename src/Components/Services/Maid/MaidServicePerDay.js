import React from "react";
import banner1 from "../../../images/maid/1.jpg";
import banner2 from "../../../images/maid/2.jpeg";
import banner3 from "../../../images/maid/3.jpeg";
import banner4 from "../../../images/maid/4.jpg";
import btn from "../../../images/bg.jpg";

const MaidServicePerDay = () => {
  return (
    <div>
      {" "}
      {/* Sweeping */}
      <div className="card justify-end w-72 card-side bg-transparent shadow-sm mx-auto px-7  py-2 my-5 bg-blue-50 transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-secondary to-accent hover:shadow-lg">
        <figure>
          <img
            className="rounded-full h-24 w-24"
            src={banner1}
            alt="Sweeping"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-center">Sweeping</h2>
          <div className="card-actions ">
            <button
              className="btn w-full btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
              type="submit"
            >
              BOOK
            </button>
          </div>
        </div>
      </div>
      {/* Mopping */}
      <div className="card justify-end w-72 card-side bg-transparent shadow-sm mx-auto px-7  py-2 my-5 bg-blue-50 transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-secondary to-accent hover:shadow-lg">
        <figure>
          <img className="rounded-full h-24 w-24" src={banner2} alt="Mopping" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-center">Mopping</h2>
          <div className="card-actions ">
            <button
              className="btn w-full btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
              type="submit"
            >
              BOOK
            </button>
          </div>
        </div>
      </div>
      {/* Cooking */}
      <div className="card justify-end w-72 card-side bg-transparent shadow-sm mx-auto px-7  py-2 my-5 bg-blue-50 transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-secondary to-accent hover:shadow-lg">
        <figure>
          <img className="rounded-full h-24 w-24" src={banner3} alt="Cooking" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-center">Cooking</h2>
          <div className="card-actions ">
            <button
              className="btn w-full btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
              type="submit"
            >
              BOOK
            </button>
          </div>
        </div>
      </div>
      {/* Washing Clothes */}
      <div className="card justify-end w-72 card-side bg-transparent shadow-sm mx-auto px-7  py-2 my-5 bg-blue-50 transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-secondary to-accent hover:shadow-lg">
        <figure>
          <img className="rounded-full h-24 w-24" src={banner4} alt="Washing" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-center">Washing Clothes</h2>
          <div className="card-actions ">
            <button
              className="btn w-full btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
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
