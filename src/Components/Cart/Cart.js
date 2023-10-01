import React, { useState } from "react";
import ServiceCart from "./ServiceCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);
  const totalCost = cartItems.reduce((acc, item) => {
    return acc + item.qty * item.price;
  }, 0);

  return (
    <>
      {/* <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full shadow-md text-5xl p-3 fixed top-6 right-7"
      /> */}
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold">My Cart</span>
          <div
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-500 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-500 hover:border-red-600 cursor-pointer"
          >
            x
          </div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((service) => {
            return (
              <ServiceCart
                key={service.id}
                name={service.name}
                img={service.img}
                salary={service.salary}
                task={service.task}
                qty={service.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center mt-7 text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}
        <div>{/* <h3>Total Cost: ${totalCost}</h3> */}</div>
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
