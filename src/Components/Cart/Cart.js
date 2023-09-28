import React from "react";
import ServiceCart from "./ServiceCart";

const Cart = () => {
  return (
    <>
      <div className="fixed right-0 top-0 w-[20vw] h-full p-5 bg-white">
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold">My Cart</span>
          <div className="border-2 border-gray-500 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-500 hover:border-red-600 cursor-pointer">
            x
          </div>
        </div>
        <ServiceCart></ServiceCart>
        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : </h3>
          <h3 className="font-semibold text-gray-800">Total Amount :</h3>
          <hr className="w-[18vw] my-2" />
          <button className="bg-primary font-bold px-3 text-white py-2 rounded-lg w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
