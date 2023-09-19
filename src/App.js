import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import banner4 from "./images/serviceBG.jpg";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Register from "./Components/Login/Register";
import Service from "./Components/Services/Service";
import MaidPerDay from "./Components/Services/Maid/MaidPerDay";
import Babysitter from "./Components/Services/Babysitter/Babysitter";
import { useState } from "react";
import Error from "./Components/Error/Error";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      style={{
        background: `url(${banner4})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route path="/maidPerDay" element={<MaidPerDay />} />
        <Route path="/babysitter" element={<Babysitter />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
