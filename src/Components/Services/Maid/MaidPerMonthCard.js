import React from "react";

const MaidPerMonthCard = ({ maid, setBookMaid }) => {
  const { img, name, location, gender, salary } = maid;
  return (
    <div>
      <div class="card w-96 bg-transparent border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-secondary to-accent hover:shadow-lg">
        <figure class="px-10 pt-7">
          <img src={img} alt="maid" class="rounded-xl h-52 w-52" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-blue-900 font-bold">{name}</h2>
          <p>
            <strong>Location :</strong> {location}
          </p>
          <p>
            <strong>Gender :</strong> {gender}
          </p>
          <p>
            <strong>Salary :</strong> {salary},
          </p>
          <div class="card-actions pt-5">
            <label
              for="booking-maid"
              onClick={() => setBookMaid(maid)}
              class="btn btn-sm w-full border-blue-500 text-blue-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
            >
              Know More
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidPerMonthCard;
