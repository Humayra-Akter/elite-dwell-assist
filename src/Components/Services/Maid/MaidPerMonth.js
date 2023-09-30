import React, { useEffect, useState } from "react";
import BookingMaid from "./BookingMaid";
import MaidPerMonthCard from "./MaidPerMonthCard";
import Footer from "../../Shared/Footer";
import Cart from "../../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../Login/RequireAuth";

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

  const taskSalaryFilters = useSelector(
    (state) => state.search.taskSalaryFilters
  );
  const timeSlotFilters = useSelector((state) => state.search.timeSlotFilters);

  const filterMaidsBySalary = (maid) => {
    // Filter maids by salary as before
  };
  const filterMaidsByTimeSlot = (maid) => {
    // Check if any selected time slots match the maid's availability
    for (const timeSlot in timeSlotFilters) {
      if (timeSlotFilters[timeSlot] && maid.availability.includes(timeSlot)) {
        return true;
      }
    }
    return false;
  };

  const filteredMaids = maids.filter(
    (maid) => filterMaidsBySalary(maid) && filterMaidsByTimeSlot(maid)
  );

  return (
    <div>
      <h1
        className="text-2xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Maid
      </h1>
      {filteredMaids.map((maid) => (
        <MaidPerMonthCard
          key={maid.id}
          maid={maid}
          setBookMaid={setBookMaid}
        ></MaidPerMonthCard>
      ))}
      {/* General Maids */}
      <div className="grid grid-cols-3 gap-5 p-11">
        {maids.map((maid) => (
          <MaidPerMonthCard
            key={maid.id}
            maid={maid}
            setBookMaid={setBookMaid}
          ></MaidPerMonthCard>
        ))}
      </div>

      <RequireAuth>
        {bookMaid && <BookingMaid bookMaid={bookMaid}></BookingMaid>}
      </RequireAuth>

      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};

export default MaidPerMonth;
