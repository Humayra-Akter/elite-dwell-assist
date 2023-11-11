import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AdminProfile = () => {
  const [user] = useAuthState(auth);
  const [customers, setCustomers] = useState([]);
  const [maids, setMaids] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [babysitters, setBabysitters] = useState([]);
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

  useEffect(() => {
    fetch("http://localhost:5000/customer")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/babysitter")
      .then((res) => res.json())
      .then((data) => {
        setBabysitters(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        setMaids(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/driver")
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-primary font-bold">{loggedUser?.name}</h2>

      <div className="grid lg:grid-cols-4 gap-4">
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Customer</h2>
            <p className="font-bold">Total : {customers.length}</p>
          </div>
        </div>
        <div className="card bg-teal-600 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Maid</h2>
            <p className="font-bold">Total :{maids.length} </p>
          </div>
        </div>
        <div className="card bg-pink-600 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Babysitter</h2>
            <p className="font-bold">Total : {babysitters.length}</p>
          </div>
        </div>
        <div className="card bg-yellow-600 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Driver</h2>
            <p className="font-bold">Total : {drivers.length} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
