import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MaidPerDayAddress = ({
  selectedServices,
  selectedDate,
  selectedTimeSlot,
}) => {
  const [house, setHouse] = useState("");
  const [road, setRoad] = useState("");
  const [block, setBlock] = useState("");
  const [sector, setSector] = useState("");
  const [area, setArea] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = () => {
    if (
      !errors.address &&
      !errors.road &&
      !errors.block &&
      !errors.sector &&
      area
    ) {
      const formattedDate = selectedDate.toDateString();
      const formattedTime = selectedTimeSlot;
      const servicesText = selectedServices.length
        ? `Services: ${selectedServices.join(", ")}`
        : "";

      toast.success(
        `Thanks for your order! Date: ${formattedDate}, Time Slot: ${formattedTime}, ${servicesText}`,
        {
          position: toast.POSITION.TOP_CENTER,
          onClose: () => {
            reset();
          },
        }
      );
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  const onSubmit = (data) => {
    notify();
  };

  return (
    <div className="mx-20 pt-12 pb-20">
      <div>
        <div className="card w-full bg-transparent border-4 rounded-3xl border-blue-200 text-blue-800">
          <div className="card-body">
            <h2 className="card-title">Address</h2>
            <p>Expert will arrive at the address given below</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control pt-5 w-full">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-xs">
                    House
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your address"
                  className="input input-bordered input-xs w-full"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                  })}
                />
                <label>
                  {errors.address?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-xs">
                      Road no
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Road no"
                    className="input input-bordered input-xs w-full"
                    {...register("road", {
                      required: {
                        value: true,
                        message: "Road no is required",
                      },
                    })}
                  />
                  <label>
                    {errors.road?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.road.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-xs">
                      Block
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Block no"
                    className="input input-bordered input-xs w-full"
                    {...register("block", {
                      required: {
                        value: true,
                        message: "Block is required",
                      },
                    })}
                  />
                  <label>
                    {errors.block?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.block.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="form-control pt-5 w-full">
                  <label className="label">
                    <span className="label-text text-blue-700 font-bold text-xs">
                      Sector
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Sector no"
                    className="input input-bordered input-xs w-full"
                    {...register("sector", {
                      required: {
                        value: true,
                        message: "Sector is required",
                      },
                    })}
                  />
                  <label>
                    {errors.sector?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.sector.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* area field */}
                <div className="form-control pt-5  w-full">
                  <label className="label">
                    <span className="label-text text-left text-blue-700 font-bold text-xs">
                      Area
                    </span>
                  </label>
                  <div className="input input-bordered text-left w-full ">
                    <select
                      className="select"
                      required
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    >
                      <option disabled value="">
                        Select your Area
                      </option>
                      <option value="mirpur">Mirpur</option>
                      <option value="mohammadpur">Mohammadpur</option>
                      <option value="gulshan">Gulshan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="pl-36 pt-9">
                <input
                  className="btn w-2/3 btn-sm border-blue-500 text-white text-xs font-bold bg-primary"
                  value="BOOK"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidPerDayAddress;
