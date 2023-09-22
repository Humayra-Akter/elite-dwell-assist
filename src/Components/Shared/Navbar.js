import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import About from "../About/About";

const Navbar = () => {
  return (
    <div>
      <div class="navbar sticky">
        <div className="navbar-start">
          <Link to={"/"}>
            <img className="w-28" src={logo} alt="" />
          </Link>
          <About></About>
        </div>

        <div class="navbar">
          <Link to="/register">
            <button class="btn btn-ghost h-10">Register</button>
          </Link>
          
          <div class="dropdown pl-10">
            <button>
              <label tabindex="0" class="btn btn-ghost btn-circle">
                Services
              </label>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-300 rounded-box w-52"
              >
                <li>
                  <button>
                    <Link to="/maidPerDay">Maid Per Day</Link>
                  </button>
                </li>
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
                zz
              </label>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-300 rounded-box w-52"
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
