import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CustomerProfile = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/customer?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const matchingUser = data.find(
              (userData) => userData.email === user.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
            }
          }
        });
    }
  }, [user]);

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="text-center">
        <h2 className="text-3xl text-primary font-bold">{loggedUser?.name}</h2>
      </div>

      <hr className="my-4" />

      <div>
        <h3 className="text-2xl text-primary font-semibold">Profile Details</h3>
        <ul className="mt-4">
          <li className="mb-2">
            <span className="text-lg font-medium text-primary">Gender:</span>
            <span className="ml-4 font-bold capitalize">
              {loggedUser?.gender}
            </span>
          </li>
          <li className="mb-2">
            <span className="text-lg font-medium text-primary">
              Date of Birth:
            </span>
            <span className="ml-4 font-bold">{loggedUser?.dob}</span>
          </li>
          <li className="mb-2">
            <span className="text-lg font-medium text-primary">Address:</span>
            <span className="ml-4 font-bold">{loggedUser?.address}</span>
          </li>
          <li className="mb-2">
            <span className="text-lg font-medium text-primary">Email:</span>
            <span className="ml-4 font-bold">{loggedUser?.email}</span>
          </li>
          <li className="mb-2">
            <span className="text-lg font-medium text-primary">Contact:</span>
            <span className="ml-4 font-bold">{loggedUser?.contact}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerProfile;
