import React from "react";
import SideNav from "../components/sidenav";
import { Outlet } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

const AdminLayout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`d-flex min-vh-100 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      {/* Sidebar */}
      <SideNav />

      {/* Main Content Area */}
      <main className="flex-grow-1 p-4" style={{ marginLeft: 220 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
