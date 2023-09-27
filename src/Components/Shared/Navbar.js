import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ openAboutModal }) => {
  //service dropdown from 8-18
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const handleServiceClick = (service) => {
    console.log(`Clicked on ${service}`);
    closeDropdown();
  };

  return (
    <div className="bg-gradient-to-b from-primary to-accent text-white font-bold py-2">
      <div class="navbar sticky">
        <div className="navbar-start">
          <Link to={"/"}>
            <img className="w-32" src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-end pr-48">
          <Link to="/login">
            <button className="text-black font-black hover:text-primary pr-7 focus:outline-none">
              <div class="indicator">Login</div>
            </button>
          </Link>

          <div className="relative inline-block text-right">
            <button
              onClick={toggleDropdown}
              className="text-black font-black pr-7 hover:text-primary focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link to="/maidPerDay">
                    <button
                      onClick={() => handleServiceClick("Service 1")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      Maid Per Day
                    </button>
                  </Link>
                  <button
                    onClick={() => handleServiceClick("Service 2")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                  >
                    <Link to="/maidPerMonth">Maid Per Month</Link>
                  </button>
                  <button
                    onClick={() => handleServiceClick("Service 3")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                  >
                    <Link to="/babysitter">Babysitter</Link>
                  </button>
                  <button
                    onClick={() => handleServiceClick("Service 3")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                  >
                    <Link to="/driverPerDay">Driver Per Day</Link>
                  </button>
                  <button
                    onClick={() => handleServiceClick("Service 3")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                  >
                    <Link to="/driverPerMonth">Car Driver</Link>
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={openAboutModal}
            className=" text-black font-black pr-7 hover:text-primary focus:outline-none"
          >
            About
          </button>
          {/* <Link to="/service">
            <button class="btn btn-ghost w-100 h-100 btn-circle ">
              <div class="indicator">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M21 8a2 2 0 012 2v4a2 2 0 01-2 2h-1.062A8.001 8.001 0 0112 23v-2a6 6 0 006-6V9A6 6 0 106 9v7H3a2 2 0 01-2-2v-4a2 2 0 012-2h1.062a8.001 8.001 0 0115.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0012 15a5.972 5.972 0 003.18-.911l1.06 1.696A7.963 7.963 0 0112 17a7.963 7.963 0 01-4.24-1.215z" />
                </svg>
                Services
              </div>
            </button>
          </Link> */}

          <button class="btn btn-ghost text-xl font-black text-black btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
