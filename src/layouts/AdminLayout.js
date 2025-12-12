import React from "react";
import SideNav from "../components/sidenav";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

const AdminLayout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`d-flex flex-column min-vh-100 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      {/* Sidebar and Main Content Area */}
      <div className="d-flex flex-grow-1">
        <SideNav />
        <div className="d-flex flex-column flex-grow-1" style={{ marginLeft: 220 }}>
          <main className="flex-grow-1 p-4">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;