import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div class="drawer lg:drawer-open">
        <input id="admin-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-11">
          <Outlet />
          <label
            for="admin-drawer"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label
            for="admin-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu p-4 w-72 min-h-full bg-sky-50 text-base-content">
            <li>
              <Link
                className="text-primary text-base font-bold hover:text-black"
                to="/adminDashboard"
              >
                <i class="fa fa-desktop"></i> Admin Profile
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/adminCreate"
              >
                <i class="fa fa-cogs"></i>
                Create Admin
              </Link>
            </li>
            <li>
              <Link
                className="text-primary mt-3 text-base font-bold hover:text-black"
                to="/adminDashboard/adminMaidPerDayBookings"
              >
                <i class="fa fa-book"></i>
                Maid Per Day Bookings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
