import React, { useEffect, useState } from "react";
import About from "../About/About";
import banner1 from "../../images/tv.jpg";
import banner2 from "../../images/refrigaretor.jpg";
import banner3 from "../../images/washingmachine.jpg";

const Form = () => {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container w-full mt-32 mb-44 mx-28 gap-14 flex-col items-center justify-center grid grid-cols-2 ">
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
        <h4
          style={{ fontFamily: "abadi" }}
          className="text-purple-800 text-2xl font-bold "
        >
          Contact Us
        </h4>
        <h2 className="text-white text-3xl">Stay connected with us</h2>
        <form>
          <input
            className="w-96 h-12 rounded-lg mt-5 mb-5 pl-5"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
          />
          <br />
          <input
            className="w-96 h-12 rounded-lg pl-5"
            type="text"
            name="subject"
            placeholder="Subject"
            id=""
          />
          <br />
          <input
            className="w-96 h-32 rounded-lg mt-5 mb-5 pl-5"
            type="text"
            name="Your message"
            placeholder="Your message"
            id=""
          />
          <About></About>
        </form>
      </div>
    </div>
  );
};

export default Form;
