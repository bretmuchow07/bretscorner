import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { DarkModeProvider } from "./context/DarkModeContext";

// Layouts
import Navbar from './components/navbar';
import Footer from './components/footer';
import AdminLayout from './admin/adminLayout';

// Public Pages
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
// import Post from './pages/post';
import SideQuests from './pages/sidequest';

// Admin Pages
import Dashboard from './admin/dashboard';

function LayoutWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="d-flex flex-column min-vh-100 App">
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
          <Route path="/sidequests" element={<SideQuests />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <LayoutWrapper />
    </DarkModeProvider>
  );
}

export default App;
