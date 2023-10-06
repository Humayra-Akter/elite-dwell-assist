import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MaidNotifications = () => {
  const [user, loading, error] = useAuthState(auth);

  const [notifications, setNotifications] = useState([]);
  const [loggedInMaidEmail, setLoggedInMaidEmail] = useState("");
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          setBookingId(item._id);
        });
      });
  }, []);

  useEffect(() => {
    if (user) {
      if (bookingId) {
        setLoggedInMaidEmail(`${user?.displayName}`);
      }
      console.log(bookingId);
      fetch(`http://localhost:5000/bookings/${bookingId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Data:", data);
          if (data && typeof data === "object") {
            if (data.maidName === user.displayName) {
              setNotifications([data]);
              toast.success(
                `Notifications for ${user?.displayName} from ${data?.customerEmail}`
              );
            } else {
              toast.warning(`No notifications for ${user?.displayName}`);
            }
          } else {
            console.error(
              "Data received from the server is not an object:",
              data
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    }
  }, [user]);

  const clearNotifications = () => {
    alert("you want to clear notification?");
    setNotifications([]);
    toast.success("Notifications cleared successfully");
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    toast.error("Authentication error:", error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        {notifications.map((notification) => (
          <div key={notification._id}>
            <div className="card w-full border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-blue-200 to-blue-50 hover:shadow-lg">
              <div class="card-body">
                <h2 class="text-lg text-blue-900 font-bold">
                  Booking Notifications for you: {user?.displayName}
                </h2>
                <h2 class="text-lg text-blue-900 font-bold">
                  Customer Email: {notification.customerEmail}
                </h2>
                <button
                  onClick={clearNotifications}
                  className="btn btn-sm rounded-full absolute w-1/6 top-0 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-red-600   "
                >
                  Clear Notifications
                </button>
                <button className="btn btn-sm rounded-full absolute w-1/6 top-11 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-green-600   ">
                  Send Confirmation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaidNotifications;
