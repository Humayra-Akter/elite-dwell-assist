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
    <div>
      {" "}
      <div className="bg-white p-4 shadow rounded-lg">
        <div class="text-center">
          <p class="text-2xl uppercase font-semibold">
            {loggedUser?.name}
            <span class="font-weight-light">, 27</span>
          </p>
          <div class="h5 font-weight-300">
            <i class="fa fa-home mr-2"></i>
            {loggedUser?.address}
          </div>
        </div>

        <hr className="my-4" />
        <div>
          <h3 className="text-lg text-primary font-semibold">
            Profile Details
          </h3>
          <p className="font-medium mt-2">
            Gender{" "}
            <span className="ml-20 font-bold capitalize">
              {loggedUser?.gender}
            </span>{" "}
          </p>
          <p className="font-medium mt-2">
            Date of Birth{" "}
            <span className="ml-10 font-bold">{loggedUser?.dob}</span>{" "}
          </p>{" "}
          <p className="font-medium mt-2">
            Address
            <span className="ml-20 font-bold">{loggedUser?.address}</span>{" "}
          </p>{" "}
          <p className="font-medium mt-2">
            Email
            <span className="ml-24 font-bold">{loggedUser?.email}</span>{" "}
          </p>
          <p className="font-medium mt-2">
            Contact
            <span className="ml-20 font-bold">{loggedUser?.contact}</span>{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
