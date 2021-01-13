import React from "react";
import AppRouter from "./AppRouter";
import SideBar from "../SideBar";

const AppLayout = () => {
  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content overflow-y-auto">
        <AppRouter />
      </div>
    </div>
  );
};

export default AppLayout;
