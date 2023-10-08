import React from "react";
import { Link, Outlet } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="customer-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-11">
          <Outlet />
          <label
            for="customer-drawer"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
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
