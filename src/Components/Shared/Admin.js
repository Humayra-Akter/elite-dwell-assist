import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Admin = () => {
  const [userType, setUserType] = useState("customer");
  const customerData = [
    { name: "Jan", count: 50 },
    { name: "Feb", count: 65 },
    { name: "Mar", count: 80 },
    { name: "Apr", count: 45 },
    { name: "May", count: 70 },
    { name: "Jun", count: 90 },
  ];
  const [maids, setMaids] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/maid")
      .then((res) => res.json())
      .then((data) => {
        setMaids(data);
      });
  }, []);
  const handleUserTypeChange = (type) => {
    setUserType(type);
  };
  const experienceData = maids.map((maid) => ({
    name: maid.name,
    experience: parseFloat(maid.experience),
  }));
  const taskFrequency = maids.reduce((tasks, maid) => {
    maid.task.forEach((task) => {
      if (tasks[task]) {
        tasks[task]++;
      } else {
        tasks[task] = 1;
      }
    });
    return tasks;
  }, {});

  //   const taskData = Object.keys(taskFrequency).map((task) => ({
  //     name: task,
  //     frequency: taskFrequency[task],
  //   }));
  //   const salaryData = maids.map((maid) => ({
  //     name: maid.name,
  //     minSalary: parseFloat(Math.min(...maid.salary)),
  //     maxSalary: parseFloat(Math.max(...maid.salary)),
  //   }));

  const taskData = maids.reduce((tasks, maid) => {
    maid.task.forEach((task) => {
      if (tasks[task]) {
        tasks[task]++;
      } else {
        tasks[task] = 1;
      }
    });
    return tasks;
  }, {});

  const data = Object.keys(taskData).map((task) => ({
    name: task,
    value: taskData[task],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="p-4 flex justify-center space-x-4">
        <button
          className={`${
            userType === "customer" ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
          onClick={() => handleUserTypeChange("customer")}
        >
          Customers
        </button>
        <button
          className={`${
            userType === "maid" ? "bg-green-500 text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
          onClick={() => handleUserTypeChange("maid")}
        >
          Maids
        </button>
        <button
          className={`${
            userType === "driver" ? "bg-yellow-500 text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
          onClick={() => handleUserTypeChange("driver")}
        >
          Drivers
        </button>
        <button
          className={`${
            userType === "babysitter" ? "bg-pink-500 text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
          onClick={() => handleUserTypeChange("babysitter")}
        >
          Babysitters
        </button>
      </div>
      <div className="p-4">
        {userType === "customer" && (
          <div>
            {/* Your customer management component */}
            <h2 className="text-xl font-bold mb-2">Customer Management</h2>
            <BarChart width={400} height={300} data={customerData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            <h3>Experience Distribution</h3>
            <BarChart width={600} height={300} data={experienceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="experience" fill="#8884d8" />
            </BarChart>{" "}
            <h3>Task Frequency</h3>
            <BarChart width={600} height={300} data={taskData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="frequency" fill="#8884d8" />
            </BarChart>{" "}
            {/* <h3>Salary Range</h3>
            <BarChart width={600} height={300} data={salaryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="minSalary" fill="#8884d8" />
              <Bar dataKey="maxSalary" fill="#82ca9d" />
            </BarChart> */}
            <h3>Task Distribution</h3>
            <PieChart width={600} height={300}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        )}
        {userType === "maid" && (
          <div>
            {/* Your maid management component */}
            <h2 className="text-xl font-bold mb-2">Maid Management</h2>
            {/* Add your code to display and manage maid data here */}
          </div>
        )}
        {userType === "driver" && (
          <div>
            {/* Your driver management component */}
            <h2 className="text-xl font-bold mb-2">Driver Management</h2>
            {/* Add your code to display and manage driver data here */}
          </div>
        )}
        {userType === "babysitter" && (
          <div>
            {/* Your babysitter management component */}
            <h2 className="text-xl font-bold mb-2">Babysitter Management</h2>
            {/* Add your code to display and manage babysitter data here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
