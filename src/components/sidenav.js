import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileAlt, faPuzzlePiece, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../context/DarkModeContext";
import "bootstrap/dist/css/bootstrap.min.css";

function SideNav() {
  const { isDarkMode } = useDarkMode();

  // Bootstrap classes for dark/light mode
  const navClass = `d-flex flex-column flex-shrink-0 p-3 vh-100 position-fixed top-0 start-0 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`;
  const linkClass = `nav-link d-flex align-items-center mb-2 ${isDarkMode ? "text-white" : "text-dark"}`;

  return (
    <nav className={navClass} style={{ width: "220px", zIndex: 100, paddingTop: "60px" }}>
      <a href="#" className={linkClass}>
        <FontAwesomeIcon icon={faUser} className="me-3" />
        Profile
      </a>
      <a href="#" className={linkClass}>
        <FontAwesomeIcon icon={faFileAlt} className="me-3" />
        Posts
      </a>
      <a href="#" className={linkClass}>
        <FontAwesomeIcon icon={faPuzzlePiece} className="me-3" />
        SideQuests
      </a>
      <a href="#" className={linkClass}>
        <FontAwesomeIcon icon={faProjectDiagram} className="me-3" />
        Projects
      </a>
    </nav>
  );
}

export default SideNav;