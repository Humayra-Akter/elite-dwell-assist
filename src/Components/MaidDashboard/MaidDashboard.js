import React from "react";
import { Link, Outlet } from "react-router-dom";

const MaidDashboard = () => {
  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="maid-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-11">
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
          <ul class="menu p-4 w-60 min-h-full bg-sky-50 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <ul className="mt-20">
              <li>
                <Link
                  className="text-primary mt-3 text-base font-bold hover:text-black"
                  to="/maidDashboard"
                >
                  <i class="fa fa-desktop"></i>
                  Profile
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="text-primary mt-3 text-base font-bold hover:text-black"
                  to="/maidDashboard/maidNotification"
                >
                  <i class="fa fa-bell"></i>
                  Notification
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary mt-3 text-base font-bold hover:text-black"
                  to="/maidDashboard/searchJob"
                >
                  <i class="fa fa-search"></i>
                  Search Job
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MaidDashboard;
