import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MaidRow from "./MaidRow";

const MaidBookings = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const availabilityOptions = {
    sokal: "08.00 AM - 11.00 AM",
    dupur: "11.00 AM - 02.00 PM",
    bikal: "02.00 PM - 05.00 PM",
    raat: "05.00 PM - 08.00 PM",
  };

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/bookings?customerEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
        })
        .catch((error) => {
          console.error("Error fetching customer bookings:", error);
        });
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-3xl text-primary font-bold">My Bookings</h2>
      <table className="border-collapse w-full mt-12">
        <thead>
          <tr>
            <th className="text-left text-primary underline w-1/6">
              Maid Name
            </th>
            <th className="text-left text-primary underline w-1/6">
              Maid Email
            </th>
            <th className="text-left text-primary underline w-1/6">
              Maid Availability
            </th>
            <th className="text-left text-primary underline w-1/6">
              Created Time
            </th>
            <th className="text-left text-primary underline w-1/8">Delete</th>
            <th className="text-left text-primary underline w-1/4">Review</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <MaidRow
              key={booking._id}
              booking={booking}
              maidId={booking._id}
              userEmail={user.email}
              availabilityOptions={availabilityOptions}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaidBookings;
