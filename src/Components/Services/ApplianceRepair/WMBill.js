import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Footer from "../../Shared/Footer";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const WMBill = () => {
  const [soundProblemCount, setSoundProblemCount] = useState(0);
  const [powerSupplyProblemCount, setPowerSupplyProblemCount] = useState(0);
  const [mountingCount, setMountingCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  const itemPrice = 1000;
  const total =
    soundProblemCount * itemPrice +
    powerSupplyProblemCount * itemPrice +
    mountingCount * itemPrice +
    displayCount * itemPrice;
  const [user] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isBookButtonDisabled, setIsBookButtonDisabled] = useState(false);
  const [area, setArea] = useState("");
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
      console.log("Selected Date:", formattedDate);
      console.log("Selected Time Slot:", selectedTimeSlot);
      console.log("Selected Services:", selectedServices);

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

    try {
      await fetch("http://localhost:5000/perDayMaidBookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })
        .then((res) => res.json())
        .then((result) => {
          notify();
        });
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };

  const divStyle = {
    marginLeft: "100px", // Adjust the left margin as needed
    marginRight: "20px", // Adjust the right margin as needed
  };
  const divStyle1 = {
    marginLeft: "70px", // Adjust the left margin as needed
    marginRight: "5px", // Adjust the right margin as needed
  };

  return (
    <div>
      {userRole === "customer" ? (
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
          <div className="flex">
            <div className="ml-12" style={divStyle}>
              {/* <div className="flex"> */}
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
                {/* </div> */}
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
            {/* <div> */}
            <div className="ml-12">
              {/* </div> */}
              <div>
                <div className="mx-10 pt-6">
                  <div>
                    <div className="card w-full bg-transparent border-4 rounded-3xl border-blue-200 text-blue-800">
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
                                  <option value="mohammadpur">
                                    Mohammadpur
                                  </option>
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
                            <input
                              className="btn w-2/3 btn-sm border-blue-500 text-white text-sm font-bold bg-primary"
                              value="BOOK"
                              type="submit"
                              disabled={isBookButtonDisabled}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute top-[calc(100%_-_424.5px)] left-[calc(55%_+_194.5px)] w-[441px] h-[690px] text-center text-base"
              id="items"
            >
              <div className="absolute top-[180.88px] left-[27.5px] w-[376px] h-[137px]">
                <div className="absolute top-[0px] left-[0px] bg-white box-border w-[376px] h-[137px] border-[1px] border-solid border-gray1-200" />
                <img
                  className="absolute top-[16px] left-[326px] w-[31px] h-8 overflow-hidden"
                  alt=""
                  src="/tablercurrencytaka2.svg"
                />
                <button
                  className="cursor-pointer p-0 bg-[transparent] absolute top-[80px] left-[333px] box-border w-6 h-6 border-[1px] border-solid border-white"
                  id="cancel_button"
                  onClick={() => setPowerSupplyProblemCount(0)}
                >
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[54.17%] bottom-[33.33%] left-[37.5%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[37.5%] bottom-[33.33%] left-[54.17%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className="absolute h-[62.5%] w-[79.17%] top-[25%] right-[8.33%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-41.svg"
                  />
                  <div className="absolute h-[12.5%] w-3/12 top-[8.33%] right-[20.83%] bottom-[79.17%] left-[54.17%] rounded-[50%] box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[2px] border-solid border-line-icon" />
                </button>
                <div className="absolute top-[22px] left-[285px] leading-[20px] font-semibold [-webkit-text-stroke:1px_#fff]">
                  1000
                </div>
                <img
                  className="absolute top-[42px] left-[114px] w-6 h-6"
                  alt=""
                  src="/jump-time-duotone-line.svg"
                />
                <div className="absolute h-[21.17%] w-[23.67%] top-[63.5%] right-[46.81%] bottom-[15.33%] left-[29.52%] shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] text-xs text-dark-dark-3 font-regular-12">
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[67.48%] bottom-[0%] left-[0%] rounded-10xs shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_power_minus"
                    onClick={() =>
                      setPowerSupplyProblemCount(
                        Math.max(powerSupplyProblemCount - 1, 0)
                      )
                    }
                  />
                  <div className="absolute h-[51.72%] w-full top-[24.14%] left-[0%] leading-[20px] flex items-center justify-center">
                    {powerSupplyProblemCount}
                  </div>
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[0%] bottom-[0%] left-[67.48%] rounded-10xs box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_power_plus"
                    onClick={() =>
                      setPowerSupplyProblemCount(powerSupplyProblemCount + 1)
                    }
                  />
                  <img
                    className="absolute h-[30.36%] w-[9.87%] top-[34.95%] right-[11.28%] bottom-[34.69%] left-[78.85%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-1470.svg"
                  />
                  <img
                    className="absolute h-[3.45%] w-[9.76%] top-[48.28%] right-[78.86%] bottom-[48.28%] left-[11.38%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-7-copy-62.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_46.5px)] left-[calc(50%_-_81px)] text-xl font-actor text-left inline-block w-[166px] h-[19px]">
                  Washing Machine Servicing
                </div>
                <img
                  className="absolute top-[23px] left-[18px] w-[71px] h-[94px] object-cover"
                  alt=""
                  src="/WM3.jfif"
                />
              </div>

              <div className="absolute top-[333px] left-[27px] w-[376px] h-[137px]">
                <div className="absolute top-[0px] left-[0px] bg-white box-border w-[376px] h-[137px] border-[1px] border-solid border-gray1-200" />
                <img
                  className="absolute top-[16px] left-[326px] w-[31px] h-8 overflow-hidden"
                  alt=""
                  src="/tablercurrencytaka3.svg"
                />
                <button
                  className="cursor-pointer p-0 bg-[transparent] absolute top-[80px] left-[333px] box-border w-6 h-6 border-[1px] border-solid border-white"
                  id="cancel_button"
                  onClick={() => setMountingCount(0)}
                >
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[54.17%] bottom-[33.33%] left-[37.5%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[37.5%] bottom-[33.33%] left-[54.17%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute h-[62.5%] w-[79.17%] top-[25%] right-[8.33%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-411.svg"
                  />
                  <div className="absolute h-[12.5%] w-3/12 top-[8.33%] right-[20.83%] bottom-[79.17%] left-[54.17%] rounded-[50%] box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[2px] border-solid border-line-icon" />
                </button>
                <div className="absolute top-[22px] left-[285px] leading-[20px] font-semibold [-webkit-text-stroke:1px_#fff]">
                  1000
                </div>
                <div className="absolute h-[21.17%] w-[23.67%] top-[62.04%] right-[46.81%] bottom-[16.79%] left-[29.52%] shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] text-xs text-dark-dark-3 font-regular-12">
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[67.48%] bottom-[0%] left-[0%] rounded-10xs shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_mounting_minus"
                    onClick={() =>
                      setMountingCount(Math.max(mountingCount - 1, 0))
                    }
                  />
                  <div className="absolute h-[51.72%] w-full top-[24.14%] left-[0%] leading-[20px] flex items-center justify-center">
                    {mountingCount}
                  </div>
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[0%] bottom-[0%] left-[67.48%] rounded-10xs box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_mounting_plus"
                    onClick={() => setMountingCount(mountingCount + 1)}
                  />
                  <img
                    className="absolute h-[30.36%] w-[9.87%] top-[34.95%] right-[11.28%] bottom-[34.69%] left-[78.85%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-14701.svg"
                  />
                  <img
                    className="absolute h-[3.45%] w-[9.76%] top-[48.28%] right-[78.86%] bottom-[48.28%] left-[11.38%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-7-copy-63.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_46.5px)] left-[calc(50%_-_81px)] text-xl font-actor text-left inline-block w-[166px] h-[19px]">
                  Washing Machine Installation
                </div>
                <img
                  className="absolute top-[calc(50%_-_49.5px)] left-[calc(50%_-_167px)] w-[70px] h-[93px] object-cover"
                  alt=""
                  src="/WM1.jpg"
                />
              </div>
              <div className="absolute top-[29px] left-[27px] w-[376px] h-[137px]">
                <div className="absolute top-[0px] left-[0px] bg-white box-border w-[376px] h-[137px] border-[1px] border-solid border-gray1-200" />
                <img
                  className="absolute top-[16px] left-[326px] w-[31px] h-8 overflow-hidden"
                  alt=""
                  src="/tablercurrencytaka3.svg"
                />
                <button
                  className="cursor-pointer p-0 bg-[transparent] absolute top-[80px] left-[333px] box-border w-6 h-6 border-[1px] border-solid border-white"
                  id="cancel_button"
                  onClick={() => setSoundProblemCount(0)}
                >
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[54.17%] bottom-[33.33%] left-[37.5%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[37.5%] bottom-[33.33%] left-[54.17%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute h-[62.5%] w-[79.17%] top-[25%] right-[8.33%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-411.svg"
                  />
                  <div className="absolute h-[12.5%] w-3/12 top-[8.33%] right-[20.83%] bottom-[79.17%] left-[54.17%] rounded-[50%] box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[2px] border-solid border-line-icon" />
                </button>
                <div className="absolute top-[22px] left-[285px] leading-[20px] font-semibold [-webkit-text-stroke:1px_#fff]">
                  1000
                </div>
                <div className="absolute h-[21.17%] w-[23.67%] top-[56.2%] right-[44.95%] bottom-[22.63%] left-[31.38%] shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] text-xs text-dark-dark-3 font-regular-12">
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[67.48%] bottom-[0%] left-[0%] rounded-10xs shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_sound_minus"
                    onClick={() =>
                      setSoundProblemCount(Math.max(soundProblemCount - 1, 0))
                    }
                  />
                  <div className="absolute h-[51.72%] w-full top-[24.14%] left-[0%] leading-[20px] flex items-center justify-center">
                    {soundProblemCount}
                  </div>
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[0%] bottom-[0%] left-[67.48%] rounded-10xs box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_sound_plus"
                    onClick={() => setSoundProblemCount(soundProblemCount + 1)}
                  />
                  <img
                    className="absolute h-[30.36%] w-[9.87%] top-[34.95%] right-[11.28%] bottom-[34.69%] left-[78.85%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-14701.svg"
                  />
                  <img
                    className="absolute h-[3.45%] w-[9.76%] top-[48.28%] right-[78.86%] bottom-[48.28%] left-[11.38%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-7-copy-63.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_46.5px)] left-[calc(50%_-_81px)] text-xl font-actor text-left inline-block w-[166px] h-[19px]">
                  Washing Machine Checking
                </div>
                <img
                  className="absolute top-[23px] left-[19px] w-[71px] h-[93px] object-cover"
                  alt=""
                  src="/WM2.jpg"
                />
              </div>
              <img
                className="absolute top-[calc(50%_-_358px)] right-[373px] w-[45px] h-[42px]"
                alt=""
                src="/setting-fill.svg"
              />
              <div className="absolute top-[485px] left-[27px] w-[376px] h-[137px]"></div>
              <div className="absolute top-[607.88px] left-[31.5px] w-[347px] flex flex-col items-start justify-start py-[13px] px-0 box-border text-left text-lg text-black-900">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative h-[26px]">
                    <div className="absolute top-[-135px] left-[0px] leading-[30px] font-semibold">
                      Total
                    </div>
                    <div className="absolute top-[calc(-462%_-_13px)] right-[0px] leading-[30px] font-semibold text-right">
                      {total}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[487px] left-[384.5px] text-lg leading-[30px] font-semibold text-right">
                tk
              </div>
              <div className="absolute top-[calc(50%_-_344.88px)] left-[calc(50%_-_154.5px)] text-xl leading-[24px] font-medium text-left">
                Services
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <h1
            className="text-3xl pt-12 text-center font-black text-primary  px-7"
            style={{ fontFamily: "arial" }}
          >
            Your Home-Our Expertise
          </h1>
          <p className="text-red-500 text-xs text-center mt-1">
            You do not have permission to access this page. Please login first.
          </p>
          <div className="bg-white p-4 mt-7 mx-96 rounded-lg shadow-md mb-4">
            <p className="text-lg text-center text-black font-semibold">
              {displaySelectedInfo()}
            </p>
          </div>
          <div className="flex">
            <div className="ml-12" style={divStyle}>
              {/* <div className="flex"> */}
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
                {/* </div> */}
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
            {/* <div> */}
            <div className="ml-12">
              {/* </div> */}
              <div>
                <div className="mx-10 pt-6">
                  <div>
                    <div className="card w-full bg-transparent border-4 rounded-3xl border-blue-200 text-blue-800">
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
                                  <option value="mohammadpur">
                                    Mohammadpur
                                  </option>
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
                            <input
                              className="btn w-2/3 btn-sm border-blue-500 text-white text-sm font-bold bg-primary"
                              value="BOOK"
                              type="submit"
                              disabled
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute top-[calc(100%_-_424.5px)] left-[calc(55%_+_194.5px)] w-[441px] h-[690px] text-center text-base"
              id="items"
            >
              <div className="absolute top-[180.88px] left-[27.5px] w-[376px] h-[137px]">
                <div className="absolute top-[0px] left-[0px] bg-white box-border w-[376px] h-[137px] border-[1px] border-solid border-gray1-200" />
                <img
                  className="absolute top-[16px] left-[326px] w-[31px] h-8 overflow-hidden"
                  alt=""
                  src="/tablercurrencytaka2.svg"
                />
                <button
                  className="cursor-pointer p-0 bg-[transparent] absolute top-[80px] left-[333px] box-border w-6 h-6 border-[1px] border-solid border-white"
                  id="cancel_button"
                  onClick={() => setPowerSupplyProblemCount(0)}
                >
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[54.17%] bottom-[33.33%] left-[37.5%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[37.5%] bottom-[33.33%] left-[54.17%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className="absolute h-[62.5%] w-[79.17%] top-[25%] right-[8.33%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-41.svg"
                  />
                  <div className="absolute h-[12.5%] w-3/12 top-[8.33%] right-[20.83%] bottom-[79.17%] left-[54.17%] rounded-[50%] box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[2px] border-solid border-line-icon" />
                </button>
                <div className="absolute top-[22px] left-[285px] leading-[20px] font-semibold [-webkit-text-stroke:1px_#fff]">
                  1000
                </div>
                <img
                  className="absolute top-[42px] left-[114px] w-6 h-6"
                  alt=""
                  src="/jump-time-duotone-line.svg"
                />
                <div className="absolute h-[21.17%] w-[23.67%] top-[63.5%] right-[46.81%] bottom-[15.33%] left-[29.52%] shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] text-xs text-dark-dark-3 font-regular-12">
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[67.48%] bottom-[0%] left-[0%] rounded-10xs shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_power_minus"
                    onClick={() =>
                      setPowerSupplyProblemCount(
                        Math.max(powerSupplyProblemCount - 1, 0)
                      )
                    }
                  />
                  <div className="absolute h-[51.72%] w-full top-[24.14%] left-[0%] leading-[20px] flex items-center justify-center">
                    {powerSupplyProblemCount}
                  </div>
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[0%] bottom-[0%] left-[67.48%] rounded-10xs box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_power_plus"
                    onClick={() =>
                      setPowerSupplyProblemCount(powerSupplyProblemCount + 1)
                    }
                  />
                  <img
                    className="absolute h-[30.36%] w-[9.87%] top-[34.95%] right-[11.28%] bottom-[34.69%] left-[78.85%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-1470.svg"
                  />
                  <img
                    className="absolute h-[3.45%] w-[9.76%] top-[48.28%] right-[78.86%] bottom-[48.28%] left-[11.38%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-7-copy-62.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_46.5px)] left-[calc(50%_-_81px)] text-xl font-actor text-left inline-block w-[166px] h-[19px]">
                  Washing Machine Servicing
                </div>
                <img
                  className="absolute top-[23px] left-[18px] w-[71px] h-[94px] object-cover"
                  alt=""
                  src="/WM3.jfif"
                />
              </div>
              <div className="absolute top-[333px] left-[27px] w-[376px] h-[137px]">
                <div className="absolute top-[0px] left-[0px] bg-white box-border w-[376px] h-[137px] border-[1px] border-solid border-gray1-200" />
                <img
                  className="absolute top-[16px] left-[326px] w-[31px] h-8 overflow-hidden"
                  alt=""
                  src="/tablercurrencytaka3.svg"
                />
                <button
                  className="cursor-pointer p-0 bg-[transparent] absolute top-[80px] left-[333px] box-border w-6 h-6 border-[1px] border-solid border-white"
                  id="cancel_button"
                  onClick={() => setMountingCount(0)}
                >
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[54.17%] bottom-[33.33%] left-[37.5%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[37.5%] bottom-[33.33%] left-[54.17%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute h-[62.5%] w-[79.17%] top-[25%] right-[8.33%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-411.svg"
                  />
                  <div className="absolute h-[12.5%] w-3/12 top-[8.33%] right-[20.83%] bottom-[79.17%] left-[54.17%] rounded-[50%] box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[2px] border-solid border-line-icon" />
                </button>
                <div className="absolute top-[22px] left-[285px] leading-[20px] font-semibold [-webkit-text-stroke:1px_#fff]">
                  1000
                </div>
                <div className="absolute h-[21.17%] w-[23.67%] top-[62.04%] right-[46.81%] bottom-[16.79%] left-[29.52%] shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] text-xs text-dark-dark-3 font-regular-12">
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[67.48%] bottom-[0%] left-[0%] rounded-10xs shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_mounting_minus"
                    onClick={() =>
                      setMountingCount(Math.max(mountingCount - 1, 0))
                    }
                  />
                  <div className="absolute h-[51.72%] w-full top-[24.14%] left-[0%] leading-[20px] flex items-center justify-center">
                    {mountingCount}
                  </div>
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[0%] bottom-[0%] left-[67.48%] rounded-10xs box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_mounting_plus"
                    onClick={() => setMountingCount(mountingCount + 1)}
                  />
                  <img
                    className="absolute h-[30.36%] w-[9.87%] top-[34.95%] right-[11.28%] bottom-[34.69%] left-[78.85%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-14701.svg"
                  />
                  <img
                    className="absolute h-[3.45%] w-[9.76%] top-[48.28%] right-[78.86%] bottom-[48.28%] left-[11.38%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-7-copy-63.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_46.5px)] left-[calc(50%_-_81px)] text-xl font-actor text-left inline-block w-[166px] h-[19px]">
                  Washing Machine Installation
                </div>
                <img
                  className="absolute top-[calc(50%_-_49.5px)] left-[calc(50%_-_167px)] w-[70px] h-[93px] object-cover"
                  alt=""
                  src="/WM1.jpg"
                />
              </div>
              <div className="absolute top-[29px] left-[27px] w-[376px] h-[137px]">
                <div className="absolute top-[0px] left-[0px] bg-white box-border w-[376px] h-[137px] border-[1px] border-solid border-gray1-200" />
                <img
                  className="absolute top-[16px] left-[326px] w-[31px] h-8 overflow-hidden"
                  alt=""
                  src="/tablercurrencytaka3.svg"
                />
                <button
                  className="cursor-pointer p-0 bg-[transparent] absolute top-[80px] left-[333px] box-border w-6 h-6 border-[1px] border-solid border-white"
                  id="cancel_button"
                  onClick={() => setSoundProblemCount(0)}
                >
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[54.17%] bottom-[33.33%] left-[37.5%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute h-[20.83%] w-[8.33%] top-[45.83%] right-[37.5%] bottom-[33.33%] left-[54.17%] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="absolute h-[62.5%] w-[79.17%] top-[25%] right-[8.33%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-411.svg"
                  />
                  <div className="absolute h-[12.5%] w-3/12 top-[8.33%] right-[20.83%] bottom-[79.17%] left-[54.17%] rounded-[50%] box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[2px] border-solid border-line-icon" />
                </button>
                <div className="absolute top-[22px] left-[285px] leading-[20px] font-semibold [-webkit-text-stroke:1px_#fff]">
                  1000
                </div>
                <div className="absolute h-[21.17%] w-[23.67%] top-[56.2%] right-[44.95%] bottom-[22.63%] left-[31.38%] shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] text-xs text-dark-dark-3 font-regular-12">
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[67.48%] bottom-[0%] left-[0%] rounded-10xs shadow-[0px_2px_40px_rgba(133,_133,_133,_0.08)] box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_sound_minus"
                    onClick={() =>
                      setSoundProblemCount(Math.max(soundProblemCount - 1, 0))
                    }
                  />
                  <div className="absolute h-[51.72%] w-full top-[24.14%] left-[0%] leading-[20px] flex items-center justify-center">
                    {soundProblemCount}
                  </div>
                  <button
                    className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[0%] bottom-[0%] left-[67.48%] rounded-10xs box-border border-[1px] border-solid border-dark-dark-1"
                    id="tv_sound_plus"
                    onClick={() => setSoundProblemCount(soundProblemCount + 1)}
                  />
                  <img
                    className="absolute h-[30.36%] w-[9.87%] top-[34.95%] right-[11.28%] bottom-[34.69%] left-[78.85%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-14701.svg"
                  />
                  <img
                    className="absolute h-[3.45%] w-[9.76%] top-[48.28%] right-[78.86%] bottom-[48.28%] left-[11.38%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-7-copy-63.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_46.5px)] left-[calc(50%_-_81px)] text-xl font-actor text-left inline-block w-[166px] h-[19px]">
                  Washing Machine Checking
                </div>
                <img
                  className="absolute top-[23px] left-[19px] w-[71px] h-[93px] object-cover"
                  alt=""
                  src="/WM2.jpg"
                />
              </div>
              <img
                className="absolute top-[calc(50%_-_358px)] right-[373px] w-[45px] h-[42px]"
                alt=""
                src="/setting-fill.svg"
              />
              <div className="absolute top-[607.88px] left-[31.5px] w-[347px] flex flex-col items-start justify-start py-[13px] px-0 box-border text-left text-lg text-black-900">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative h-[26px]">
                    <div className="absolute top-[-135px] left-[0px] leading-[30px] font-semibold">
                      Total
                    </div>
                    <div className="absolute top-[calc(-462%_-_13px)] right-[0px] leading-[30px] font-semibold text-right">
                      {total}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[487px] left-[384.5px] text-lg leading-[30px] font-semibold text-right">
                tk
              </div>
              <div className="absolute top-[calc(50%_-_344.88px)] left-[calc(50%_-_154.5px)] text-xl leading-[24px] font-medium text-left">
                Services
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default WMBill;
