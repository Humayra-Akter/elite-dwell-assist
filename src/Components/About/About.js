import React from "react";

const About = () => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <label
          for="my-drawer-4"
          className="drawer-button btn btn-sm rounded-full text-xs w-1/3 purple-500 text-purple-800 font-bold"
          // class="drawer-button btn btn-sm rounded-full text-xs w-1/3 border-purple-500 text-purple-800 font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent"
        >
          About US
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <div class="menu p-4 w-96 min-h-full bg-purple-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div>
            <h1
              className="text-3xl font-black text-purple-900 text-center px-7 pt-16 "
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
              <strong className="text-lg font-bold text-justify text-purple-900">
                Purpose:
              </strong>
              Our project addresses the pressing need for a seamless and secure
              platform that bridges the gap between users and trustworthy
              service providers.
              <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Significance :
              </strong>
              In a fast-paced world, finding skilled professionals like drivers,
              maids, electricians, and caregivers is a challenge. Our platform
              strives to bring convenience, reliability, and peace of mind to
              your household needs.
              <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Need for Reliability:
              </strong>
              We understand the frustration of uncertain hiring processes. This
              is why we're committed to providing a reliable solution that
              ensures you can easily discover and hire verified professionals
              for your specific requirements.
            </p>
            <h1
              className="text-xl font-black text-purple-900 text-center px-7 pt-16 "
              style={{ fontFamily: "arial" }}
            >
              Main Functionalities of the Application
            </h1>
            <p className="text-base font-medium text-justify text-black pb-28 px-11 pt-11">
              <strong className="text-lg font-bold text-justify text-purple-900">
                User Registration and Profiles:
              </strong>
              Allowing users to create accounts with personalized profiles to
              track history, reviews, and preferences.
              <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Service Provider Profiles:
              </strong>
              Creating detailed profiles showcasing skills, experience, photos,
              and client reviews. Search and <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Filtering Options:
              </strong>
              Implementing a robust search functionality based on location,
              services, and ratings. <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Ratings and Reviews:
              </strong>
              Enabling users to leave feedback, helping others make informed
              decisions. <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Recruiting and Scheduling:
              </strong>
              Allowing users to schedule appointments with service providers
              through an intuitive calendar interface. <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Secure Payments:
              </strong>
              Integrating a secure payment gateway for seamless transactions.{" "}
              <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Appliance Repair:
              </strong>
              Our system has appliance repair option where customer can repair
              electrical devices such as television, fridge and air conditioner.{" "}
              <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                Dashboard and Analytics:
              </strong>
              Offering user and service provider dashboards to track bookings,
              earnings, and performance.
            </p>
            <h1
              className="text-xl font-black text-purple-900 text-center pt-9 "
              style={{ fontFamily: "arial" }}
            >
              Developers
            </h1>
            <p className="text-base font-medium text-center text-black  px-11 pt-11 pb-16">
              <strong className="text-lg font-bold text-justify text-purple-900">
                HUMAYRA AKTER
              </strong>
              <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                MAYESHA TASNIM
              </strong>
              <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
                MD.IMRAN-UL-HAQ
              </strong>
              <br />
              <strong className="text-lg font-bold text-justify text-purple-900">
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
