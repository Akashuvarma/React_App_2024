import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";
const Layout = ({ children }) => {
  /* old method after outles props not required */
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
