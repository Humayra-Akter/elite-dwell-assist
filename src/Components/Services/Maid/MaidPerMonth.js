import React, { useEffect, useState } from "react";
import BookingMaid from "./BookingMaid";
import MaidPerMonthCard from "./MaidPerMonthCard";
import Footer from "../../Shared/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ScrollToTop from "../../Shared/ScrollToTop";

const MaidPerMonth = ({
  selectedLocation,
  selectedTask,
  selectedAvailability,
}) => {
  const [maids, setMaids] = useState([]);
  const [bookMaid, setBookMaid] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        setMaids(data);
      });
  }, []);

  const userRole = localStorage.getItem("userRole");

  const filteredMaids = maids.filter((maid) => {
    const includesLocation =
      !selectedLocation ||
      maid.location?.includes(selectedLocation.toLowerCase());
    const includesTask =
      !selectedTask || maid.skills?.includes(selectedTask.toLowerCase());
    const includesAvailability =
      !selectedAvailability ||
      maid.availability?.includes(selectedAvailability.toLowerCase());

    return includesLocation && includesTask && includesAvailability;
  });

  return (
    <div>
      <h1
        className="text-3xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Your Home's Best Friend
      </h1>
      {/* General Maids */}
      <div>
        {userRole !== "customer" && (
          <p className="text-red-500 text-xs text-center mt-1">
            You do not have permission to access this page.
          </p>
        )}
        <ScrollToTop />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-11">
          {filteredMaids.map((maid) => (
            <MaidPerMonthCard
              key={maid.id}
              maid={maid}
              setBookMaid={setBookMaid}
              user={user}
            ></MaidPerMonthCard>
          ))}
        </div>
      </div>
      {/* <div className="divider"></div> */}
      {/* <div className="grid grid-cols-3 gap-5 p-11">
        {maids.map((maid) => (
          <MaidPerMonthCard
            key={maid.id}
            maid={maid}
            setBookMaid={setBookMaid}
            user={user}
          ></MaidPerMonthCard>
        ))}
      </div> */}
      {userRole === "customer" ? (
        bookMaid && <BookingMaid bookMaid={bookMaid}></BookingMaid>
      ) : (
        <div></div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default MaidPerMonth;
