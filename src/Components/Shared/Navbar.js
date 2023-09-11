import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  return (
    <div className="bg-gradient from-primary from-10% via-secondary via-30% to-90% to-accent py-2">
      <div class="navbar sticky">
        <div className="navbar-start">
          <Link to={"/"}>
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center">
          <h1
            style={{ fontFamily: "algerian" }}
            className="text-4xl font-bold text-purple-950"
          >
            <TypeAnimation
              sequence={[
                "Elite-Dwell-Assist",
                2000,
                "We serve for you",
                2000,
                "We ensure Employment for you",
                2000,
              ]}
              speed={50}
              className="text-blue-900"
              wrapper="span"
              repeat={Infinity}
            />
          </h1>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost text-sm font-sans">Services</button>
          <button class="btn btn-ghost text-sm font-sans">
            Appliance-repair
          </button>
          <button class="btn btn-ghost text-sm font-sans">
            <Link to="/login">Login</Link>
          </button>
          <button class="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button class="btn btn-ghost btn-circle">
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

          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                src="/images/logo.png"
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
