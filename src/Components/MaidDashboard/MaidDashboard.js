import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import frwrd from "../../images/forward.png";
import rewrd from "../../images/rewind.png";
import ban4 from "../../images/avatar.png";
import ban1 from "../../images/notification.png";
import ban2 from "../../images/job-search.png";

const MaidDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`drawer ${isSidebarOpen ? "lg:drawer-open" : ""}`}>
        <input id="maid-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-11">
          <Outlet />
          <label
            for="maid-drawer"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          {isSidebarOpen ? (
            <button
              className="btn absolute rounded-full top-2 left-2 z-10 btn-transparent btn-sm"
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
                  <span className="flex gap-4">
                    <img className="w-6" src={ban4} alt="" />
                    Profile
                  </span>
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="text-primary mt-3 text-base font-bold hover:text-black"
                  to="/maidDashboard/maidNotification"
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
                  to="/maidDashboard/searchJob"
                >
                  <span className="flex gap-4">
                    <img className="w-6" src={ban2} alt="" />
                    Search Job
                  </span>
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
