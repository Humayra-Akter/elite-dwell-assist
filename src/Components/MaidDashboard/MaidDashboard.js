import React from "react";
import { Link, Outlet } from "react-router-dom";

const MaidDashboard = () => {
  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <h1>Dashboard</h1>
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label
            for="my-drawer-2"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/maidDashboard">Maid Notification</Link>
            </li>
            <li>
              <Link to="/maidDashboard/maidProfile">Maid Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MaidDashboard;
