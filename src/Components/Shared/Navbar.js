import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import About from "../About/About";

const Navbar = () => {
  return (
    <div className="bg-gradient from-primary from-10% via-secondary via-30% to-90% to-accent py-2">
      <div class="navbar sticky">
        <div className="navbar-start">
          <Link to={"/"}>
            <img className="w-32" src={logo} alt="" />
          </Link>
          <About></About>
        </div>
        {/* <div className="navbar-center">
          <h1
            style={{ fontFamily: "arial" }}
            className="text-4xl font-bold text-purple-950"
          >
            Elite-Dwell-Assist
          </h1>
        </div> */}
        <div class="navbar">
          <Link to="/login">
            <button class="btn btn-ghost w-100 h-100">
              <div class="indicator">
                {/* <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M800 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H350c-26.667 0-49.667-10-69-30s-29-43.333-29-70V750h98v100h450V150H350v150h-98V150c0-28 9.667-51.667 29-71s42.333-29 69-29h450M450 720V600H0V450h450V330l200 194-200 196" />
                </svg> */}
                Login
              </div>
            </button>
          </Link>
          <div class="dropdown pl-10">
            <button>
              <label tabindex="0" class="btn btn-ghost btn-circle">
                {/* <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M21 8a2 2 0 012 2v4a2 2 0 01-2 2h-1.062A8.001 8.001 0 0112 23v-2a6 6 0 006-6V9A6 6 0 106 9v7H3a2 2 0 01-2-2v-4a2 2 0 012-2h1.062a8.001 8.001 0 0115.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0012 15a5.972 5.972 0 003.18-.911l1.06 1.696A7.963 7.963 0 0112 17a7.963 7.963 0 01-4.24-1.215z" />
                </svg> */}
                Services
              </label>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-52"
              >
                <li>
                  <button>
                    <Link to="/maidPerDay">Maid Per Day</Link>
                  </button>
                </li>{" "}
                <li>
                  <button>
                    <Link to="/maidPerMonth">Maid Per Month</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/babysitter">Babysitter</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/driverPerDay">Driver Per Day</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/driverPerMonth">Car Driver</Link>
                  </button>
                </li>
              </ul>
            </button>
          </div>

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

          <div class="dropdown pl-10">
            <button>
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
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-52"
              >
                <li>
                  <button>
                    <Link to="/">Homepage</Link>
                  </button>
                </li>{" "}
                <li>
                  <button>
                    <Link to="/register">Register</Link>
                  </button>
                </li>
              </ul>
            </button>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
