import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import banner4 from "./images/serviceBG.jpg";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Register from "./Components/Login/Register";

function App() {
  return (
    <div
      style={{
        background: `url(${banner4})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
