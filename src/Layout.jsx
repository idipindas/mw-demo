import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./componets/Footer";
import NavigationBar from "./componets/NavigationBar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen ">
      <NavigationBar />
      <div className="flex-grow "> 
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
