import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Services</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
