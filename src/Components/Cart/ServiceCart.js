import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../redux/slices/CartSlices";
import { toast } from "react-toastify";

const ServiceCart = ({ id, task, name, qty, img, salary }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex h-44 gap-2 shadow-md bg-gradient-to-t from-primary to-slate-300 rounded-lg p-4 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, task, salary, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-gray-600 hover:text-red-500 cursor-pointer"
      />
      <img className="w-[50px] h-[50px]" src={img} alt="" />

      <div className="leading-5">
        <h2 className="font-black text-black">{name}</h2>
        <div className="flex justify-center items-center gap-2  right-7">
          {task && salary ? (
            <ul>
              {task.map((taskName, index) => (
                <li key={index}>
                  <strong>{taskName}: </strong>
                  {salary[index]}
                </li>
              ))}
            </ul>
          ) : (
            "Salary information not available"
          )}
        </div>
        {/* <div className="flex justify-between ">
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-black hover:bg-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span className="text-white font-bold">{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-black hover:bg-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCart;
