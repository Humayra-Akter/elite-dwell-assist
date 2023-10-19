import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MaidProfile = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState([]);
  const availabilityOptions = [
    { label: "08.00 AM - 11.00 AM", value: "sokal" },
    { label: "11.00 AM - 02.00 PM", value: "dupur" },
    { label: "02.00 PM - 05.00 PM", value: "bikal" },
    { label: "05.00 PM - 08.00 PM", value: "raat" },
  ];
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
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-end">
          <h1 className="text-center text-2xl text-primary mr-36 font-bold">
            {loggedUser?.name}
          </h1>

          <img
            src={loggedUser?.img}
            alt="user"
            className="absolute w-32 h-32 rounded-md"
          />
        </div>

        {/* <hr className="my-4" /> */}
        <div className="col-span-2 mt-10">
          <strong className="text-blue-800 underline">Profile Details</strong>
          <p className="text-gray-600">
            <strong className="capitalize">Gender: </strong>
            {loggedUser?.gender} | Date of Birth: {loggedUser?.dob}
          </p>
          <p className="text-gray-600">
            <strong className="capitalize">Address:</strong>{" "}
            {loggedUser?.address}
          </p>
          <p className="text-gray-600">
            <strong className="capitalize">NID:</strong> {loggedUser?.nid}
          </p>
          <p className="text-gray-600">
            <strong className="capitalize">Experience: </strong>
            {loggedUser?.experience} years
          </p>
          <p className="text-gray-600">
            <strong className="capitalize">Location: </strong>
            {loggedUser?.location ? loggedUser?.location.join(", ") : ""}
          </p>
        </div>
        <hr className="my-4" />
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <strong className="text-blue-800 underline">Skills</strong>

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

          <div>
            <p className="pt-2">
              <strong className="text-blue-800 underline">Availability:</strong>
              <ul>
                {loggedUser?.availability?.map((daySlot, index) => (
                  <li key={index}>
                    <strong>
                      {
                        availabilityOptions.find(
                          (option) => option.value === daySlot
                        )?.label
                      }
                    </strong>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidProfile;
