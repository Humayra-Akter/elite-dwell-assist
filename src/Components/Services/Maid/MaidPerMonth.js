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
  const [customer, setCustomer] = useState([]);

  // useEffect(() => {
  //   socket.on("notification", (data) => {
  //     dispatch(addNotification(data));
  //   });
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [dispatch]);

  useEffect(() => {
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // Assuming you have retrieved the user's role from the backend
          const userRole = data[0].role;
          if (userRole === "maid") {
            setMaids(data); // Set the user as a customer
            localStorage.setItem("userRole", userRole);
          }
        } else {
          console.log("No user data found.");
        }
      });
  }, []);

  useEffect(() => {
    // Check if the user is a customer
    fetch("http://localhost:5000/customer")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // Assuming you have retrieved the user's role from the backend
          const userRole = data[0].role;
          if (userRole === "customer") {
            setCustomer(user); // Set the user as a customer
            localStorage.setItem("userRole", userRole);
          }
        } else {
          console.log("No user data found.");
        }
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
        Maid
      </h1>

      {/* General Maids */}
      {userRole !== "customer" ? (
        <div>
          <p className="text-red-500 text-xs text-center mt-1">
            You do not have permission to access this page.
          </p>
        </div>
      ) : (
        <div>
          {/* {maids.map((maid) => (
            <MaidPerMonthCard
              key={maid.id}
              maid={maid}
              setBookMaid={setBookMaid}
              user={user}
            ></MaidPerMonthCard>
          ))} */}
        </div>
      )}

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
