import React from "react";

const About = () => {
  return (
    <div>
      <h1
        className="text-3xl font-black text-white text-center px-7"
        style={{ fontFamily: "arial" }}
      >
        About --- "ELITE DWELL ASSIST"
      </h1>

      <p className="text-lg italic font-bold text-white text-center py-5">
        a sophisticated and top-tier platform that facilitates assistance and
        connection for homes, while also fostering self-employment opportunities
        for service providers.
      </p>

      <h1
        className="text-xl font-black text-sky-200 text-left pt-5 pb-3 px-5"
        style={{ fontFamily: "abadi" }}
      >
        Main Functionalities of the Application ---
      </h1>
      <p className="text-base font-medium text-left text-white">
        <li>User Registration and Profiles</li>
        <li>Service Provider Profiles</li>
        <li>Filtering Options</li>
        <li>Ratings and Reviews</li>
        <li>Recruiting and Scheduling</li>
        <li>Appliance Repair</li>
        <li>Dashboard and Analytics</li>
      </p>
      <ul className="pt-5">
        <li className="mb-2 text-xs font-bold text-right text-white">
          HUMAYRA AKTER
        </li>
        <li className="mb-2 text-xs font-bold text-right text-white">
          MAYESHA TASNIM
        </li>
        <li className="mb-2 text-xs font-bold text-right text-white">
          MD.IMRAN-UL-HAQ
        </li>
        <li className="mb-2 text-xs font-bold text-right text-white">
          MD.SADIQUL ALAM
        </li>
      </ul>
    </div>
  );
};

export default About;
