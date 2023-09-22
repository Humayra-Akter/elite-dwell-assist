import React, { useEffect, useState } from "react";
import BookingMaid from "./BookingMaid";
import MaidPerMonthCard from "./MaidPerMonthCard";

const MaidPerMonth = () => {
  const [maids, setMaids] = useState([]);
  const [bookMaid, setBookMaid] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        const maidData = data.maid;
        setMaids(maidData);
      });
  }, []);

  return (
    <div>
      <h1
        className="text-2xl pt-20 text-center font-black text-purple-950  px-7"
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
    </div>
  );
};

export default MaidPerMonth;
