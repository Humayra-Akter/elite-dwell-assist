import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const DriverNotifications = () => {
  const [user, loading, error] = useAuthState(auth);
  const [notifications, setNotifications] = useState([]);
  const [loggedInDriverEmail, setLoggedInDriverEmail] = useState("");
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/driverbookings")
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          setBookingId(item._id);
        });
      });
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     fetch("http://localhost:5000/bookings")
  //       .then((res) => res.json())
  //       .then((bookingsData) => {
  //         const loggedInMaidName = user.displayName;
  //         const loggedInMaidEmail = user.email;
  //         const filteredNotifications = bookingsData.filter((booking) => {
  //           const isBookingForLoggedInMaid =
  //             booking.maidName === loggedInMaidName ||
  //             booking.customerEmail === loggedInMaidEmail;
  //           return isBookingForLoggedInMaid;
  //         });

  //         // Set notifications state with filtered data
  //         setNotifications(filteredNotifications);

  //         if (filteredNotifications.length > 0) {
  //           toast.success(`Notifications for ${loggedInMaidName}`);
  //         } else {
  //           toast.warning(`No notifications for ${loggedInMaidName}`);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching notifications:", error);
  //       });
  //   }
  // }, [user]);

  useEffect(() => {
    if (user) {
      if (bookingId) {
        const loggedInDriverEmail = user?.email;
      }
      console.log(loggedInDriverEmail);
      fetch(`http://localhost:5000/driverbookings/${loggedInDriverEmail}`)
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
                  onClick={clearNotifications}
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

  // return (
  //   <div>
  //     <div>
  //       {notifications.map((notification) => (
  //         <div key={notification._id}>
  //           <div className="card w-full border-2 shadow-xl transform transition-transform hover:scale-105 hover:bg-gradient-to-t from-blue-200 to-blue-50 hover:shadow-lg">
  //             <div class="card-body">
  //               <h2 class="text-lg text-blue-900 font-bold">
  //                 Booking Notifications for you: {user?.displayName}
  //               </h2>
  //               <h2 class="text-lg text-blue-900 font-bold">
  //                 Customer Email: {notification.customerEmail}
  //               </h2>
  //               <button
  //                 onClick={clearNotifications}
  //                 className="btn btn-sm rounded-full absolute w-1/6 top-0 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-red-600   "
  //               >
  //                 Clear Notifications
  //               </button>
  //               <button className="btn btn-sm rounded-full absolute w-1/6 top-11 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-green-600   ">
  //                 Send Confirmation
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default DriverNotifications;
