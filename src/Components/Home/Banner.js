import React, { useState } from "react";
import banner from "../../images/bannerBG.jpg";
import banner1 from "../../images/babysitter.jpg";
import banner2 from "../../images/driver.jpg";
import banner3 from "../../images/maid.jpg";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
      }}
      className="flex"
    >
      <div class=" py-7 carousel w-2/4">
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
      <div className="mx-auto py-28">
        <h1
          className="text-4xl font-black text-purple-950"
          style={{ fontFamily: "algerian" }}
        >
          ELITE DWELL ASSIST
        </h1>
      </div>
    </div>
  );
};

export default Banner;
