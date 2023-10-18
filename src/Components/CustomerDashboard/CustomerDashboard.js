import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import frwrd from "../../images/forward.png";
import rewrd from "../../images/rewind.png";

const CustomerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`drawer ${isSidebarOpen ? "lg:drawer-open" : ""}`}>
        <input id="customer-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-11">
          <Outlet />
          <label
            for="customer-drawer"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
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
            for="customer-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link
                className="text-primary text-base font-bold hover:text-black"
                to="/customerDashboard"
              >
                <i class="fa fa-desktop"></i>
                Customer Profile
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/customerDashboard/customerNotification"
              >
                <i class="fa fa-bell"></i>Customer Notification
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/customerDashboard/createPostForMaid"
              >
                <i class="fa fa-upload"></i>
                Create Post For Home-service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
