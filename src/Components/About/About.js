import React from "react";

const About = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <label
        for="my-drawer-4"
        className="drawer-button btn btn-sm rounded-full text-xs w-1/3 blue-500 text-blue-800 font-bold"
      >
        About US
      </label>
      <div class="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div
          style={{ zIndex: 10000 }}
          className="menu p-4 w-96 min-h-full bg-blue-100 text-base-content"
        >
          {/* <!-- Sidebar content here --> */}
          <div>
            <h1
              className="text-3xl font-black text-blue-900 text-center px-7 pt-16 "
              style={{ fontFamily: "arial" }}
            >
              About --- "ELITE DWELL ASSIST"
            </h1>
            <p className="text-lg font-bold text-black text-center px-7 pt-11">
              a sophisticated and top-tier platform that facilitates assistance
              and connection for homes, while also fostering self-employment
              opportunities for service providers.
            </p>
            <p className="text-base font-medium text-justify text-black  px-11 pt-11">
              <strong className="text-lg font-bold text-justify text-blue-900">
                Purpose:
              </strong>
              Our project addresses the pressing need for a seamless and secure
              platform that bridges the gap between users and trustworthy
              service providers.
              <br />
              <strong className="text-lg font-bold text-justify text-blue-900">
                Significance :
              </strong>
              In a fast-paced world, finding skilled professionals like drivers,
              maids, electricians, and caregivers is a challenge. Our platform
              strives to bring convenience, reliability, and peace of mind to
              your household needs.
              <br />
              <strong className="text-lg font-bold text-justify text-blue-900">
                Need for Reliability:
              </strong>
              We understand the frustration of uncertain hiring processes. This
              is why we're committed to providing a reliable solution that
              ensures you can easily discover and hire verified professionals
              for your specific requirements.
            </p>
            <h1
              className="text-xl font-black text-blue-900 text-center px-7 pt-16 "
              style={{ fontFamily: "arial" }}
            >
              Main Functionalities of the Application
            </h1>
            <p className="text-base font-medium text-justify text-black pb-28 px-11 pt-11">
              User Registration and Profiles
              <br />
              Service Provider Profiles
              <br />
              Filtering Options
              <br />
              Ratings and Reviews
              <br />
              Recruiting and Scheduling
              <br />
              Secure Payments
              <br />
              Appliance Repair
              <br /> Dashboard and Analytics
            </p>
            <h1
              className="text-xl font-black text-blue-900 text-center pt-9 "
              style={{ fontFamily: "arial" }}
            >
              Developers
            </h1>
            <p className="text-base font-medium text-center text-black  px-11 pt-11 pb-16">
              <strong className="text-lg font-bold text-justify text-blue-900">
                HUMAYRA AKTER
              </strong>
              <br />
              <strong className="text-lg font-bold text-justify text-blue-900">
                MAYESHA TASNIM
              </strong>
              <br />
              <strong className="text-lg font-bold text-justify text-blue-900">
                MD.IMRAN-UL-HAQ
              </strong>
              <br />
              <strong className="text-lg font-bold text-justify text-blue-900">
                MD.SADIQUL ALAM
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
