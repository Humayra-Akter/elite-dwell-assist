import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Register from "./Components/Login/Register";
import Service from "./Components/Services/Service";
import Babysitter from "./Components/Services/Babysitter/Babysitter";
import DriverPerDay from "./Components/Services/Driver/DriverPerDay";
import DriverPerMonth from "./Components/Services/Driver/DriverPerMonth";
import { useEffect, useState } from "react";
import Error from "./Components/Error/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MaidSearchSegment from "./Components/Services/Maid/MaidSearchSegment";
import CustomerRegistrationForm from "./Components/Login/CustomerRegistrationForm";
import MaidDashboard from "./Components/MaidDashboard/MaidDashboard";
import MaidNotifications from "./Components/MaidDashboard/MaidNotifications";
import MaidProfile from "./Components/MaidDashboard/MaidProfile";
import CustomerDashboard from "./Components/CustomerDashboard/CustomerDashboard";
import CustomerNotification from "./Components/CustomerDashboard/CustomerNotification";
import CustomerProfile from "./Components/CustomerDashboard/CustomerProfile";
import PerDay from "./Components/Services/Maid/PerDay";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import AdminProfile from "./Components/AdminDashboard/AdminProfile";
import AdminCreate from "./Components/AdminDashboard/AdminCreate";
import AdminMaidPerDayBookings from "./Components/AdminDashboard/AdminMaidPerDayBookings";
import CreatePostForMaid from "./Components/CustomerDashboard/CreatePostForMaid";
import MaidSearchJob from "./Components/MaidDashboard/MaidSearchJob";
import TVBill from "./Components/Services/ApplianceRepair/TVBill";
import RFBill from "./Components/Services/ApplianceRepair/RFBill";
import WMBill from "./Components/Services/ApplianceRepair/WMBill";
import OvenBill from "./Components/Services/ApplianceRepair/OvenBill";

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };
  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  return (
    <div>
      <Navbar openAboutModal={openAboutModal} />
      {isAboutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-primary w-1/2 p-9 rounded-3xl relative ">
            <About />
          </div>
          <div
            onClick={closeAboutModal}
            className="fixed inset-0 bg-sky-100 opacity-20 cursor-pointer"
          ></div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="/customer-register"
          element={<CustomerRegistrationForm />}
        />
        <Route path="/maidPerMonth" element={<MaidSearchSegment />} />
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route index element={<AdminProfile />}></Route>
          <Route
            path="adminMaidPerDayBookings"
            element={<AdminMaidPerDayBookings />}
          ></Route>
          <Route path="adminCreate" element={<AdminCreate />}></Route>
        </Route>
        <Route path="/maidDashboard" element={<MaidDashboard />}>
          <Route index element={<MaidProfile />}></Route>
          <Route
            path="maidNotification"
            element={<MaidNotifications />}
          ></Route>
          <Route path="searchJob" element={<MaidSearchJob />}></Route>
        </Route>
        <Route path="/customerDashboard" element={<CustomerDashboard />}>
          <Route index element={<CustomerProfile />}></Route>
          <Route
            path="customerNotification"
            element={<CustomerNotification />}
          ></Route>{" "}
          <Route
            path="createPostForMaid"
            element={<CreatePostForMaid />}
          ></Route>
        </Route>
        <Route path="/maidPerDay" element={<PerDay />} />
        <Route path="/babysitter" element={<Babysitter />} />
        <Route path="/driverPerDay" element={<DriverPerDay />} />
        <Route path="/driverPerMonth" element={<DriverPerMonth />} />
        <Route path="/tvBill" element={<TVBill />} />
        <Route path="/rfBill" element={<RFBill />} />
        <Route path="/wmBill" element={<WMBill />} />
        <Route path="/ovenBill" element={<OvenBill />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
