import React, { useEffect, useState } from "react";
import BookingMaid from "./BookingMaid";
import MaidPerMonthCard from "./MaidPerMonthCard";
import Footer from "../../Shared/Footer";
import Cart from "../../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
// import io from "socket.io-client";
import { addNotification } from "../../../redux/slices/notificationsSlice";

// const socket = io("http://localhost:5000");

const MaidPerMonth = () => {
  const [maids, setMaids] = useState([]);
  const [bookMaid, setBookMaid] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        setMaids(data);
      });
  }, []);

  const userRole = localStorage.getItem("userRole");
  console.log(userRole);
  return (
    <div>
      <h1
        className="text-2xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Your Home's Best Friend
      </h1>{" "}
      <h1
        className="text-xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        "Your Home, Our Expertise"
      </h1>
      {/* General Maids */}
      {userRole !== "customer" ? (
        <div>
          <p className="text-red-500 text-xs text-center mt-1">
            You do not have permission to access this page.
          </p>
          <div className="grid grid-cols-3 gap-5 p-11">
            {maids.map((maid) => (
              <MaidPerMonthCard
                key={maid.id}
                maid={maid}
                setBookMaid={setBookMaid}
                user={user}
              ></MaidPerMonthCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5 p-11">
          {maids.map((maid) => (
            <MaidPerMonthCard
              key={maid.id}
              maid={maid}
              setBookMaid={setBookMaid}
              user={user}
            ></MaidPerMonthCard>
          ))}
        </div>
      )}
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
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};

export default MaidPerMonth;
