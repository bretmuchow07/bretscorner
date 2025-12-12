import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileAlt, faPuzzlePiece, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { signOut } from "../services/authService";
import "bootstrap/dist/css/bootstrap.min.css";

function SideNav() {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Bootstrap classes for dark/light mode
  const navClass = `d-flex flex-column flex-shrink-0 p-3 vh-100 position-fixed top-0 start-0 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}`;
  const linkClass = `nav-link d-flex align-items-center mb-2 ${isDarkMode ? "text-white" : "text-dark"}`;
  const btnClass = `btn btn-link nav-link d-flex align-items-center mb-2 ${isDarkMode ? "text-white" : "text-dark"}`;

  return (
    <nav className={navClass} style={{ width: "220px", zIndex: 100 }}>
      {/* Dashboard Link */}
      <Link to="/admin" className={linkClass}>
        <FontAwesomeIcon icon={faUser} className="me-3" />
        Dashboard
      </Link>
      {/* Posts Link */}
      <Link to="/admin/posts" className={linkClass}>
        <FontAwesomeIcon icon={faFileAlt} className="me-3" />
        Posts
      </Link>
      {/* Add Post Link */}
      <Link to="/admin/posts/add" className={linkClass}>
        <FontAwesomeIcon icon={faPuzzlePiece} className="me-3" />
        Add Post
      </Link>
      {/* Sign Out Button */}
      <button onClick={handleSignOut} className={btnClass} style={{ textDecoration: 'none', textAlign: 'left' }}>
        <FontAwesomeIcon icon={faSignOutAlt} className="me-3" />
        Sign Out
      </button>
    </nav>
  );
}

export default SideNav;