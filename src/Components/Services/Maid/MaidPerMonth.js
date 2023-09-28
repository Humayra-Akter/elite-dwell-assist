import React, { useEffect, useState } from "react";
import BookingMaid from "./BookingMaid";
import MaidPerMonthCard from "./MaidPerMonthCard";
import Footer from "../../Shared/Footer";
import Cart from "../../Cart/Cart";
import { useSelector } from "react-redux";

const MaidPerMonth = () => {
  const [maids, setMaids] = useState([]);
  const [bookMaid, setBookMaid] = useState([]);
  const selectedLocation = useSelector((state) => state.location.location); // Get the selected location from Redux

  useEffect(() => {
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        setMaids(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredMaids = maids.filter((maid) => {
    if (selectedLocation === "All") {
      return true; // Show all maids when "All" is selected
    } else {
      return maid.location === selectedLocation;
    }
  });

  return (
    <div>
      <h1
        className="text-2xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Maid
      </h1>
      <div className="grid grid-cols-3 gap-5 p-11">
        {filteredMaids.map((maid) => (
          <MaidPerMonthCard
            key={maid.id}
            maid={maid}
            setBookMaid={setBookMaid}
          ></MaidPerMonthCard>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 p-11">
        {maids.map((maid) => (
          <MaidPerMonthCard
            key={maid.id}
            maid={maid}
            setBookMaid={setBookMaid}
          ></MaidPerMonthCard>
        ))}
      </div>
      {bookMaid && <BookingMaid bookMaid={bookMaid}></BookingMaid>}
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};

export default MaidPerMonth;
