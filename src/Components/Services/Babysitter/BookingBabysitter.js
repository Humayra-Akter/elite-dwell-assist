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
    <div className=" bg-transparent"
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
          <div class="card bg-transparent">
            <figure>
              <img
                className="w-24 h-20 absolute top-0 left-5"
                src={img}
                alt="babysitter"
              />
            </figure>
            <div class="card-body relative top-16">
              <h2 class="card-title">
                <strong className="text-blue-900">{name}</strong>for your baby
              </h2>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p class="pt-4">
                    <strong className="text-blue-800 underline">
                      Location :
                    </strong>{" "}
                    <br />
                    {location}
                  </p>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Availability:
                    </strong>
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
                    <strong className="text-blue-800 underline">
                      Age group preferences :
                    </strong>{" "}
                    {age_group_preferences?.map((age_group_preference) => (
                      <li value={age_group_preference}>
                        {age_group_preference}
                      </li>
                    ))}
                  </p>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Salary :
                    </strong>{" "}
                    {salary}
                  </p>
                </div>
                <div>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Date of Birth :
                    </strong>{" "}
                    {dob}
                  </p>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Certifications :
                    </strong>{" "}
                    {certifications?.map((certification) => (
                      <li value={certification}>{certification}</li>
                    ))}
                  </p>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Experience :
                    </strong>
                    {experience} months
                  </p>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Education :
                    </strong>{" "}
                    {education}
                  </p>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Special skills :
                    </strong>{" "}
                    {special_skills?.map((special_skill) => (
                      <li value={special_skill}>{special_skill}</li>
                    ))}
                  </p>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Special skills :
                    </strong>{" "}
                    {languages_spoken?.map((language_spoken) => (
                      <li value={language_spoken}>{language_spoken}</li>
                    ))}
                  </p>
                  <p class="pt-2">
                    <strong className="text-blue-800 underline">
                      Gender :
                    </strong>{" "}
                    {gender}
                  </p>
                </div>
              </div>
              <div class="justify-items-end">
                <Link to="/">
                  <label
                    for="booking-babysitter"
                    className="btn btn-sm text-xs w-1/3 border-blue-500 text-blue-800 font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
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
