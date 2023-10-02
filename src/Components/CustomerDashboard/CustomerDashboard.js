import React from "react";
import { Link, Outlet } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="customer-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <h1>Dashboard</h1>
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
              <Link to="/customerDashboard">Customer Notification</Link>
            </li>
            <li>
              <Link to="/customerDashboard/customerProfile">
                Customer Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
