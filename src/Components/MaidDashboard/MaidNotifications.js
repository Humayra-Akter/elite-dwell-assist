import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MaidNotifications = () => {
  const [user, loading, error] = useAuthState(auth);
  const [notifications, setNotifications] = useState([]);
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
      const loggedInMaidEmail = user?.email;
      console.log(loggedInMaidEmail);
      if (bookingId) {
        const loggedInMaidEmail = user?.email;
      }
      console.log(loggedInMaidEmail);
      fetch(`http://localhost:5000/bookings/${loggedInMaidEmail}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Data:", data);
          if (Array.isArray(data) && data.length > 0) {
            setNotifications(data);
            toast.success(
              `Notifications for ${user?.displayName} from ${data[0]?.customerEmail}`
            );
          } else {
            toast.warning(`No notifications for ${user?.displayName}`);
          }
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    }
  }, [user]);

  // Function to clear a specific notification by ID
  const clearNotification = (notificationId) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification._id !== notificationId
    );
    setNotifications(updatedNotifications);
    toast.success("Notification cleared successfully");
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
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div key={notification._id} className="my-4">
            <div className="card w-2/3 my-4 border-2 shadow-xl transform transition-transform hover:scale-95 hover:bg-gradient-to-t from-blue-100 to-blue-50 hover:shadow-lg">
              <div className="card-body">
                <h2 className="text-md font-bold">
                  Booking Notifications for you:
                  <span className="text-lg text-blue-900 font-bold">
                    {user?.displayName}
                  </span>
                </h2>
                <h2 className="text-md font-bold">
                  Customer Email:{" "}
                  <span className="text-lg text-blue-900 font-bold">
                    {notification.customerEmail}
                  </span>
                </h2>
                <button
                  onClick={() => clearNotification(notification._id)}
                  className="btn btn-sm rounded-full absolute w-1/5 top-0 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-red-600"
                >
                  Clear Notifications
                </button>
                <button className="btn btn-sm rounded-full absolute w-1/5 top-11 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-green-600">
                  Send Confirmation
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No notifications found for {user?.displayName}</p>
      )}
    </div>
  );
};

export default MaidNotifications;
