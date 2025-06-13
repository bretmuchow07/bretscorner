import React from 'react';
import { Container } from "react-bootstrap";
import Particles from "../components/particles";
import "../App.css";
import { useDarkMode } from "../context/DarkModeContext";


function Projects() {
  const { isDarkMode } = useDarkMode();

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
       {isDarkMode && (
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#00bfff", "#ff69b4"]}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1}
          cameraDistance={20}
          className="fixed-top w-100 h-100"
        />
      )}
      <Container
        className="my-4"
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textShadow: "0 2px 8px #000",
        }}
      >
        <h1>Projects</h1>
        <p>
          This page is a placeholder for projects. It will be updated with content in the future.
        </p>
        <p>
          Stay tuned for more exciting projects that will be added here!
        </p>
      </Container>
    </div>
  );
}

export default Projects;
