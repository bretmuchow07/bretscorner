import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDarkMode } from "../context/DarkModeContext";
import SideNav from "../components/sidenav";


function Dashboard() {
  const { isDarkMode } = useDarkMode();

  // Hide system nav on mount, restore on unmount
  useEffect(() => {
    const sysNav = document.getElementById("system-nav");
    if (sysNav) sysNav.style.display = "none";
    return () => {
      if (sysNav) sysNav.style.display = "";
    };
  }, []);

  // Bootstrap classes for dark/light mode
const containerClass = `d-flex flex-row ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`;

  return (
  <div className="d-flex flex-column min-vh-100">
  <div className="d-flex flex-grow-1" style={{ flexDirection: "row" }}>
    <SideNav />
    <main className="flex-grow-1 p-4" style={{ marginLeft: 220 }}>
      <p className="h2">Dashboard</p>
    </main>
  </div>


</div>
  );
}

export default Dashboard;