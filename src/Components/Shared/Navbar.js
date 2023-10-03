import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Notification from "./Notification";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addNotification } from "../../redux/slices/notificationsSlice";
import userEvent from "@testing-library/user-event";
import { toast } from "react-toastify";

const Navbar = ({ openAboutModal }) => {
  const [user, loading, error] = useAuthState(auth);
  const [notificationIdCounter, setNotificationIdCounter] = useState(1);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);
  const [maid, setMaid] = useState([]);
  const [customer, setCustomer] = useState([]);

  //service dropdown from 8-31
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  const toggleAppDropdown = () => {
    setIsAppDropdownOpen(!isAppDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsServiceDropdownOpen(false);
    setIsAppDropdownOpen(false);
  };

  const handleServiceClick = (service) => {
    // console.log(`Clicked on ${service}`);
    closeDropdowns();
  };

  useEffect(() => {
    // Check if the user is a customer
    fetch("http://localhost:5000/customer")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const userRole = data[0].role;
          if (userRole === "customer") {
            setCustomer(data);
            localStorage.setItem("userRole", userRole);
          }
        } else {
          toast.log("No user data found.");
        }
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const userRole = data[0].role;
          if (userRole === "maid") {
            setMaid(data); // Set the user as a maid
            localStorage.setItem("userRole", userRole);
          }
        } else {
          toast.log("No user data found.");
        }
      });
  }, []);

  const userRole = localStorage.getItem("userRole");

  const logout = () => {
    localStorage.removeItem("userRole");
    signOut(auth);
  };

  return (
    <div className="bg-primary text-white font-bold ">
      <div class="navbar sticky">
        <div className="navbar-start">
          <Link to={"/"}>
            <img className="ml-10 rounded-full w-16" src={logo} alt="" />
          </Link>
        </div>
        {/* <div className="navbar-center">
          <p disabled className="text-white font-bold cursor-none">
            WELCOME "{user?.displayName || ""}"
          </p>
        </div> */}
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
                    <button
                      onClick={() => handleServiceClick("Service 2")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                      role="menuitem"
                    >
                      <Link to="/maidPerMonth">Maid Per Month</Link>
                    </button>
                    <button
                      onClick={() => handleServiceClick("Service 3")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary  w-full text-left"
                      role="menuitem"
                    >
                      <Link to="/babysitter">Babysitter</Link>
                    </button>
                    <button
                      onClick={() => handleServiceClick("Service 4")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                      role="menuitem"
                    >
                      <Link to="/driverPerDay">Vehicle Service</Link>
                    </button>
                    <button
                      onClick={() => handleServiceClick("Service 5")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                      role="menuitem"
                    >
                      <Link to="/driverPerMonth">Car Driver</Link>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Appliance-Repair */}
          <div className="relative inline-block text-right">
            <button
              onClick={toggleAppDropdown}
              className="text-white font-bold hover:text-black pr-7 "
            >
              Appliance-Repair
            </button>
            {isAppDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link to="/tv-service">
                    <button
                      onClick={() => handleServiceClick("Service 1")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                      role="menuitem"
                    >
                      TV service
                    </button>
                  </Link>
                  <button
                    onClick={() => handleServiceClick("Service 2")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary  w-full text-left"
                    role="menuitem"
                  >
                    <Link to="/oven-service">Oven Service</Link>
                  </button>
                  <button
                    onClick={() => handleServiceClick("Service 3")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left"
                    role="menuitem"
                  >
                    <Link to="/washing-machine-service">
                      Washing-Machine service
                    </Link>
                  </button>
                  <button
                    onClick={() => handleServiceClick("Service 4")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary  w-full text-left"
                    role="menuitem"
                  >
                    <Link to="/refrigerator-service">Refrigerator Service</Link>
                  </button>
                </div>
              </div>
            )}
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
