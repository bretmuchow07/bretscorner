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
    <DarkModeProvider>
      <div className="d-flex flex-column min-vh-100 App">
        <Navbar />

     

        <Footer />
      </div>
    </DarkModeProvider>
  );
}


export default App;
