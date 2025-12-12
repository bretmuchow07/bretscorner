import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DarkModeProvider } from "./context/DarkModeContext";

// Layout Components
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 App">
      <Navbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


export default App;
