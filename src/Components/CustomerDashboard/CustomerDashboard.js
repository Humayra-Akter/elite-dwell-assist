import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import frwrd from "../../images/forward.png";
import rewrd from "../../images/rewind.png";
import ban1 from "../../images/notification.png";
import ban2 from "../../images/job-search.png";
import ban3 from "../../images/booking.svg";
import ban4 from "../../images/avatar.png";

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
            class="btn btn-sm absolute top-0 right-0 drawer-button lg:hidden"
          >
            See menu
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
          <ul class="menu pl-4 pt-10 w-80 min-h-full bg-sky-50 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/customerDashboard"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban4} alt="" />
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/customerDashboard/customerNotification"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban1} alt="" />
                  Notification
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/customerDashboard/createPostForMaid"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban2} alt="" />
                  Create Post For Home-service
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/customerDashboard/bookingsForMaid"
              >
                <span className="flex gap-4">
                  <img className="w-6" src={ban3} alt="" />
                  Maid Bookings
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
