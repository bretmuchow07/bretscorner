import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import _navbar from './components/navbar';
import Footer from './components/footer';
import React from 'react';
import { DarkModeProvider } from "./context/DarkModeContext";


function App() {
  return (
    <DarkModeProvider>
    <div className="App">
   <_navbar />
   <Footer/>
    </div>
    </DarkModeProvider>
  ) ;
}

export default App;
