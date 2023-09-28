import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import img from "../../images/driver.jpg";
import { MdDelete } from "react-icons/md";

const ServiceCart = () => {
  return (
    <div className="flex gap-2 shadow-md bg-gradient-to-t from-primary to-slate-300 rounded-lg p-4 mb-3">
      <MdDelete className="absolute right-7 text-gray-600 hover:text-red-500 cursor-pointer" />
      <img className="w-[50px] h-[50px]" src={img} alt="" />

      <div className="leading-5">
        <h2 className="font-bold text-gray-800">name</h2>
        <div className="flex justify-between ">
          <span className="text-white font-bold">price</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
            <span>1</span>
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
