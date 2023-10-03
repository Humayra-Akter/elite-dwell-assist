import React, { useEffect, useState } from "react";

const MaidProfile = () => {
  const [maid, setMaid] = useState(null);
  useEffect(() => {
    // Fetch maid data from the API
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        setMaid(data);
        console.log(data);
      });
  }, [maid]);
  console.log(maid);

  return (
    <div className="absolute bg-white p-4 shadow rounded-lg">
      <div className="flex items-center">
        <img className="w-24 h-24 rounded-full" src={maid?.img} alt="maid" />
        <div>
          <h2 className="text-2xl font-semibold">{maid?.name}</h2>
          <p className="text-gray-600">Email: {maid?.email}</p>
          <p className="text-gray-600">Phone: {maid?.contact}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <h3 className="text-lg font-semibold">Profile Details</h3>
        <p className="text-gray-600">
          Gender: {maid?.gender} | Date of Birth: {maid?.dob}
        </p>
        <p className="text-gray-600">Address: {maid?.address}</p>
        <p className="text-gray-600">NID: {maid?.nid}</p>
        <p className="text-gray-600">Experience: {maid?.experience} years</p>
        <p className="text-gray-600">
          Location: {maid?.location ? maid?.location.join(", ") : ""}
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <h3 className="text-lg font-semibold">Skills</h3>
        <ul className="list-disc list-inside text-gray-600">
          {maid?.task &&
            maid?.task.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
      </div>
      <hr className="my-4" />
      <div>
        <h3 className="text-lg font-semibold">Salary</h3>
        <ul className="list-disc list-inside text-gray-600">
          {maid?.salary &&
            maid?.salary.map((salary, index) => <li key={index}>${salary}</li>)}
        </ul>
      </div>
      <hr className="my-4" />
      <div>
        <p className="pt-2">
          <strong className="text-blue-800 underline">Availability:</strong>
          <ul>
            {maid?.availability?.map((daySlot, index) => (
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
