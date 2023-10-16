import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Footer from "../../Shared/Footer";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const TVBill = () => {
  const [soundProblemCount, setSoundProblemCount] = useState(0);
  const [powerSupplyProblemCount, setPowerSupplyProblemCount] = useState(0);
  const [mountingCount, setMountingCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [user] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isBookButtonDisabled, setIsBookButtonDisabled] = useState(false);
  const [area, setArea] = useState("");
  const itemPrice = 1000;
  const total =
    soundProblemCount * itemPrice +
    powerSupplyProblemCount * itemPrice +
    mountingCount * itemPrice +
    displayCount * itemPrice;

  const userRole = localStorage.getItem("userRole");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleServiceSelect = (service) => {
    const updatedServices = [...selectedServices];

    const serviceIndex = updatedServices.indexOf(service);

    if (serviceIndex !== -1) {
      updatedServices.splice(serviceIndex, 1);
    } else {
      updatedServices.push(service);
    }

    setSelectedServices(updatedServices);
    setIsBookButtonDisabled(updatedServices.length === 0);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const notify = () => {
    if (
      !errors.address &&
      !errors.road &&
      !errors.block &&
      !errors.sector &&
      area &&
      selectedDate &&
      selectedTimeSlot &&
      selectedServices.length > 0
    ) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");

      const servicesText = selectedServices.length
        ? `Services: ${selectedServices.join(", ")}`
        : "";

      toast.success(
        `Thanks for your order! Date: ${formattedDate}, Time Slot: ${selectedTimeSlot}, ${servicesText}`,
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

  const displaySelectedInfo = () => {
    let info = "Selected Date: ";
    if (selectedDate) {
      info += selectedDate.toDateString();
    }
    if (selectedTimeSlot) {
      info += " | Selected Time Slot: " + selectedTimeSlot;
    }

    return info;
  };

  const onSubmit = async (data) => {
    const bookingData = {
      selectedDate,
      selectedTimeSlot,
      selectedServices,
      userName: user?.displayName,
      userEmail: user?.email,
      address: {
        house: data.house,
        road: data.road,
        block: data.block,
        sector: data.sector,
        area,
      },
    };
    console.log(bookingData);
    // try {
    //   await fetch("http://localhost:5000/tvBill", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(bookingData),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       notify();
    //     });
    // } catch (error) {
    //   console.error("Network error:", error.message);
    // }
  };

  return (
    <div>
      <h1
        className="text-3xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Your Home-Our Expertise
      </h1>
      <div className="bg-white p-4 mt-7 mx-96 rounded-lg shadow-md mb-4">
        <p className="text-lg text-center text-black font-semibold">
          {displaySelectedInfo()}
        </p>
      </div>
      <div className="flex pb-32">
        <div className="grid grid-cols-2">
          <div className="ml-10">
            <div className="time-slot-container pt-20">
              <strong className="text-lg mx-5 font-bold text-center text-primary">
                Select a Time Slot :
              </strong>
              <select
                className="input input-bordered input-sm"
                value={selectedTimeSlot}
                onChange={(e) => handleTimeSlotSelect(e.target.value)}
              >
                <option value="">Select</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              <div>
                <h1 className="text-lg font-bold text-primary mx-5 pt-14 text-left">
                  Select a Date
                </h1>
                <div className="calendar-container">
                  <DayPicker
                    selected={selectedDate}
                    onDayClick={handleDateSelect}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div>
              <div className="card w-full bg-transparent border-2 rounded-3xl border-blue-100 text-primary">
                <div className="card-body">
                  <h2 className="card-title">Address</h2>
                  <p>Expert will arrive at the address given below</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {userRole === "customer" && (
                      <div className="form-control grid grid-cols-2 gap-7 pt-5 w-full">
                        <div>
                          <label className="label">
                            <span className="label-text text-blue-700 font-bold text-sm">
                              Name
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Display Name"
                            className="input input-bordered input-sm w-full"
                            value={user?.displayName}
                            disabled
                          />
                        </div>
                        <div>
                          {" "}
                          <label className="label">
                            <span className="label-text text-blue-700 font-bold text-sm">
                              Email
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered input-sm w-full"
                            value={user?.email}
                            disabled
                          />{" "}
                        </div>
                      </div>
                    )}
                    <div className="form-control pt-5 w-full">
                      <label className="label">
                        <span className="label-text text-blue-700 font-bold text-sm">
                          House
                        </span>
                      </label>
                      <input
                        type="text"
                        name="house"
                        placeholder="Your address"
                        className="input input-bordered input-sm w-full"
                        {...register("house", {
                          required: {
                            value: true,
                            message: "House is required",
                          },
                        })}
                      />
                      <label>
                        {errors.house?.type === "required" && (
                          <span className="text-red-500 text-sm mt-1">
                            {errors.house.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="form-control pt-5 w-full">
                        <label className="label">
                          <span className="label-text text-blue-700 font-bold text-sm">
                            Road no
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Road no"
                          name="road"
                          className="input input-bordered input-sm w-full"
                          {...register("road", {
                            required: {
                              value: true,
                              message: "Road no is required",
                            },
                          })}
                        />
                        <label>
                          {errors.road?.type === "required" && (
                            <span className="text-red-500 text-sm mt-1">
                              {errors.road.message}
                            </span>
                          )}
                        </label>
                      </div>
                      <div className="form-control pt-5 w-full">
                        <label className="label">
                          <span className="label-text text-blue-700 font-bold text-sm">
                            Block
                          </span>
                        </label>
                        <input
                          type="text"
                          name="block"
                          placeholder="Block no"
                          className="input input-bordered input-sm w-full"
                          {...register("block", {
                            required: {
                              value: true,
                              message: "Block is required",
                            },
                          })}
                        />
                        <label>
                          {errors.block?.type === "required" && (
                            <span className="text-red-500 text-sm mt-1">
                              {errors.block.message}
                            </span>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="form-control pt-5 w-full">
                        <label className="label">
                          <span className="label-text text-blue-700 font-bold text-sm">
                            Sector
                          </span>
                        </label>
                        <input
                          type="text"
                          name="sector"
                          placeholder="Sector no"
                          className="input input-bordered input-sm w-full"
                          {...register("sector", {
                            required: {
                              value: true,
                              message: "Sector is required",
                            },
                          })}
                        />
                        <label>
                          {errors.sector?.type === "required" && (
                            <span className="text-red-500 text-sm mt-1">
                              {errors.sector.message}
                            </span>
                          )}
                        </label>
                      </div>
                      {/* area field */}
                      <div className="form-control pt-5  w-full">
                        <label className="label">
                          <span className="label-text text-left text-blue-700 font-bold text-sm">
                            Area
                          </span>
                        </label>
                        <div>
                          <select
                            required
                            className=" select input input-sm input-bordered text-left w-full "
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                          >
                            <option disabled value="">
                              Select your Area
                            </option>
                            <option value="mirpur">Mirpur</option>
                            <option value="mohammadpur">Mohammadpur</option>
                            <option value="gulshan">Gulshan</option>
                            <option value="dhanmondi">Dhanmondi</option>
                            <option value="banani">Banani</option>
                            <option value="savar">Savar</option>
                            <option value="motijheel">Motijheel</option>
                            <option value="uttora">Uttora</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="pl-20 pt-9">
                      {userRole === "customer" ? (
                        <input
                          className="btn w-2/3 btn-sm border-blue-500 text-white text-sm font-bold bg-primary"
                          value="BOOK"
                          type="submit"
                          disabled={isBookButtonDisabled}
                        />
                      ) : (
                        <input
                          className="btn w-2/3 btn-sm border-blue-500 text-white text-sm font-bold bg-primary"
                          value="BOOK"
                          type="submit"
                          disabled
                        />
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-28 w-96 text-center text-base">
          {/* tv power supply problem */}
          <div className="absolute top-[180.88px] left-[27.5px] w-[376px] h-[137px]">
            <div className=" box-border w-96 h-36 border-2 border-gray-200" />
            {/* taka icon */}
            <img
              className="absolute top-4 right-4 w-8 h-8 "
              alt=""
              src="/tablercurrencytaka2.svg"
            />
            {/* trash button */}
            <button
              className="cursor-pointer absolute top-20 right-4 w-6 h-6"
              id="cancel_button"
              onClick={() => setPowerSupplyProblemCount(0)}
            >
              <img
                className="absolute h-5 w-5 top-[25%] right-2 max-w-full max-h-full"
                alt=""
                src="/rectangle-41.svg"
              />
            </button>
            {/* 1000 er div */}
            <div className="absolute top-5 right-14 font-bold text-gray-400">
              1000
            </div>
            {/* plus minus segment */}
            <div className="absolute h-8 w-24 bottom-2 left-28 text-sm">
              <button
                className="cursor-pointer absolute top-0 right-16 bottom-0 left-0 rounded-sm shadow-sm border-2"
                id="tv_power_minus"
                onClick={() =>
                  setPowerSupplyProblemCount(
                    Math.max(powerSupplyProblemCount - 1, 0)
                  )
                }
              >
                <span className="text-2xl">-</span>
              </button>

              <div className="absolute h-7 w-full flex items-center justify-center">
                {powerSupplyProblemCount}
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 bottom-0 left-16 rounded-sm shadow-sm border-2"
                id="tv_power_plus"
                onClick={() =>
                  setPowerSupplyProblemCount(powerSupplyProblemCount + 1)
                }
              >
                <span className="text-2xl">+</span>
              </button>
            </div>
            {/* header */}
            <div className="absolute top-4 left-28 text-xl text-left w-44">
              TV Power Supply Problem
            </div>
            {/* image section */}
            <img
              className="absolute top-6 left-5 w-16 h-24"
              alt=""
              src="/image-29@2x.png"
            />
          </div>
          {/* TV Mounting */}
          <div className="absolute top-[333px] left-[27px] w-[376px] h-[137px]">
            <div className=" box-border w-96 h-36 border-2 border-gray-200" />
            {/* taka icon */}
            <img
              className="absolute top-4 right-4 w-8 h-8 "
              alt=""
              src="/tablercurrencytaka2.svg"
            />
            {/* trash button */}
            <button
              className="cursor-pointer absolute top-20 right-4 w-6 h-6"
              id="cancel_button"
              onClick={() => setMountingCount(0)}
            >
              <img
                className="absolute h-5 w-5 top-[25%] right-2 max-w-full max-h-full"
                alt=""
                src="/rectangle-41.svg"
              />
            </button>
            {/* 1000 er div */}
            <div className="absolute top-5 right-14 font-bold text-gray-400">
              1000
            </div>

            {/* plus minus segment */}
            <div className="absolute h-8 w-24 bottom-2 left-28 text-sm">
              <button
                className="cursor-pointer absolute top-0 right-16 bottom-0 left-0 rounded-sm shadow-sm border-2"
                id="tv_mounting_minus"
                onClick={() => setMountingCount(Math.max(mountingCount - 1, 0))}
              >
                <span className="text-2xl">-</span>
              </button>

              <div className="absolute h-7 w-full flex items-center justify-center">
                {mountingCount}
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 bottom-0 left-16 rounded-sm shadow-sm border-2"
                id="tv_mounting_plus"
                onClick={() => setMountingCount(mountingCount + 1)}
              >
                <span className="text-2xl">+</span>
              </button>
            </div>

            {/* header */}
            <div className="absolute top-4 left-28 text-xl text-left">
              TV Mounting
            </div>
            {/* image section */}
            <img
              className="absolute top-6 left-5 w-16 h-24"
              alt=""
              src="/rectangle-4245@2x.png"
            />
          </div>
          {/* TV Sound Problem */}
          <div className="absolute top-[29px] left-[27px] w-[376px] h-[137px]">
            <div className=" box-border w-96 h-36 border-2 border-gray-200" />
            {/* taka icon */}
            <img
              className="absolute top-4 right-4 w-8 h-8 "
              alt=""
              src="/tablercurrencytaka2.svg"
            />
            {/* trash button */}
            <button
              className="cursor-pointer absolute top-20 right-4 w-6 h-6"
              id="cancel_button"
              onClick={() => setSoundProblemCount(0)}
            >
              <img
                className="absolute h-5 w-5 top-[25%] right-2 max-w-full max-h-full"
                alt=""
                src="/rectangle-41.svg"
              />
            </button>
            {/* 1000 er div */}
            <div className="absolute top-5 right-14 font-bold text-gray-400">
              1000
            </div>

            {/* plus minus segment */}
            <div className="absolute h-8 w-24 bottom-2 left-28 text-sm">
              <button
                className="cursor-pointer absolute top-0 right-16 bottom-0 left-0 rounded-sm shadow-sm border-2"
                id="tv_sound_minus"
                onClick={() =>
                  setSoundProblemCount(Math.max(soundProblemCount - 1, 0))
                }
              >
                <span className="text-2xl">-</span>
              </button>

              <div className="absolute h-7 w-full flex items-center justify-center">
                {soundProblemCount}
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 bottom-0 left-16 rounded-sm shadow-sm border-2"
                id="tv_sound_plus"
                onClick={() => setSoundProblemCount(soundProblemCount + 1)}
              >
                <span className="text-2xl">+</span>
              </button>
            </div>
            {/* header */}
            <div className="absolute top-4 left-28 w-40 text-xl text-left">
              TV Sound Problem
            </div>
            {/* image section */}
            <img
              className="absolute top-6 left-5 w-16 h-24"
              alt=""
              src="/image-28@2x.png"
            />
          </div>
          <img
            className="absolute top-[calc(50%_-_358px)] right-[373px] w-[45px] h-[42px]"
            alt=""
            src="/setting-fill.svg"
          />
          {/* tv display */}
          <div className="absolute top-[485px] left-[27px] w-[376px] h-[137px]">
            <div className=" box-border w-96 h-36 border-2 border-gray-200" />
            {/* taka icon */}
            <img
              className="absolute top-4 right-4 w-8 h-8 "
              alt=""
              src="/tablercurrencytaka2.svg"
            />
            {/* trash button */}
            <button
              className="cursor-pointer absolute top-20 right-4 w-6 h-6"
              id="cancel_button"
              onClick={() => setDisplayCount(0)}
            >
              <img
                className="absolute h-5 w-5 top-[25%] right-2 max-w-full max-h-full"
                alt=""
                src="/rectangle-41.svg"
              />
            </button>
            {/* 1000 er div */}
            <div className="absolute top-5 right-14 font-bold text-gray-400">
              1000
            </div>
            {/* plus minus segment */}
            <div className="absolute h-8 w-24 bottom-2 left-28 text-sm">
              <button
                className="cursor-pointer absolute top-0 right-16 bottom-0 left-0 rounded-sm shadow-sm border-2"
                id="tv_display_minus"
                onClick={() => setDisplayCount(Math.max(displayCount - 1, 0))}
              >
                <span className="text-2xl">-</span>
              </button>

              <div className="absolute h-7 w-full flex items-center justify-center">
                {displayCount}
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 bottom-0 left-16 rounded-sm shadow-sm border-2"
                id="tv_display_plus"
                onClick={() => setDisplayCount(displayCount + 1)}
              >
                <span className="text-2xl">+</span>
              </button>
            </div>
            {/* header */}
            <div className="absolute top-4 left-28 w-40 text-xl text-left">
              TV Display
            </div>
            {/* image section */}
            <img
              className="absolute top-6 left-5 w-16 h-24"
              alt=""
              src="/rectangle-4246@2x.png"
            />
          </div>
          {/* total */}
          <div className="absolute top-[630.88px] left-[31.5px] w-[347px] py-[13px] text-left text-lg text-black">
            <div className="flex flex-row items-start justify-start">
              <div className="flex-1 relative h-[26px]">
                <div className="font-semibold">Total</div>
                <div className="absolute top-[calc(50%_-_13px)] right-[0px] font-semibold text-right">
                  {total}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[643.88px] left-[384.5px] text-lg font-semibold text-right">
            tk
          </div>
          <div className="text-left ml-8 pb-7 text-xl font-medium">
            Services
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TVBill;
