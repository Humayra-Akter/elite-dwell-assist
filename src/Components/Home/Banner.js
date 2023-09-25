import React, { useEffect, useState } from "react";
import banner1 from "../../images/babysitter.jpg";
import banner2 from "../../images/driver.jpg";
import banner3 from "../../images/maid.jpg";
import { TypeAnimation } from "react-type-animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
     
      className="container w-full p-16 mt-16 gap-14 flex-col items-center justify-center grid grid-cols-2"
    >
      <div className="carousel h-96 border-purple-400 border-2 rounded-3xl relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item absolute w-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        ))}
      </div>
      <div className="justify-center items-center">
        <h1
          style={{ fontFamily: "arial" }}
          className="text-4xl font-bold text-center"
        >
          <TypeAnimation
            sequence={[
              "Elite-Dwell-Assist",
              2000,
              "We serve for you",
              2000,
              "We ensure Employment for you",
              2000,
            ]}
            speed={50}
            className="text-purple-950 text-center "
            wrapper="span"
            repeat={Infinity}
          />
        </h1>
        <p style={{ fontFamily: "abadi" }} className="text-xl p-7">
          <li>
            <strong>Elite:</strong> Signifies a premium and high-quality
            service.
          </li>
          <li>
            <strong>Dwell:</strong> Refers to homes and living spaces.
          </li>
          <li>
            <strong>Assist:</strong> Highlights the support and assistance
            provided to both customers and service providers.
          </li>
        </p>
        <div className="grid grid-cols-2 gap-5">
          <button className="btn btn-sm text-xs w-full border-purple-500 text-purple-800 font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
            Register
          </button>
          <button className="btn btn-sm text-xs w-full border-purple-500 text-purple-800 font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
