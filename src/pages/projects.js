import React from 'react';
import { Container } from "react-bootstrap";
import Particles from "../components/particles";
import "../App.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects'; // Import static data

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
        <img
          src="https://via.placeholder.com/800x400"
          alt="Project Showcase"
          className="img-fluid rounded mb-4"
        />
        <p>
          Welcome to my little corner of the internet where I get to show off some
          things I’ve built, tinkered with, or just had fun working on. No big promises,
          just cool stuff I’m excited about.
        </p>
        <p>
          Some of these projects are complete, some are still in the works, and some
          might never be “done” — but they’re all things I’ve poured time, curiosity,
          and a good dose of late-night energy into.
        </p>

        <div className="row g-4">
          {projectsData.map(project => (
            <div className="col-12" key={project.id}>
              <div className="d-flex align-items-center bg-dark rounded shadow p-3 flex-md-row flex-column mt-4">
                <img
                  src={project.thumbnail}
                  className="rounded me-4 mb-3 mb-md-0"
                  alt={project.title}
                  style={{ width: 150, height: 100, objectFit: "cover" }}
                />
                <div>
                  <h5>{project.title}</h5>
                  <p className="mb-2">
                    {project.description}
                  </p>
                  <Link to={`/project/${project.id}`} className="btn btn-link p-0 text-primary">
                    Check it out &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
