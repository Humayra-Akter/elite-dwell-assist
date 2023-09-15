import React from "react";
import bg from "../../../images/bg.jpg";
import { Link } from "react-router-dom";

const BookingBabysitter = ({ bookBaby }) => {
  const {
    img,
    name,
    experience,
    availability,
    special_skills,
    certifications,
    languages_spoken,
    location,
    gender,
    education,
    dob,
    age_group_preferences,
    salary,
  } = bookBaby;
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className=" bg-transparent"
    >
      <input type="checkbox" id="booking-babysitter" class="modal-toggle" />
      <div class="modal ">
        <div class="modal-box w-screen max-w-4xl">
          <label
            for="booking-babysitter"
            class="btn btn-sm btn-circle btn-ghost bg-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="card card-side bg-transparent">
            <figure>
              <img className="w-80 h-72" src={img} alt="babysitter" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                <strong className="text-purple-900">{name}</strong>for your baby
              </h2>
              <p class="pt-4">
                <strong className="text-purple-800">Location :</strong>{" "}
                {location}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Availability:</strong>
                {availability ? (
                  Array.isArray(availability) ? (
                    <ul>
                      {availability.map((daySlot) => (
                        <li key={daySlot.day}>
                          <strong>{daySlot.day}:</strong>{" "}
                          {Array.isArray(daySlot.slots)
                            ? daySlot.slots.join(", ")
                            : "Slots data not available"}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Availability data is not in the expected format</p>
                  )
                ) : (
                  <p>Availability data not available</p>
                )}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Date of Birth :</strong>{" "}
                {dob}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Experience :</strong>
                {experience} months
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Certifications :</strong>{" "}
                {certifications?.map((certification) => (
                  <li value={certification}>{certification}</li>
                ))}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">
                  Age group preferences :
                </strong>{" "}
                {age_group_preferences?.map((age_group_preference) => (
                  <li value={age_group_preference}>{age_group_preference}</li>
                ))}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Education :</strong>{" "}
                {education}
              </p>
              <p class="pt-2">
                <strong>Special skills :</strong>{" "}
                {special_skills?.map((special_skill) => (
                  <li value={special_skill}>{special_skill}</li>
                ))}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Special skills :</strong>{" "}
                {languages_spoken?.map((language_spoken) => (
                  <li value={language_spoken}>{language_spoken}</li>
                ))}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Gender :</strong> {gender}
              </p>
              <p class="pt-2">
                <strong className="text-purple-800">Salary :</strong> {salary}
              </p>
              <div class=" justify-end">
                <Link to="/">
                  <label
                    style={{
                      background: `url(${bg})`,
                      backgroundSize: "cover",
                    }}
                    for="booking-babysitter"
                    class="btn font-bold w-full btn-md"
                  >
                    Recruit
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBabysitter;
