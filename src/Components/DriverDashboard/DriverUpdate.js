import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DriverUpdate = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    expectedSalary: "",
    location: "",
    password: "",
    reenterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the server to update the user information
      await axios.post("http://localhost:5000/driver", formData);
      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="rounded-2xl bg-peak-primary w-full h-[1269px] overflow-hidden text-left text-base text-darkslategray-300 font-montserrat">
      <div className="w-[1440px] h-[1138px] hidden" />
      <div className="absolute top-[0px] left-[0px] bg-mediumpurple w-[276px] h-[1269px]" />
      <div className="absolute top-[79px] left-[calc(50%_-_355px)] w-[285.42px] h-[198.3px] text-center text-2xl font-lato">
        <b className="absolute top-[0px] left-[calc(50%_-_142.71px)] leading-[20px] flex items-left justify-center w-[173px]">
          Update Profile
        </b>
        <img
          className="absolute top-[31.74px] left-[calc(50%_-_137.45px)] w-[163px]"
          alt=""
          src="/vector-76.svg"
        />
        <div className="absolute top-[93.7px] left-[3px] w-[282.42px] h-[104.6px] text-left text-xl font-montserrat">
          <img
            className="absolute top-[-8px] left-[-8px] w-[129.53px] h-[128.59px] object-cover"
            id="driver_image"
            alt=""
            src={loggedUser.img}
          />
          <b className="absolute top-[8.3px] left-[calc(50%_-_.02px)] inline-block w-[159.23px]">
            {loggedUser.name}
          </b>
          <div className="absolute top-[40.3px] left-[calc(50%_-_.02px)] inline-block w-[158.22px]">
            {loggedUser.role}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group absolute top-[378px] left-[calc(50%_-_352px)] w-[497px] h-48">
          <b className="absolute top-[0px] left-[calc(50%_-_246.5px)] inline-block w-[121px]">
            Name
          </b>
          <input
            className="bg-peak-primary absolute top-[36px] left-[calc(50%_-_248.5px)] rounded-lg box-border w-[497px] h-[52px] border-[1px] border-solid border-lightgray-100"
            name="name_input"
            placeholder=" e.g. Imran Khan"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <b className="absolute top-[104px] left-[calc(50%_-_248.5px)] inline-block w-[121px]">
            Email Address
          </b>
          <input
            className="bg-peak-primary absolute top-[140px] left-[calc(50%_-_248.5px)] rounded-lg box-border w-[497px] h-[52px] border-[1px] border-solid border-lightgray-100"
            name="email_input"
            placeholder=" e.g. abc@google.com"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form group absolute top-[378px] left-[calc(50%_+_182px)] w-[501.83px] h-[282px] ">
          <b className="absolute top-[112px] left-[calc(50%_-_250.91px)] inline-block w-[181px]">
            Gender
          </b>
          <b className="absolute top-[0px] left-[calc(50%_-_250.91px)] inline-block w-[132.27px]">
            Phone Number
          </b>
          <input
            className="bg-peak-primary absolute top-[36px] left-[calc(50%_-_250.91px)] rounded-lg box-border w-[501.83px] h-[52px] border-[1px] border-solid border-lightgray-100"
            name="phone_input"
            placeholder=" e.g. 01XXXXXXXXX"
            type="text"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="absolute top-[254px] left-[calc(50%_-_221.92px)] w-[28.27px] h-7 overflow-hidden" />
        </div>
        <img
          className="absolute top-[589.5px] right-[240.99px]"
          alt=""
          src="/vector-76.svg"
        />
        <div className="form-group absolute top-[613px] left-[calc(50%_-_350px)] w-[1038px] h-[89px]">
          <div className="absolute top-[1px] left-[calc(50%_-_519px)] w-[495px] h-[88px] ">
            <b className="absolute top-[0px] left-[calc(50%_-_247.5px)] inline-block w-[147.43px]">
              New Password
            </b>
            <input
              className="bg-peak-primary absolute top-[36px] left-[calc(50%_-_245.55px)] rounded-lg box-border w-[493.05px] h-[52px] border-[1px] border-solid border-lightgray-100"
              name="new_pass"
              placeholder=" Enter new password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="absolute top-[0px] left-[calc(50%_+_13px)] w-[506px] h-[88px] ">
            <b className="absolute top-[0px] left-[calc(50%_-_250.96px)] inline-block w-[203.42px]">
              Confirm New Password
            </b>
            <input
              className="bg-peak-primary absolute top-[36px] left-[calc(50%_-_253px)] rounded-lg box-border w-[506px] h-[52px] border-[1px] border-solid border-lightgray-100"
              name="confirm_pass"
              placeholder=" Retype the password"
              type="password"
              value={formData.reenterPassoword}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="cursor-pointer py-2 px-0 bg-peak-primary hover:bg-black absolute top-[868px] left-[calc(50%_+_273px)] rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-44 h-[59px] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-peak-primary"
          id="cancel_button"
          type="reset"
        >
          <b className="relative text-semibold leading-[150%]  font-montserrat text-darkslategray-300 text-center">
            Cancel
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[213px] left-[calc(50%_-_106px)] w-[35px] h-[27px] bg-cover bg-no-repeat bg-[top]"
          id="driver_image_input"
          value={formData.img}
          onChange={handleChange}
        />
        <select
          className="absolute top-[calc(50%_-_160.5px)] left-[calc(50%_+_182px)] bg-peak-primary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[199px] h-[37px] overflow-hidden"
          required={true}
          id="select_gender_slot"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <div className="absolute top-[833px] left-[calc(50%_-_352px)] w-[870px] h-[93px] overflow-hidden">
          <b className="absolute top-[9px] left-[0px] inline-block w-[84px] h-[23px]">
            Location
          </b>
          <select
            className="absolute top-[calc(50%_-_6.5px)] left-[calc(50%_-_435px)] bg-peak-primary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[199px] h-[37px] overflow-hidden"
            id="select_location_slot"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="Mirpur">Mirpur</option>
            <option value="Uttara">Uttara</option>
            <option value="Dhanmondi">Dhanmondi</option>
            <option value="Gulshan">Gulshan</option>
            <option value="Savar">Savar</option>
            <option value="Mohammadpur">Mohammadpur</option>
            <option value="Banani">Banani</option>
            <option value="Motijheel">Motijheel</option>
          </select>
        </div>
        <button
          className="cursor-pointer py-2 px-0 bg-indigo-600 hover:bg-black absolute top-[868px] left-[calc(50%_+_473px)] rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-44 h-[59px] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-peak-primary"
          id="Save_Changes_Button"
          type="submit"
          onChange={handleSubmit}
        >
          <div className="absolute top-[0px] left-[calc(50%_-_88px)] rounded-lg bg-mediumpurple shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-44 h-[59px]" />
          <b className="absolute top-[18px] left-[calc(50%_-_65px)] text-base leading-[150%] inline-block font-montserrat text-white text-center w-[129px]">
            Save Changes
          </b>
        </button>
        <div className="absolute top-[722px] left-[calc(50%_-_369px)] w-[1057px] h-[111px] overflow-hidden">
          <b className="absolute top-[12px] left-[553px] inline-block w-[203px] h-[18px]">
            Expected Salary (Taka)
          </b>
          <b className="absolute top-[16px] left-[17px] inline-block w-[100px] h-7">
            Experience
          </b>
          <select
            className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_507.5px)] bg-peak-primary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[199px] h-[37px] overflow-hidden"
            id=" Select_location_slot"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="1 year">1 year</option>
            <option value="2 years">2 years</option>
            <option value="3 years">3 years</option>
            <option value="4 years">4 years</option>
            <option value="5 years">5 years</option>
            <option value="6 years">6 years</option>
            <option value="7 years">7 years</option>
            <option value="8 years">8 years</option>
            <option value="9 years">9 years</option>
            <option value="10 years">10 years</option>
            <option value="More than 10 years">More than 10 years</option>
          </select>
          <input
            className="bg-peak-primary absolute top-[47px] left-[551px] rounded-lg box-border w-[497px] h-[52px] border-[1px] border-solid border-lightgray-100"
            name="expected_salary"
            placeholder=" enter expected salary"
            type="text"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default DriverUpdate;
