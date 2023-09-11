import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import banner4 from "./images/serviceBG.jpg";
import Login from "./Components/Login/Login";

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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
