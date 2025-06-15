import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDarkMode } from "../../context/DarkModeContext";
import SideNav from "../../components/sidenav";
import Footer from "../../components/footer";

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
  const containerClass = `d-flex flex-row min-vh-100 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`;

  return (
    <div className={containerClass} style={{ flexDirection: "row" }}>
      <SideNav />
      <div className="d-flex flex-column flex-grow-1" style={{ minHeight: "100vh", marginLeft: 220 }}>
        <Container className="flex-grow-1 p-4">
          <h1 className="mb-4">Dashboard</h1>
          <p>Welcome to the admin dashboard!</p>
          {/* Add more dashboard content here */}
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;