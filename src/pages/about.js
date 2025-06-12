import React from 'react';
import { Container } from 'react-bootstrap';
import Silk from '../components/silk';
import { useDarkMode } from "../context/DarkModeContext";
import Profile from '../assets/images/iambret.png';
import Loader from '../components/Loader';

function About() {
  const { isDarkMode } = useDarkMode();
  const loading = false; // Set to true to show loader

  return (
    <div>
      {/* Optional background animation for dark mode */}
      {/* {isDarkMode && (
        <Silk
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      )} */}

      <Container className="my-5 text-center">
        <h1>About Me</h1>
        <div className="d-flex flex-column align-items-center">
          <img
            src={Profile}
            alt="Profile"
            className="mb-3"
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '20px', // Rounded corners for square image
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          />
          <h2 className="mt-3">Hey, I’m Bret!</h2>
          <p className="text-muted">Just a web developer messing around.</p>
          <p style={{ maxWidth: '700px' }}>
            Welcome to my corner!!! This isn’t a portfolio – just a chill space where I share what I’m into. You’ll find a mix of recent projects, thoughts on tech, maybe some anime takes, music recs, or whatever I’m vibing with at the moment.
          </p>
          <p style={{ maxWidth: '700px' }}>
            I enjoy building stuff on the web (seriously, code is kinda fun), and I sometimes drop things on GitHub when they’re not too broken.
          </p>
          <p>
            <a 
              href="https://github.com/yourusername" // Replace with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Check out my GitHub
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
