import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const CustomerNotification = () => {
  const [user, loading, error] = useAuthState(auth);
  const [maidNotifications, setMaidNotifications] = useState([]);
  const [driverNotifications, setDriverNotifications] = useState([]);
  const [babysitterNotifications, setBabysitterNotifications] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [bookingDriverId, setBookingDriverId] = useState("");
  const [bookingBabysitterId, setBookingBabysitterId] = useState("");
  const [selectedMaids, setSelectedMaids] = useState({});
  const [selectedDrivers, setSelectedDrivers] = useState({});
  const [selectedBabysitters, setSelectedBabysitters] = useState({});

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
    fetch("http://localhost:5000/customerBookingByDriver")
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          setBookingDriverId(item._id);
        });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/customerBookingByBabysitter")
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          setBookingBabysitterId(item._id);
        });
      });
  }, []);

  console.log(bookingId, bookingDriverId, bookingBabysitterId);

  useEffect(() => {
    if (user) {
      const loggedInMaidEmail = user?.email;
      fetch(`http://localhost:5000/customerBooked/${loggedInMaidEmail}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setMaidNotifications(data);
            // toast.success(
            //   `Notifications for ${user?.displayName} from ${user?.email}`
            // );
          } else {
            toast.warning(`No notifications for ${user?.displayName}`);
          }
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const loggedInMaidEmail = user?.email;
      fetch(
        `http://localhost:5000/customerBookingByDriver/${loggedInMaidEmail}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setDriverNotifications(data);
            // toast.success(
            //   `Notifications for ${user?.displayName} from ${user?.email}`
            // );
          } else {
            toast.warning(`No notifications for ${user?.displayName}`);
          }
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const loggedInMaidEmail = user?.email;
      fetch(
        `http://localhost:5000/customerBookingByBabysitter/${loggedInMaidEmail}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setBabysitterNotifications(data);
            // toast.success(
            //   `Notifications for ${user?.displayName} from ${user?.email}`
            // );
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

  const fetchDriverDetails = (driverEmail, notificationId) => {
    fetch(`http://localhost:5000/driver/${driverEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedDrivers((prevSelectedDrivers) => ({
          ...prevSelectedDrivers,
          [notificationId]: data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching driver details:", error);
      });
  };

  const fetchBabysitterDetails = (babysitterEmail, notificationId) => {
    fetch(`http://localhost:5000/babysitter/${babysitterEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedBabysitters((prevSelectedBabysitters) => ({
          ...prevSelectedBabysitters,
          [notificationId]: data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching babysitter details:", error);
      });
  };

  const clearNotification = (notificationId, bookingFrom) => {
    let updatedNotifications;
    if (bookingFrom === "Maid") {
      updatedNotifications = maidNotifications.filter(
        (notification) => notification._id !== notificationId
      );
      setMaidNotifications(updatedNotifications);
    } else if (bookingFrom === "Driver") {
      updatedNotifications = driverNotifications.filter(
        (notification) => notification._id !== notificationId
      );
      setDriverNotifications(updatedNotifications);
    } else if (bookingFrom === "Babysitter") {
      updatedNotifications = babysitterNotifications.filter(
        (notification) => notification._id !== notificationId
      );
      setBabysitterNotifications(updatedNotifications);
    }

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
      {maidNotifications.length > 0 ||
      driverNotifications.length > 0 ||
      babysitterNotifications.length > 0 ? (
        // Display notifications from all types
        [
          ...maidNotifications,
          ...driverNotifications,
          ...babysitterNotifications,
        ].map((notification) => (
          <div key={notification._id} className="my-4">
            <div className="card w-full my-4 border-2 shadow-xl transform transition-transform hover:scale-95 hover:bg-gradient-to-t from-blue-100 to-blue-50 hover:shadow-lg">
              <div className="card-body">
                <h2 className="text-md font-bold">
                  Interested person:
                  <span className="text-lg text-blue-900 font-bold">
                    {notification?.maidName ||
                      notification?.driverName ||
                      notification?.babysitterName}
                  </span>
                </h2>

                {selectedMaids[notification._id] && (
                  <div className="maid-details">
                    <h2 className="text-md font-bold text-primary mb-3">
                      {notification?.bookingFrom} Details:
                    </h2>{" "}
                    <p className="text-sm pb-1 text-blue-900 font-bold">
                      <span className="underline">Address:</span>{" "}
                      {selectedMaids[notification._id].address}
                    </p>
                    <p className="text-sm pb-1 text-blue-900 font-bold">
                      <span className="underline">Email:</span>
                      {selectedMaids[notification._id].email}
                    </p>
                    <p className="text-sm pb-1 text-blue-900 font-bold">
                      <span className="underline">Contact:</span>
                      {selectedMaids[notification._id].contact}
                    </p>
                  </div>
                )}

                <button
                  onClick={() =>
                    clearNotification(
                      notification._id,
                      notification.bookingFrom
                    )
                  }
                  className="btn btn-sm rounded-full absolute w-1/8 top-0 right-5 my-7 text-xs border-blue-500 text-white font-bold bg-red-600"
                >
                  Clear Notification
                </button>

                <button
                  onClick={() => {
                    if (notification?.bookingFrom === "Maid") {
                      fetchMaidDetails(
                        notification?.maidEmail,
                        notification._id
                      );
                    } else if (notification?.bookingFrom === "Driver") {
                      fetchDriverDetails(
                        notification?.driverEmail,
                        notification._id
                      );
                    } else if (notification?.bookingFrom === "Babysitter") {
                      fetchBabysitterDetails(
                        notification?.babysitterEmail,
                        notification._id
                      );
                    } else {
                      console.error("Invalid notification type");
                    }
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
