import React from "react";

const BabysitterCard = ({ babysitter, setBookBaby }) => {
  const { img, name, location, gender, salary } = babysitter;
  return (
    <div>
      <div class="card w-96 bg-transparent border-2 shadow-xl">
        <figure class="px-10 pt-7">
          <img src={img} alt="Babysitter" class="rounded-xl h-72 w-80" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-purple-900 font-bold">{name}</h2>
          <p>
            <strong>Location :</strong> {location}
          </p>
          <p>
            <strong>Gender :</strong> {gender}
          </p>
          <p>
            <strong>Salary :</strong> {salary}
          </p>
          <div class="card-actions pt-5">
            <label
              for="booking-babysitter"
              onClick={() => setBookBaby(babysitter)}
              class="btn btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
            >
              Know More
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabysitterCard;
