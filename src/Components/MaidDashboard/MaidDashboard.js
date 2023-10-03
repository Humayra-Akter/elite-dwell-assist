import React from "react";
import { Link, Outlet } from "react-router-dom";

const MaidDashboard = () => {
  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="maid-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  p-11">
          <h1
            style={{ fontFamily: "arial" }}
            className="text-4xl text-primary font-black text-left pb-11"
          >
            DASHBOARD
          </h1>
          <Outlet />
          <label
            for="maid-drawer"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label
            for="maid-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/maidDashboard">Maid Profile</Link>
            </li>
            <li>
              <Link to="/maidDashboard/maidNotification">
                Maid Notification
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MaidDashboard;
