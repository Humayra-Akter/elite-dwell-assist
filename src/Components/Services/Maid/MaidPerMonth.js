import React, { useEffect, useState } from "react";
import BookingMaid from "./BookingMaid";
import MaidPerMonthCard from "./MaidPerMonthCard";
import Footer from "../../Shared/Footer";
import Cart from "../../Cart/Cart";

const MaidPerMonth = () => {
  const [maids, setMaids] = useState([]);
  const [bookMaid, setBookMaid] = useState([]);

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
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};

export default MaidPerMonth;
