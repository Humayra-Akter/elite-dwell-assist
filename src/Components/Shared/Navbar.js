import React, { useEffect, useRef, useState } from "react";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Notification from "./Notification";
import { signOut } from "firebase/auth";

const Navbar = ({ openAboutModal }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const serviceDropdownRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      // window.location.reload();
    }, 10000);
  }, []);

  //service dropdown from 8-31
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };
  const closeDropdowns = () => {
    setIsServiceDropdownOpen(false);
  };
  const handleServiceClick = (service) => {
    closeDropdowns();
  };
  const logout = () => {
    localStorage.removeItem("userRole");
    signOut(auth);
    navigate("/");
  };

  const userRole = localStorage.getItem("userRole");
  return (
    <div className="bg-primary text-white font-bold ">
      <div class="navbar sticky">
        <div className="navbar-start">
          <Link to={"/"}>
            <img className="ml-10 rounded-full w-16" src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-end pr-10">
          {/* Services */}
          <div className="relative inline-block text-right">
            <button
              onClick={toggleServiceDropdown}
              className="text-white font-bold hover:text-black pr-7 "
            >
              Services
            </button>
            {isServiceDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="origin-top-right absolute right-0 mt-2 w-36  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link to="/maidPerDay">
                      <button
                        onClick={() => handleServiceClick("Service 1")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                        role="menuitem"
                      >
                        Maid Per Day
                      </button>
                    </Link>
                    <Link to="/maidPerMonth">
                      <button
                        onClick={() => handleServiceClick("Service 2")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                        role="menuitem"
                      >
                        Maid Per Month
                      </button>
                    </Link>{" "}
                    <Link to="/babysitter">
                      <button
                        onClick={() => handleServiceClick("Service 3")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary  w-full text-left"
                        role="menuitem"
                      >
                        Babysitter
                      </button>
                    </Link>{" "}
                    {/* <Link to="/driverPerDay">
                      <button
                        onClick={() => handleServiceClick("Service 4")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                        role="menuitem"
                      >
                        Vehicle Service
                      </button>
                    </Link> */}
                    <Link to="/driverPerMonth">
                      <button
                        onClick={() => handleServiceClick("Service 5")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                        role="menuitem"
                      >
                        Driver
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Appliance-Repair */}
          <div className="relative inline-block text-right">
            <a
              className="text-white font-bold hover:text-black pr-7"
              href="#applianceRepair"
            >
              Appliance-Repair
            </a>
          </div>
          {/* maid dashboard */}
          {userRole === "maid" ? (
            <Link to="/maidDashboard">
              <button className="text-white font-bold hover:text-black pr-7 ">
                <div class="indicator">Dashboard</div>
              </button>
            </Link>
          ) : (
            <></>
          )}
          {/* admin dashboard */}
          {userRole === "admin" ? (
            <Link to="/adminDashboard">
              <button className="text-white font-bold hover:text-black pr-7 ">
                <div class="indicator">Dashboard</div>
              </button>
            </Link>
          ) : (
            <></>
          )}
          {/* customer dashboard */}
          {userRole === "customer" ? (
            <Link to="/customerDashboard">
              <button className="text-white font-bold hover:text-black pr-7 ">
                <div class="indicator">Dashboard</div>
              </button>
            </Link>
          ) : (
            <></>
          )}
          {/* driver dashboard */}
          {userRole === "driver" ? (
            <Link to="/driverDashboard">
              <button className="text-white font-bold hover:text-black pr-7 ">
                <div class="indicator">Dashboard</div>
              </button>
            </Link>
          ) : (
            <></>
          )}

          <button
            onClick={openAboutModal}
            className=" text-white font-bold hover:text-black pr-7 "
          >
            About
          </button>

          {user ? (
            <button
              onClick={logout}
              className="text-white font-bold hover:text-black pr-7 "
            >
              <div class="indicator">Signout</div>
            </button>
          ) : (
            <Link to="/login">
              <button className="text-white font-bold hover:text-black pr-7 ">
                <div class="indicator">Login</div>
              </button>
            </Link>
          )}
          {userRole === "maid" ? <Notification /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
