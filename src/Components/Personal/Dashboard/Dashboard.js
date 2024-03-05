import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState({
    users: 100,
    revenue: 5000,
    orders: 200,
  });

  const handleDataUpdate = () => {
     setData({
      users: Math.floor(Math.random() * 1000),
      revenue: Math.floor(Math.random() * 10000),
      orders: Math.floor(Math.random() * 500),
    });
  };
  return (
    <>
      <div className="Dashboard">
        <div className="stats-container">
          <div className="stat">
            <h2>Users</h2>
            <p>{data.users}</p>
          </div>
          <div className="stat">
            <h2>Revenue</h2>
            <p>${data.revenue}</p>
          </div>
          <div className="stat">
            <h2>Orders</h2>
            <p>{data.orders}</p>
          </div>
        </div>
        <button className="update-button" onClick={handleDataUpdate}>
          Update Data
        </button>
      </div>
    </>
  );
};

export default Dashboard;
