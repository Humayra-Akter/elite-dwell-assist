import React, { useEffect, useRef, useState } from "react";
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
      // style={{
      //   background: `url(${banner})`,
      //   backgroundSize: "cover",
      // }}
      className="container w-full p-16 gap-14 flex-col items-center justify-center grid grid-cols-2 "
    >
      <div className="carousel w-full h-96 border-purple-400 border-2 rounded-3xl relative">
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
      <div className="mr-auto flex flex-col justify-center">
        <h1
          style={{ fontFamily: "algerian" }}
          className="text-4xl ml-7 font-bold text-purple-950"
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
            className="text-blue-900"
            wrapper="span"
            repeat={Infinity}
          />
        </h1>
        <p
          style={{ fontFamily: "abadi" }}
          className="text-justify text-xl font-serif p-7"
        >
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
          The name <strong>"EliteDwell Assist"</strong> suggests a sophisticated
          and top-tier platform that facilitates assistance and connection for
          homes, while also fostering self-employment opportunities for service
          providers.
        </p>
      </div>
    </div>
  );
};

export default Banner;
