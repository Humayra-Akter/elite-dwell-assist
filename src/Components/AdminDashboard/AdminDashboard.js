import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import frwrd from "../../images/forward.png";
import rewrd from "../../images/rewind.png";
import ban1 from "../../images/add.png";
import ban2 from "../../images/add-user.png";
import ban3 from "../../images/customer.png";
import ban4 from "../../images/dashboard.png";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`drawer ${isSidebarOpen ? "lg:drawer-open" : ""}`}>
        <input id="admin-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-11">
          <Outlet />
          <label
            for="admin-drawer"
            class="btn btn-sm absolute top-0 right-0 mt-2 drawer-button lg:hidden"
          >
            Open drawer
          </label>{" "}
          {isSidebarOpen ? (
            <button
              className="btn absolute rounded-full top-2 left-2 z-10 btn-secondary btn-sm"
              onClick={toggleSidebar}
            >
              <img className="w-4" src={rewrd} alt="" />
            </button>
          ) : (
            <button
              className="btn absolute top-0 rounded-full left-0 btn-secondary btn-sm"
              onClick={toggleSidebar}
            >
              <img className="w-4" src={frwrd} alt="" />
            </button>
          )}
        </div>
        <div class="drawer-side">
          <label
            for="admin-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu pl-4 pt-16 w-72 min-h-full bg-sky-50 text-base-content">
            <li>
              <Link
                className="text-primary text-base font-bold hover:text-black"
                to="/adminDashboard"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban4} alt="" />
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/adminCreate"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban2} alt="" />
                  Create Admin
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/adminMaidPerDayBookings"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban1} alt="" />
                  Maid Per Day Bookings
                </span>
              </Link>
            </li>{" "}
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/acknowledgedMaidBookings"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban1} alt="" />
                  Acknowledged Bookings
                </span>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="text-primary mt-3 text-base font-bold hover:text-black"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban3} alt="" />
                  Information
                  <span className="ml-2">{isDropdownOpen ? "▼" : "▶"}</span>
                  <i
                    className={`ml-2 fas ${
                      isDropdownOpen ? "fa-caret-up" : "fa-caret-down"
                    }`}
                  ></i>
                </span>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link
                        to="/adminDashboard/customer"
                        className="text-primary text-base font-bold hover:text-black"
                      >
                        Customer Information
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/adminDashboard/maid"
                        className="text-primary text-base font-bold hover-text-black"
                      >
                        Maid Information
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/adminDashboard/driver"
                        className="text-primary text-base font-bold hover-text-black"
                      >
                        Driver Information
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/adminDashboard/babysitter"
                        className="text-primary text-base font-bold hover-text-black"
                      >
                        Babysitter Information
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
