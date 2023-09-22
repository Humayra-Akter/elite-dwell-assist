import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Register from "./Components/Login/Register";
import Service from "./Components/Services/Service";
import MaidPerDay from "./Components/Services/Maid/MaidPerDay";
import Babysitter from "./Components/Services/Babysitter/Babysitter";
import DriverPerDay from "./Components/Services/Driver/DriverPerDay";
import DriverPerMonth from "./Components/Services/Driver/DriverPerMonth";
import MaidPerMonth from "./Components/Services/Maid/MaidPerMonth";
import { useState } from "react";
import Error from "./Components/Error/Error";
import ApplianceRepair from "./Components/Services/ApplianceRepair/ApplianceRepair";

function App() {
  return (
    <div className="rgb(240,240,240)">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route path="/maidPerDay" element={<MaidPerDay />} />
        <Route path="/maidPerMonth" element={<MaidPerMonth />} />
        <Route path="/babysitter" element={<Babysitter />} />
        <Route path="/driverPerDay" element={<DriverPerDay />} />
        <Route path="/driverPerMonth" element={<DriverPerMonth />} />{" "}
        <Route path="/tvRepair" element={<ApplianceRepair />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
