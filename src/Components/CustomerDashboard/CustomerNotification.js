import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const CustomerNotification = () => {
  const [user, loading, error] = useAuthState(auth);
  const [notifications, setNotifications] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [selectedMaids, setSelectedMaids] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/customerBooked")
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
      fetch(`http://localhost:5000/customerBooked/${loggedInMaidEmail}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setNotifications(data);
            toast.success(
              `Notifications for ${user?.displayName} from ${user?.email}`
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

  const fetchMaidDetails = (maidEmail, notificationId) => {
    fetch(`http://localhost:5000/maid/${maidEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedMaids((prevSelectedMaids) => ({
          ...prevSelectedMaids,
          [notificationId]: data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching maid details:", error);
      });
  };

  const clearNotification = (notificationId) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification._id !== notificationId
    );
    setNotifications(updatedNotifications);
    toast.success("Notification cleared successfully");
  };

  const acceptRequest = (notificationId, maidEmail) => {
    console.log("accepted", notificationId, maidEmail);

    fetch(`/accept-request/${notificationId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ maidEmail }),
    })
      .then((response) => {
        if (response.ok) {
          const updatedNotifications = notifications.filter(
            (notification) => notification._id !== notificationId
          );
          setNotifications(updatedNotifications);
        } else {
          console.error("Failed to accept the request");
        }
      })
      .catch((error) => {
        console.error("Error accepting the request:", error);
      });
  };

  console.log(selectedMaids);

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
            <div className="card w-full my-4 border-2 shadow-xl transform transition-transform hover:scale-95 hover:bg-gradient-to-t from-blue-100 to-blue-50 hover:shadow-lg">
              <div className="card-body">
                <h2 className="text-md font-bold">
                  Interested person:
                  <span className="text-lg text-blue-900 font-bold">
                    {notification?.maidName}
                  </span>
                </h2>

                {selectedMaids[notification._id] && (
                  <div className="maid-details">
                    <h2 className="text-md font-bold text-primary mb-3">
                      Maid Details:
                    </h2>{" "}
                    <p className="text-sm pb-1 text-blue-900 font-bold">
                      <span className="underline">Name:</span>{" "}
                      {selectedMaids[notification._id].name}
                    </p>
                    <p className="text-sm pb-1 text-blue-900 font-bold">
                      <span className="underline">Email:</span>
                      {selectedMaids[notification._id].email}
                    </p>
                    <p className="text-sm pb-1 text-blue-900 font-bold">
                      <span className="underline">Contact:</span>
                      {selectedMaids[notification._id].contact}
                    </p>
                    {/* Display other maid details as needed */}
                  </div>
                )}

                <button
                  onClick={() => clearNotification(notification._id)}
                  className="btn btn-sm rounded-full absolute w-1/8 top-0 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-red-600"
                >
                  Clear Notification
                </button>

                <button
                  onClick={() => {
                    fetchMaidDetails(notification.maidEmail, notification._id);
                  }}
                  className="btn btn-sm rounded-full absolute w-1/8 top-0 right-48 my-7 text-xs border-blue-500 text-white font-bold bg-green-600"
                >
                  View Details
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

export default CustomerNotification;
