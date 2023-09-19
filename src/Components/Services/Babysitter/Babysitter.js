import React, { useEffect, useState } from "react";
import BabysitterCard from "./BabysitterCard";
import BookingBabysitter from "./BookingBabysitter";

const Babysitter = () => {
  const [babysitters, setBabysitters] = useState([]);
  const [bookBaby, setBookBaby] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        const babysitterData = data.babysitter;
        setBabysitters(babysitterData);
      });
  }, []);

  return (
    <div>
      <h1
        className="text-2xl pt-20 text-center font-black text-purple-950  px-7"
        style={{ fontFamily: "algerian" }}
      >
        Babysitter
      </h1>

      <div className="grid grid-cols-3 gap-5 p-11">
        {babysitters.map((babysitter) => (
          <BabysitterCard
            key={babysitter.baby_sitter_id}
            babysitter={babysitter}
            setBookBaby={setBookBaby}
          ></BabysitterCard>
        ))}
      </div>
      {bookBaby && <BookingBabysitter bookBaby={bookBaby}></BookingBabysitter>}
    </div>
  );
};

export default Babysitter;
