/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import "react-day-picker/dist/style.css";
import "react-datepicker/dist/react-datepicker.css";
import PerDayCalender from './PerDayCalender';
import { Link } from 'react-router-dom';
import "../images/confirmation.jpg"
import "../images/footerr.jpeg"
import "../images/gotodashboard.jpeg"



const TvBill = () => {

  const [soundProblemCount, setSoundProblemCount] = useState(0);
  const [powerSupplyProblemCount, setPowerSupplyProblemCount] = useState(0);
  const [mountingCount, setMountingCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  const itemPrice = 1000;
  const total = (
    soundProblemCount * itemPrice +
    powerSupplyProblemCount * itemPrice +
    mountingCount * itemPrice +
    displayCount * itemPrice
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isBookButtonDisabled, setIsBookButtonDisabled] = useState(true);
  const [selectedTimeSlot, setselectedTimeSlot] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

    const [houseNo, setHouseNo] = useState('');
    const [sectorNo, setSectorNo] = useState('');
    const [roadNo, setRoadNo] = useState('');
    const [blockNo, setBlockNo] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    // Create functions to handle input changes and update state
      const handleHouseNoChange = (e) => {
        setHouseNo(e.target.value);
        };

    const handleSectorNoChange = (e) => {
        setSectorNo(e.target.value);
        };

    const handleRoadNoChange = (e) => {
        setRoadNo(e.target.value);
        };

    const handleBlockNoChange = (e) => {
        setBlockNo(e.target.value);
        };

    const handlePhoneNoChange = (e) => {
        setPhoneNo(e.target.value);
        };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleOptionTime = (event) => {
    setselectedTimeSlot(event.target.value);
  };

  const handleOptionLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  const displaySelectedInfo = () => {
    let info = "Selected Date: ";
    if (selectedDate) {
      info += selectedDate.toDateString();
    }

    if (selectedServices.length > 0) {
      info += " | Selected Services: " + selectedServices.join(", ");
    }

    if (selectedTimeSlot) {
      info += " | Time Slot: " + selectedTimeSlot;
    }

    return info;
  };

  const handleSubmit = (event) => {
    console.log('House no: ',houseNo)
    console.log('Sector no: ',sectorNo)
    console.log('Road no: ',roadNo)
    console.log('Block no: ',blockNo)
    console.log('Phone no: ',phoneNo)
  };

  


  return (
    <div className="relative bg-white w-full h-[1563px] overflow-hidden text-left text-xl text-black font-hanken-grotesk">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-textcolor-200 h-[80px]" />
      <div className="absolute w-full top-[calc(50%_-_781.5px)] right-[0px] left-[0px] h-[133px] text-white">
        <img
          className="absolute top-[8px] left-[52px] rounded-131xl w-[80px] h-[70px] object-cover"
          alt=""
          src="/image-231@2x.png"
        />
        <div className="absolute top-[30px] right-[50px] w-[315px] h-[26px] overflow-hidden">
          <a
            className="text-white font-black hover:text-black pr-7"
            id="home"
          >
            Home
          </a>
          <a
            className="text-white font-black hover:text-black pr-7"
            id="about us"
          >
            About Us
          </a>
          <a
            className="text-white font-black hover:text-black pr-7"
            id="Services"
          >
            Services
          </a>
        
        </div>
      </div>
      <div className="absolute top-[350px] left-[calc(50%_-_595.5px)] w-[431.62px] h-[92.86px] text-lg font-poppins">
        <div className="absolute top-[53.53px] left-[calc(50%_-_158.26px)] font-light inline-block w-[374.07px] h-[39.33px]">
          Expert will arrive at your given address within 2:00 PM
        </div>
        <img
          className="absolute top-[0px] left-[calc(50%_-_215.81px)] w-[52.09px] h-[53.53px]"
          alt=""
          src="/clock-fill1.svg"
        />
        <div className="absolute top-[5.54px] left-[calc(50%_-_157.81px)] text-6xl inline-block w-[123.62px] h-[41.52px]">
          Schedule
        </div>
      </div>
      <div className="absolute top-[176px] left-[calc(50%_-_142.5px)] text-[64px] tracking-[-1px] leading-[58px] font-medium text-black-900 text-center inline-block w-[297px] h-[66px]">
        Checkout
      </div>
      <div>
      <div className="absolute top-[calc(50%_-_126.5px)] left-[calc(50%_-_595.5px)] w-[675.84px] h-[481.55px] text-sm font-regular-12">
        <Link to="/Confirmation">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_+_172.04px)] left-[calc(50%_+_107.22px)] w-[216.79px] h-[68.74px]"
            id="proceed"
            onClick={handleSubmit}
          >
            <div className="absolute top-[calc(50%_-_34.37px)] left-[calc(50%_-_108.4px)] rounded-8xs bg-mediumslateblue-200 w-[216.79px] h-[68.74px]" />
            <div className="absolute top-[calc(50%_-_10.18px)] left-[calc(50%_-_32.54px)] text-xl font-roboto text-white text-left inline-block w-[76px] h-[22px]">
              Proceed
            </div>
          </button>
        </Link>
        <div className="absolute top-[calc(50%_-_118.47px)] left-[calc(50%_-_325.21px)] w-[297.13px] h-[72.31px]">
          <div className="absolute top-[calc(50%_-_36.15px)] left-[calc(50%_-_139.64px)] inline-block w-[87.99px] h-[25.44px]">
            House No.*
          </div>
          <input
            className="bg-[transparent] absolute top-[calc(50%_-_6.7px)] left-[calc(50%_-_148.57px)] rounded-lg box-border w-[297.13px] h-[42.85px] border-[1px] border-solid border-lightgray"
            name="house_no_input"
            type="text"
            value={houseNo}
            onChange={handleHouseNoChange}
            required
          />
        </div>
        <div className="absolute top-[calc(50%_-_19.47px)] left-[calc(50%_+_40.79px)] w-[297.13px] h-[81.18px]">
          <div className="absolute top-[calc(50%_-_40.59px)] left-[calc(50%_-_139.64px)] inline-block w-[86.72px] h-[28.56px]">
            Sector No.*
          </div>
          <input
            className="bg-[transparent] absolute top-[calc(50%_-_7.52px)] left-[calc(50%_-_148.57px)] rounded-lg box-border w-[297.13px] h-[48.1px] border-[1px] border-solid border-lightgray"
            name="sector_no_input"
            type="text"
            value={sectorNo}
            onChange={handleSectorNoChange} required
          />
        </div>
        <div className="absolute top-[calc(50%_-_118.47px)] left-[calc(50%_+_40.79px)] w-[297.13px] h-[72.31px]">
          <div className="absolute top-[calc(50%_-_36.15px)] left-[calc(50%_-_139.64px)] inline-block w-[76.52px] h-[25.44px]">
            Road No.*
          </div>
          <input
            className="bg-[transparent] absolute top-[calc(50%_-_6.7px)] left-[calc(50%_-_148.57px)] rounded-lg box-border w-[297.13px] h-[42.85px] border-[1px] border-solid border-lightgray"
            name="road_no_input"
            type="text"
            value={roadNo}
            onChange={handleRoadNoChange} required
          />
        </div>
        <div className="absolute top-[calc(50%_-_24.47px)] left-[calc(50%_-_325.21px)] w-[297.13px] h-[81.17px]">
          <div className="absolute top-[calc(50%_-_40.59px)] left-[calc(50%_-_139.64px)] inline-block w-[79.07px] h-[28.56px]">
            Block No.*
          </div>
          <input
            className="bg-[transparent] absolute top-[calc(50%_-_7.52px)] left-[calc(50%_-_148.57px)] rounded-lg box-border w-[297.13px] h-[48.1px] border-[1px] border-solid border-lightgray"
            name="block_no_input"
            type="text"
            value={blockNo}
            onChange={handleBlockNoChange} required
          />
        </div>
        <img
          className="absolute top-[calc(50%_-_240.78px)] left-[calc(50%_-_337.92px)] w-[61.67px] h-[55.11px]"
          alt=""
          src="/shop1.svg"
        />
        <div className="absolute top-[calc(50%_-_230.47px)] left-[calc(50%_-_272.88px)] text-5xl font-semibold font-poppins inline-block w-[128.8px] h-[41.24px]">
          Address.*
        </div>
        <div className="absolute top-[calc(50%_-_188.08px)] left-[calc(50%_-_272.88px)] text-lg font-light font-poppins inline-block w-[496.07px] h-[30.93px]">
          Expert will arrive at the address given below
        </div>
        <div className="absolute top-[calc(50%_+_74.53px)] left-[calc(50%_-_325.21px)] w-[297.13px] h-[83.54px]">
          <div className="absolute top-[calc(50%_-_41.77px)] left-[calc(50%_-_139.64px)] inline-block w-[79.07px] h-[29.4px]">
            Phone no.*
          </div>
          <input
            className="bg-[transparent] absolute top-[calc(50%_-_7.74px)] left-[calc(50%_-_148.57px)] rounded-lg box-border w-[297.13px] h-[49.51px] border-[1px] border-solid border-lightgray"
            name="phone_no_input"
            type="text"
            value={phoneNo}
            onChange={handlePhoneNoChange} required
          />
        </div>
      </div>
      </div>
      <div
        className="absolute top-[calc(50%_-_424.5px)] left-[calc(50%_+_194.5px)] w-[441px] h-[690px] text-center text-base"
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
              onClick={() => setPowerSupplyProblemCount(Math.max(powerSupplyProblemCount - 1, 0))}
            />
            <div className="absolute h-[51.72%] w-full top-[24.14%] left-[0%] leading-[20px] flex items-center justify-center">
              {powerSupplyProblemCount}
            </div>
            <button
              className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[0%] bottom-[0%] left-[67.48%] rounded-10xs box-border border-[1px] border-solid border-dark-dark-1"
              id="tv_power_plus"
              onClick={() => setPowerSupplyProblemCount(powerSupplyProblemCount + 1)}
            />
            { <img
              className="absolute h-[30.36%] w-[9.87%] top-[34.95%] right-[11.28%] bottom-[34.69%] left-[78.85%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-1470.svg"
            /> }
            { <img
              className="absolute h-[3.45%] w-[9.76%] top-[48.28%] right-[78.86%] bottom-[48.28%] left-[11.38%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-7-copy-63.svg"
            /> }
          </div>
          <div className="absolute top-[calc(50%_-_46.5px)] left-[calc(50%_-_81px)] text-xl font-actor text-left inline-block w-[166px] h-[19px]">
            TV Power Supply Problem
          </div>
          <img
            className="absolute top-[23px] left-[18px] w-[71px] h-[94px] object-cover"
            alt=""
            src="/image-29@2x.png"
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
              onClick={() => setMountingCount(Math.max(mountingCount - 1, 0))}
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
          <div className="absolute top-[calc(50%_-_49.5px)] left-[calc(50%_-_77px)] text-xl font-actor text-left inline-block w-[122.22px] h-[19.05px]">
            TV Mounting
          </div>
          <img
            className="absolute top-[calc(50%_-_49.5px)] left-[calc(50%_-_167px)] w-[70px] h-[93px] object-cover"
            alt=""
            src="/rectangle-4245@2x.png"
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
              onClick={() => setSoundProblemCount(Math.max(soundProblemCount - 1, 0))}
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
          <div className="absolute top-[calc(50%_-_45.5px)] left-[calc(50%_-_86px)] text-xl font-actor text-left inline-block w-[172.88px] h-[19.05px]">
            TV Sound Problem
          </div>
          <img
            className="absolute top-[23px] left-[19px] w-[71px] h-[93px] object-cover"
            alt=""
            src="/image-28@2x.png"
          />
        </div>
        <img
          className="absolute top-[calc(50%_-_358px)] right-[373px] w-[45px] h-[42px]"
          alt=""
          src="/setting-fill.svg"
        />
        <div className="absolute top-[485px] left-[27px] w-[376px] h-[137px]">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[376px] h-[137px] border-[1px] border-solid border-gray1-200" />
          <img
            className="absolute top-[16px] left-[326px] w-[31px] h-8 overflow-hidden"
            alt=""
            src="/tablercurrencytaka3.svg"
          />
          <button
            className="cursor-pointer p-0 bg-[transparent] absolute top-[80px] left-[333px] box-border w-6 h-6 border-[1px] border-solid border-white"
            id="cancel_button"
            onClick={() => setDisplayCount(0)}
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
              id="tv_display_minus"
              onClick={() => setDisplayCount(Math.max(displayCount - 1, 0))}
            />
            <div className="absolute h-[51.72%] w-full top-[24.14%] left-[0%] leading-[20px] flex items-center justify-center">
              {displayCount}
            </div>
            <button
              className="cursor-pointer p-0 bg-[transparent] absolute h-full w-[32.52%] top-[0%] right-[0%] bottom-[0%] left-[67.48%] rounded-10xs box-border border-[1px] border-solid border-dark-dark-1"
              id="tv_display_plus"
              onClick={() => setDisplayCount(displayCount + 1)}
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
          <img
            className="absolute top-[calc(50%_-_46.5px)] left-[calc(50%_-_162px)] w-[70px] h-[93px] object-cover"
            alt=""
            src="/rectangle-4246@2x.png"
          />
          <div className="absolute top-[calc(50%_-_43.5px)] left-[calc(50%_-_70px)] text-xl font-actor text-left inline-block w-[99.1px] h-[19.05px]">
            TV Display
          </div>
        </div>
        <div className="absolute top-[607.88px] left-[31.5px] w-[347px] flex flex-col items-start justify-start py-[13px] px-0 box-border text-left text-lg text-black-900">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative h-[26px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-semibold">
                Total
              </div>
              <div className="absolute top-[calc(50%_-_13px)] right-[0px] leading-[30px] font-semibold text-right">{total}</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[619.88px] left-[384.5px] text-lg leading-[30px] font-semibold text-right">
          tk
        </div>
        <div className="absolute top-[calc(50%_-_344.88px)] left-[calc(50%_-_154.5px)] text-xl leading-[24px] font-medium text-left">
          Services
        </div>
      </div>
      <div className="absolute top-[380px] left-[calc(50%_-_203.5px)] font-regular font-regular-12 text-gray1-100">
      <div>
          <PerDayCalender
            selectedDate={selectedDate}
            setSelectedDate={handleDateSelect}
          />
        </div>
      </div>
      <div className="absolute top-[365px] left-[calc(50%_-_88.5px)] font-semibol font-regular-12 text-gray1-100">
        Select Date
      </div>
      <img
        className="absolute top-[354px] left-[calc(50%_-_129.5px)] w-[34px] h-[41px]"
        alt=""
        src="/date-range.svg"
      />
      <div className="absolute w-[calc(100%_+_1px)] right-[-1px] bottom-[0px] left-[0px] h-[354px] text-23xl text-mediumslateblue-100 font-poppins">
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-aliceblue-100 h-[354px]" />
        <div className="absolute w-[calc(100%_-_1051.32px)] right-[950.32px] bottom-[19px] left-[101px] h-[316px]">
          <div className="absolute w-[calc(100%_-_239.68px)] right-[237.95px] bottom-[0px] left-[1.73px] h-[79px]">
            <b className="absolute w-[calc(100%_-_32px)] bottom-[34px] left-[0px] tracking-[0.01em] leading-[60px] inline-block h-[45px]">
              500+
            </b>
            <div className="absolute w-[calc(100%_-_4px)] bottom-[0px] left-[4px] text-base tracking-[0.01em] leading-[24px] text-black inline-block h-[25px]">
              Happy Customer
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_254.32px)] right-[44.59px] bottom-[3.76px] left-[209.73px] h-[75.24px]">
            <b className="absolute w-[calc(100%_-_59.36px)] bottom-[21.24px] left-[0px] tracking-[0.01em] leading-[60px] inline-block h-[54px]">
              16+
            </b>
            <div className="absolute w-full bottom-[0px] left-[0px] text-base tracking-[0.01em] leading-[24px] text-black inline-block h-[21.24px]">
              Total Service
            </div>
          </div>
          <div className="absolute w-full right-[0px] bottom-[139.89px] left-[0px] h-[176.11px] text-sm text-gray1-100">
            <div className="absolute w-[calc(100%_-_7.56px)] bottom-[0px] left-[1.89px] tracking-[0.4px] leading-[24.5px] font-light inline-block h-[86.73px]">
              <p className="m-0">
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general ipsum.
              </p>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum.
              </p>
            </div>
            <div className="absolute w-full bottom-[103.54px] left-[0px] text-15xl tracking-[0.4px] leading-[43px] font-semibold inline-block h-[72.57px] text-darkslategray-200">
              <p className="m-0">Let us Support with</p>
              <p className="m-0 text-mediumslateblue-100">
                <span>OUR SERVICES</span>
                <span className="text-darkslategray-200">.</span>
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[calc(100%_-_680.71px)] right-[0px] bottom-[0px] left-[680.71px] max-w-full overflow-hidden h-[354px] object-cover"
          alt=""
          src="/group-23@2x.png"
        />
      </div>
      <div className="absolute top-[269px] left-[calc(50%_-_193.5px)] text-lg leading-[30px] text-center font-semibold inline-block w-[459px] text-textcolor-100">
      {displaySelectedInfo()}
      </div>
      <div>
      <select
        className="absolute top-[482px] left-[calc(50%_-_537.5px)] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[181px] h-[39px] overflow-hidden"
        id="available_time_slot"
        value={selectedTimeSlot}
        onChange={handleOptionTime}
      >
        <option value="" disabled selected>
          Available Time
        </option>
        <option value="Morning">Morning</option>
        <option value="Noon">Noon</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
      </div>
      <select
        className="absolute top-[calc(50%_+_295.5px)] left-[calc(50%_-_582.5px)] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[199px] h-[37px] overflow-hidden"
        id="select_location_slot"
        value={selectedLocation}
        onChange={handleOptionLocation}
      >
        <option value="" disabled selected>
          Select your location
        </option>
        <option value="Mirpur">Mirpur</option>
        <option value="Uttara">Uttara</option>
        <option value="Dhanmondi">Dhanmondi</option>
        <option value="Gulshan">Gulshan</option>
        <option value="Savar">Savar</option>
        <option value="Mohammadpur">Mohammadpur</option>
        <option value="Banani">Banani</option>
        <option value="Motijheel">Motijheel</option>
      </select>
      <p>Selected location: {selectedLocation}</p>
    </div>
  );
};

export default TvBill;


