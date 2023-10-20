import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AdminProfile = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/admin?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(user);
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
      <h2 className="text-3xl text-primary font-bold">{loggedUser?.name}</h2>

      <div className="grid lg:grid-cols-3">
        <div>Maid</div>
        <div>Babysitter</div>
        <div>Driver</div>
      </div>
    </div>
  );
};

export default AdminProfile;
