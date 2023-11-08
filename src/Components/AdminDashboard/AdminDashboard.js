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
  const [isApplianceOpen, setIsApplianceOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAppliance = () => {
    setIsApplianceOpen(!isApplianceOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div
        className={`admin-sidebar ${
          isSidebarOpen ? "lg:admin-sidebar-open" : ""
        }`}
      >
        <div className={`w-3/4 p-11 absolute left-96`}>
          <Outlet />
          <label
            htmlFor="admin-drawer"
            className="btn btn-sm absolute top-0 right-0 mt-2 admin-sidebar-button lg:hidden"
          >
            Open sidebar
          </label>
        </div>
        <div className="admin-sidebar-content">
          <ul className="menu pl-4 pt-16 w-96  fixed top-20 min-h-full bg-sky-50 text-base-content">
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
            <li>
              <button
                onClick={toggleAppliance}
                className="text-primary mt-3 text-base font-bold hover:text-black"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban3} alt="" />
                  Appliance Repair Bookings
                  <span className="ml-2">{isApplianceOpen ? "▼" : "▶"}</span>
                </span>
              </button>
              {isApplianceOpen && (
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link
                        to="/adminDashboard/television"
                        className="text-primary text-base font-bold hover:text-black"
                      >
                        Television Information
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/adminDashboard/washing-machine"
                        className="text-primary text-base font-bold hover-text-black"
                      >
                        Washing-machine Information
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/adminDashboard/refrigerator"
                        className="text-primary text-base font-bold hover-text-black"
                      >
                        Refrigerator Information
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/adminDashboard/oven
                        "
                        className="text-primary text-base font-bold hover-text-black"
                      >
                        Oven Information
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
