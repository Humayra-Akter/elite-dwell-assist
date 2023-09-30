import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Register from "./Components/Login/Register";
import Service from "./Components/Services/Service";
import MaidPerDay from "./Components/Services/Maid/MaidPerDay";
import Babysitter from "./Components/Services/Babysitter/Babysitter";
import DriverPerDay from "./Components/Services/Driver/DriverPerDay";
import DriverPerMonth from "./Components/Services/Driver/DriverPerMonth";
// import MaidPerMonth from "./Components/Services/Maid/MaidPerMonth";
import { useState } from "react";
import Error from "./Components/Error/Error";
import ApplianceRepair from "./Components/Services/ApplianceRepair/ApplianceRepair";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MaidSearchSegment from "./Components/Services/Maid/MaidSearch/MaidSearchSegment";
import CustomerRegistrationForm from "./Components/Login/CustomerRegistrationForm";
import RequireAuth from "./Components/Login/RequireAuth";
import MaidPerMonth from "./Components/Services/Maid/MaidPerMonth";

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
        <Route path="/maidPerDay" element={<MaidPerDay />} />
        <Route
          path="/customer-register"
          element={<CustomerRegistrationForm />}
        />
        <Route path="/maidPerMonth" element={<MaidSearchSegment />} />
        {/* <Route
          path="/maidPerMonth"
          element={
            <RequireAuth>
              <MaidPerMonth />
            </RequireAuth>
          }
        /> */}
        <Route path="/babysitter" element={<Babysitter />} />
        <Route path="/driverPerDay" element={<DriverPerDay />} />
        <Route path="/driverPerMonth" element={<DriverPerMonth />} />{" "}
        <Route path="/tvRepair" element={<ApplianceRepair />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
