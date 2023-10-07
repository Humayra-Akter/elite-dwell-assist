import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MaidProfile = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/maid?email=${user.email}`)
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
    <div className="absolute bg-white p-4 shadow rounded-lg">
      <div className="flex gap-10 items-center">
        <img
          className="w-24 h-24 rounded-full"
          src={loggedUser?.img}
          alt="user"
        />
        <div class="text-center">
          <p class="text-2xl font-semibold">
            {loggedUser?.name}
            <span class="font-weight-light">, 27</span>
          </p>
          <div class="h5 font-weight-300">
            <i class="fa fa-home mr-2"></i>
            {loggedUser?.address}
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div>
        <h3 className="text-lg font-semibold">Profile Details</h3>
        <p className="text-gray-600">
          Gender: {loggedUser?.gender} | Date of Birth: {loggedUser?.dob}
        </p>
        <p className="text-gray-600">Address: {loggedUser?.address}</p>
        <p className="text-gray-600">NID: {loggedUser?.nid}</p>
        <p className="text-gray-600">
          Experience: {loggedUser?.experience} years
        </p>
        <p className="text-gray-600">
          Location:{" "}
          {loggedUser?.location ? loggedUser?.location.join(", ") : ""}
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <strong className=" text-blue-800 underline">Skills</strong>

        <ul className="list-disc list-inside text-gray-600">
          {loggedUser?.task && loggedUser?.salary ? (
            <ul>
              {loggedUser?.task.map((taskName, index) => (
                <li key={index}>
                  <strong className="capitalize">{taskName}: </strong>
                  {loggedUser?.salary[index]}
                </li>
              ))}
            </ul>
          ) : (
            "Salary information not available"
          )}
        </ul>
      </div>
      <hr className="my-4" />

      <hr className="my-4" />
      <div>
        <p className="pt-2">
          <strong className="text-blue-800 underline">Availability:</strong>
          <ul>
            {loggedUser?.availability?.map((daySlot, index) => (
              <li key={index}>
                <strong>{daySlot}</strong>
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default MaidProfile;
