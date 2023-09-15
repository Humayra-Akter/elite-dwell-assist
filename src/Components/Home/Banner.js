import React, { useState } from "react";
import banner from "../../images/bannerBG.jpg";
import banner1 from "../../images/babysitter.jpg";
import banner2 from "../../images/driver.jpg";
import banner3 from "../../images/maid.jpg";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      // style={{
      //   background: `url(${banner})`,
      //   backgroundSize: "cover",
      // }}
      className="container w-full p-16 gap-14 flex-col items-center justify-center grid grid-cols-2 "
    >
      <div class="carousel border-purple-400 border-2 rounded-3xl">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={banner1} alt="" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={banner2} alt="" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={banner3} alt="" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
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
          className="text-justify font-serif text-base p-7"
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
