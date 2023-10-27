import React from "react";
import { Link, Outlet, Route } from "react-router-dom";
import DriverProfile from "./DriverProfile";
import DriverNotifications from "./DriverNotifications";
import DriverSearchJob from "./DriverSearchJob";

const DriverDashboard = () => {
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
          <ul class="menu p-5 w-80 min-h-full bg-indigo-800 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <ul className="mt-20">
              <li>
                <Link
                  className="text-slate-400 mt-3 text-xl font-extrabold hover:text-black"
                  to="/driverDashboard"
                >
                  <img
                    className="relative w-5 h-5 bg-slate-600"
                    alt=""
                    src="/book.svg"
                  />
                  Profile
                  <img
                    className="relative w-[7px] h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/small-arrow-2.svg"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 mt-3 text-xl font-extrabold hover:text-black"
                  to="/driverDashboard/DriverNotifications"
                >
                  <img
                    className="relative w-5 h-5 bg-slate-600"
                    alt=""
                    src="/usersthreed.svg"
                  />
                  Notification
                  <img
                    className="relative w-[7px] h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/small-arrow-2.svg"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 mt-3 text-xl font-extrabold hover:text-black"
                  to="/driverDashboard/searchJob"
                >
                  <img
                    className="relative w-5 h-5 bg-slate-600"
                    alt=""
                    src="/search.svg"
                  />
                  Search Job
                  <img
                    className="relative w-[7px] h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/small-arrow-2.svg"
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
