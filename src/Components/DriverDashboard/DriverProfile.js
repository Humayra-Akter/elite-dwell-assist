/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useState, useEffect } from "react";
const DriverProfile = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/driver?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const matchingUser = data.find(
              (userData) => userData.email === user.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
            }
          }
        });
    }
  }, [user]);

  function calculateAge(birthDate) {
    // Parse the birthDate string into a Date object
    const birthDateObject = new Date(birthDate);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years
    const age = currentDate.getFullYear() - birthDateObject.getFullYear();

    // Check if the birthday for this year has occurred or not
    if (
      currentDate.getMonth() < birthDateObject.getMonth() ||
      (currentDate.getMonth() === birthDateObject.getMonth() &&
        currentDate.getDate() < birthDateObject.getDate())
    ) {
      // If the birthday hasn't occurred this year yet, subtract 1 from the age
      return age - 1;
    } else {
      return age;
    }
  }
  const age = calculateAge(loggedUser.dob);
  return (
    <div className=" w-full h-full text-left text-2xl text-darkslategray-100 font-montserrat">
      <div className="absolute top-[100.98px] left-[calc(50%_-_397.33px)] w-[727.46px] h-[159.8px]">
        <div className="absolute top-[70.4px] left-[calc(50%_-_177.07px)] w-[220.09px] h-[27.37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_150.04px)] inline-block w-[220.09px] h-[27.37px]">
            {loggedUser.role}
          </div>
        </div>
        <div className="absolute top-[95.94px] left-[calc(50%_+_182.43px)] w-[181.3px] h-[63.86px] overflow-hidden flex flex-row items-center justify-start">
          <button
            className="cursor-pointer hover:text-black bg-indigo-600 [border:none] py-2 px-0 bg-mediumpurple rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[170px] h-11 overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
            id="edit"
          >
            <Link to="/driverDashboard/driverUpdate">
              <b className="relative text-base leading-[50%] inline-block font-montserrat text-peak-white text-center w-16 h-6 shrink-0">
                Edit
              </b>
            </Link>
          </button>
        </div>
        <img
          className="absolute top-[30.75px] w-[129.12px] h-[123.7px] object-cover"
          id="driver_image"
          alt=""
          src={loggedUser?.img}
        />
      </div>
      <div className="relative w-[1440px] h-[1138px] hidden" />
      <div className="absolute top-[290.09px] left-[calc(50%_-_404.03px)] w-[167.35px] h-[22.88px] text-slateblue">
        <b className="absolute top-[-5px] left-[calc(50%_-_83.68px)] [text-decoration:underline] inline-block w-[167.35px] h-[22.88px]">
          Profile details:
        </b>
      </div>
      <b className="absolute top-[73px] left-[calc(50%_-_400px)] inline-block w-[216px] h-[27px]">
        {loggedUser?.name}
      </b>
      <div className="absolute top-[322px] left-[calc(50%_-_404px)] bg-peak-primary box-border w-[726px] h-[545px] border-[1px] border-solid border-lightgray" />
      <b className="absolute top-[627px] left-[calc(50%_-_395px)] text-[18px] [text-decoration:underline] flex text-slateblue items-center w-[244px] h-[25px]">
        Education Qualifications:
      </b>
      <div className="absolute top-[616.5px] left-[calc(50%_-_404.5px)] box-border w-[727px] h-px border-t-[1px] border-solid border-lightgray" />
      <div className="absolute top-[656px] left-[calc(50%_-_404px)] bg-darkslateblue w-[726px] h-8 text-center text-sm text-peak-primary">
        <div className="absolute top-[9px] left-[66px] w-[100px] h-[17px]">
          <b className="absolute top-[0px] left-[0px] inline-block w-[108px]">
            Education
          </b>
        </div>
        <div className="absolute top-[2px] left-[524px] w-[174px] h-[31px] text-left">
          <b className="absolute top-[7px] left-[0px] inline-block w-[148px]">
            Upload Document
          </b>
        </div>
      </div>
      <div className="absolute top-[694px] left-[calc(50%_-_404px)] w-[726px] h-[47px] overflow-hidden text-center text-sm text-peak-primary">
        <div className="absolute top-[4px] left-[calc(50%_-_366px)] bg-darkslateblue w-[729px] h-[33px]">
          <div className="absolute top-[8px] left-[53px] w-[136px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[136px]">
              {loggedUser?.education}
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[3px] left-[580px] w-[35px] h-[27px] bg-cover bg-no-repeat bg-[top]"
            id="image_edu"
          />
        </div>
      </div>
      <div className="absolute top-[327px] left-[calc(50%_-_399px)] w-[704px] h-[275px] overflow-hidden text-base text-black">
        <div className="absolute top-[128px] left-[77px] inline-block w-[323px] h-[23px]">
          {loggedUser?.gender}
        </div>
        <div className="absolute top-[154px] left-[117px] inline-block w-[323px] h-[23px]">
          {loggedUser?.dob}
        </div>
        <div className="absolute top-[177px] left-[44px] inline-block w-[323px] h-[23px]">
          {age} Years
        </div>
        <div className="absolute top-[202px] left-[169px] inline-block w-[323px] h-[23px]">
          {loggedUser?.license}
        </div>
        <div className="absolute top-[225px] left-[53px] inline-block w-[323px] h-[23px]">
          {loggedUser?.nid}
        </div>
        <div className="absolute top-[249px] left-[70px] inline-block w-[323px] h-[23px]">
          {loggedUser?.salary}
        </div>
        <div className="absolute top-[106px] left-[90px] inline-block w-[323px] h-[23px]">
          {loggedUser?.location}
        </div>
        <div className="absolute top-[79px] left-[4px] font-semibold inline-block w-[97px] h-[17px] text-darkslategray-100">
          <span>Experience</span>
          <span className="text-darkslategray-200">:</span>
        </div>
        <div className="absolute top-[4px] left-[4px] font-semibold text-darkslategray-100 inline-block w-[51px] h-[23px]">
          Email:
        </div>
        <div className="absolute top-[155px] left-[4px] font-semibold text-darkslategray-100 inline-block w-[111px] h-5">
          Date of Birth:
        </div>
        <div className="absolute top-[177px] left-[4px] font-semibold text-darkslategray-100 inline-block w-10 h-5">
          Age:
        </div>
        <div className="absolute top-[201px] left-[3px] font-semibold text-darkslategray-100 inline-block w-40 h-5">
          Driving License No:
        </div>
        <div className="absolute top-[226px] left-[4px] font-semibold text-darkslategray-100 inline-block w-10 h-5">
          NID:
        </div>
        <div className="absolute top-[248px] left-[4px] font-semibold text-darkslategray-100 inline-block w-[58px] h-5">
          Salary:
        </div>
        <div className="absolute top-[31px] left-[4px] font-semibold text-darkslategray-100 inline-block w-[58px] h-[17px]">
          Phone:
        </div>
        <div className="absolute top-[54px] left-[4px] text-darkslategray-200 inline-block w-[75px] h-[17px]">
          <span className="font-semibold">Address:</span>
        </div>
        <div className="absolute top-[106px] left-[4px] font-semibold inline-block w-[79px] h-5 text-darkslategray-100">
          <span>Location</span>
          <span className="text-darkslategray-200">:</span>
        </div>
        <div className="absolute top-[130px] left-[4px] font-semibold text-darkslategray-100 inline-block w-[66px] h-5">
          Gender:
        </div>
        <div className="absolute top-[4px] left-[62px] inline-block w-[323px] h-[23px]">
          {loggedUser?.email}
        </div>
        <div className="absolute top-[31px] left-[70px] inline-block w-[323px] h-[23px]">
          {loggedUser?.phone}
        </div>
        <div className="absolute top-[55px] left-[79px] inline-block w-[323px] h-[23px]">
          {loggedUser?.address}
        </div>
        <div className="absolute top-[80px] left-[106px] inline-block w-[323px] h-[23px]">
          {loggedUser?.experience} Years
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
