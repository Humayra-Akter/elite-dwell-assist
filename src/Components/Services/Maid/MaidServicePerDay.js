import React from "react";
import banner1 from "../../../images/maid.jpg";
import banner4 from "../../../images/bg.jpg";

const MaidServicePerDay = () => {
  return (
    <div>
      <div className="card justify-end w-full card-side bg-transparent shadow-xl">
        <figure>
          <img className="w-96 h-44" src={banner1} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sweeping</h2>
          {/* <p>Click the button to watch on Jetflix app.</p> */}
          <div className="card-actions justify-end">
            <button
              style={{
                background: `url(${banner4})`,
                backgroundSize: "cover",
              }}
              className="btn w-full btn-sm border-purple-500 text-purple-950 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
              type="submit"
            >
              Go ahead
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidServicePerDay;
