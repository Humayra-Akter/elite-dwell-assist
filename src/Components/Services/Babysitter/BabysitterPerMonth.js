import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Footer from "../../Shared/Footer";
import ScrollToTop from "../../Shared/ScrollToTop";
import BabysitterCard from "./BabysitterCard";
import BookingBabysitter from "./BookingBabysitter";

const BabysitterPerMonth = ({
  selectedLocation,
  selectedAvailability,
  selectedSalary,
}) => {
  const [babysitters, setBabysitters] = useState([]);
  const [bookBabysitter, setBookBabysitter] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("http://localhost:5000/babysitter")
      .then((res) => res.json())
      .then((data) => {
        setBabysitters(data);
      });
  }, []);

  const userRole = localStorage.getItem("userRole");

  console.log(babysitters);
  const filteredBabysitters = babysitters.filter((babysitter) => {
    const includesLocation =
      !selectedLocation ||
      babysitter.location?.includes(selectedLocation.toLowerCase());
    const includesAvailability =
      !selectedAvailability ||
      babysitter.availability?.includes(selectedAvailability.toLowerCase());

    const salaryRange = parseInt(selectedSalary);
    const rangeL = (salaryRange - 1) * 5;
    const rangeR = salaryRange < 7 ? salaryRange * 5 : 999999;
    const includesSalary =
      !salaryRange ||
      (rangeL <= babysitter.expectedSalary &&
        babysitter.expectedSalary <= rangeR);
    return includesLocation && includesSalary && includesAvailability;
  });

  return (
    <div className="pl-12 pr-12">
      <h1
        className="text-3xl pt-10 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Your Child's Best Friend
      </h1>
      {userRole !== "customer" ? (
        <p className="text-red-500 text-xs text-center mt-1">
          You do not have permission to access this page. Please login first.
        </p>
      ) : (
        <></>
      )}

      <div>
        <ScrollToTop />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-11">
          {filteredBabysitters.map((babysitter) => (
            <BabysitterCard
              key={babysitter.id}
              babysitter={babysitter}
              setBookBabysitter={setBookBabysitter}
              user={user}
            ></BabysitterCard>
          ))}
        </div>
      </div>

      {userRole === "customer" ? (
        bookBabysitter && (
          <BookingBabysitter
            bookBabysitter={bookBabysitter}
          ></BookingBabysitter>
        )
      ) : (
        <div></div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default BabysitterPerMonth;
