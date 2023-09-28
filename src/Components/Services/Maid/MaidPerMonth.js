import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookingMaid from "./BookingMaid";
import MaidPerMonthCard from "./MaidPerMonthCard";
import Footer from "../../Shared/Footer";

const MaidPerMonth = () => {
  const [maids, setMaids] = useState([]);
  const [bookMaid, setBookMaid] = useState([]);
  const maides = useSelector((state) => state.filteredMaids);

  useEffect(() => {
    fetch("http://localhost:5000/maid") // Make a GET request to your backend API
      .then((res) => res.json())
      .then((data) => {
        setMaids(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error here
      });
  }, []);

  return (
    <div>
      <h1
        className="text-2xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Maid
      </h1>

      <div className="grid grid-cols-3 gap-5 p-11">
        {maids.map((maid) => (
          <MaidPerMonthCard
            key={maid.maid_id}
            maid={maid}
            setBookMaid={setBookMaid}
          ></MaidPerMonthCard>
        ))}
      </div>
      {bookMaid && <BookingMaid bookMaid={bookMaid}></BookingMaid>}
      <Footer></Footer>
    </div>
  );
};

export default MaidPerMonth;
