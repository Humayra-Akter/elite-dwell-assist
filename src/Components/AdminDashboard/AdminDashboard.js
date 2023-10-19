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
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/customer"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban3} alt="" />
                  Customer Information
                </span>
              </Link>
            </li>{" "}
            {/* <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/maid"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban1} alt="" />
                  Maid Information
                </span>
              </Link>
            </li>{" "}
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/driver"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban1} alt="" />
                  Driver Information
                </span>
              </Link>
            </li>{" "}
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/babysitter"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban1} alt="" />
                  Babysitter Information
                </span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
