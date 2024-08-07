import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import DriverRow from "./DriverRow";

const DriverBookings = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://elite-dwell-assist-server.onrender.com/customer?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const matchingUser = data.find(
              (userData) => userData?.email === user?.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
            }
          }
        });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://elite-dwell-assist-server.onrender.com/driverBookings?customerEmail=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
        })
        .catch((error) => {
          console.error("Error fetching customer bookings:", error);
        });
    }
  }, [user]);

  const filteredBookings = bookings.filter(
    (booking) => booking.customerEmail === user.email
  );
  console.log(filteredBookings);

  return (
    <div>
      <h2 className="text-3xl text-primary font-bold">
        My Bookings for Car-Driver
      </h2>
      {filteredBookings.length === 0 ? (
        <p className="text-red-600 pt-7">
          You have not made any booking till now.
        </p>
      ) : (
        <table className="border-collapse w-full mt-12">
          <thead>
            <tr>
              <th className="text-center text-primary underline w-1/6">
                Driver Name
              </th>
              <th className="text-center text-primary underline w-1/6">
                Driver Email
              </th>
              <th className="text-center text-primary underline w-1/6">
                Created Time
              </th>
              <th className="text-center text-primary underline w-1/4">
                Review
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking, index) => (
              <DriverRow
                key={booking._id}
                booking={booking}
                userEmail={user.email}
                index={index}
                driverEmail={booking.driverEmail}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DriverBookings;
